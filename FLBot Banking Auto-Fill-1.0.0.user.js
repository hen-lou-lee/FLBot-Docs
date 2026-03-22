// ==UserScript==
// @name         FLBot Banking Auto-Fill
// @namespace    https://github.com/hen-lou-lee/FLBot-Docs
// @version      1.0.0
// @description  Auto-fills the Torn faction Give to User form when opened via an FLBot withdrawal request link. Reads the torn_id and amount from the URL hash and populates the recipient and amount fields automatically.
// @author       FLBot
// @match        https://www.torn.com/factions.php*
// @grant        none
// @run-at       document-idle
// ==/UserScript==

(function () {
    'use strict';

    // ── Parse parameters from the URL hash ────────────────────────────────────
    // FLBot generates URLs in the format:
    //   factions.php?step=your#/tab=controls&giveMoneyTo=12345&money=500000
    //   factions.php?step=your#/tab=controls&givePointsTo=12345&points=100

    function getHashParams() {
        const hash = window.location.hash || '';
        const params = {};
        // Strip leading #/ or #
        const clean = hash.replace(/^#\/?/, '');
        clean.split('&').forEach(part => {
            const [key, value] = part.split('=');
            if (key && value) params[decodeURIComponent(key)] = decodeURIComponent(value);
        });
        return params;
    }

    const params = getHashParams();
    const tornId = params.giveMoneyTo || params.givePointsTo || null;
    const amount = params.money || params.points || null;
    const isPoints = !!params.givePointsTo;

    // Nothing to do if this isn't an FLBot link
    if (!tornId || !amount) return;

    console.log(`[FLBot] Auto-fill triggered — Torn ID: ${tornId}, Amount: ${amount}, Type: ${isPoints ? 'Points' : 'Cash'}`);

    // ── Wait for a DOM element to appear (Torn uses React — elements load late) ─
    function waitFor(selectorFn, timeout = 15000, interval = 300) {
        return new Promise((resolve, reject) => {
            const start = Date.now();
            const timer = setInterval(() => {
                const el = selectorFn();
                if (el) {
                    clearInterval(timer);
                    resolve(el);
                } else if (Date.now() - start > timeout) {
                    clearInterval(timer);
                    reject(new Error(`[FLBot] Timed out waiting for element`));
                }
            }, interval);
        });
    }

    // ── Trigger a React-compatible input change ────────────────────────────────
    // React overrides native input value setters — we must use the React
    // internal tracker to fire onChange properly, otherwise the form ignores us.
    function setReactInputValue(input, value) {
        const nativeInputValueSetter = Object.getOwnPropertyDescriptor(
            window.HTMLInputElement.prototype, 'value'
        ).set;
        nativeInputValueSetter.call(input, value);
        input.dispatchEvent(new Event('input', { bubbles: true }));
        input.dispatchEvent(new Event('change', { bubbles: true }));
    }

    // ── Main auto-fill logic ───────────────────────────────────────────────────
    async function autoFill() {
        try {
            // Step 1: Find the recipient input field
            // Torn's give-to-user form has a text input for the player name/ID
            // We try several selectors in order of specificity
            const recipientInput = await waitFor(() =>
                document.querySelector('input[placeholder*="name" i]') ||
                document.querySelector('input[placeholder*="player" i]') ||
                document.querySelector('input[placeholder*="user" i]') ||
                document.querySelector('.give-to-user input[type="text"]') ||
                document.querySelector('.controls-content input[type="text"]') ||
                document.querySelector('input[name="userID"]') ||
                document.querySelector('input[name="recipientName"]')
            );

            console.log('[FLBot] Found recipient input, filling Torn ID:', tornId);
            recipientInput.focus();
            setReactInputValue(recipientInput, tornId);

            // Small delay to let Torn's autocomplete/lookup fire
            await new Promise(r => setTimeout(r, 800));

            // Step 2: If Torn shows a dropdown suggestion, click the first match
            const suggestion = document.querySelector(
                '.auto-complete li:first-child, ' +
                '.autocomplete-result:first-child, ' +
                '[class*="suggestion"]:first-child, ' +
                '[class*="dropdown"] li:first-child'
            );
            if (suggestion) {
                console.log('[FLBot] Clicking autocomplete suggestion');
                suggestion.click();
                await new Promise(r => setTimeout(r, 500));
            }

            // Step 3: Find the amount input field
            const amountInput = await waitFor(() =>
                document.querySelector('input[placeholder*="amount" i]') ||
                document.querySelector('input[placeholder*="money" i]') ||
                document.querySelector('input[placeholder*="cash" i]') ||
                document.querySelector('input[placeholder*="point" i]') ||
                document.querySelector('input[name="amount"]') ||
                document.querySelector('input[name="money"]') ||
                document.querySelector('input[type="number"]')
            );

            console.log('[FLBot] Found amount input, filling:', amount);
            amountInput.focus();
            setReactInputValue(amountInput, amount);

            // Step 4: Show a subtle confirmation banner
            showBanner(tornId, amount, isPoints);

        } catch (err) {
            console.warn('[FLBot] Auto-fill failed:', err.message);
            // Show a manual helper banner so banker knows what to enter
            showFallbackBanner(tornId, amount, isPoints);
        }
    }

    // ── Visual banner ──────────────────────────────────────────────────────────
    function showBanner(tornId, amount, isPoints) {
        const formatted = isPoints
            ? `${parseInt(amount).toLocaleString()} points`
            : `$${parseInt(amount).toLocaleString()}`;

        const banner = document.createElement('div');
        banner.style.cssText = `
            position: fixed;
            top: 12px;
            left: 50%;
            transform: translateX(-50%);
            background: #2ecc71;
            color: #000;
            padding: 10px 20px;
            border-radius: 8px;
            font-size: 14px;
            font-weight: bold;
            z-index: 999999;
            box-shadow: 0 4px 12px rgba(0,0,0,0.3);
        `;
        banner.textContent = `✅ FLBot Auto-filled: Torn ID ${tornId} — ${formatted}`;
        document.body.appendChild(banner);
        setTimeout(() => banner.remove(), 5000);
    }

    function showFallbackBanner(tornId, amount, isPoints) {
        const formatted = isPoints
            ? `${parseInt(amount).toLocaleString()} points`
            : `$${parseInt(amount).toLocaleString()}`;

        const banner = document.createElement('div');
        banner.style.cssText = `
            position: fixed;
            top: 12px;
            left: 50%;
            transform: translateX(-50%);
            background: #f39c12;
            color: #000;
            padding: 10px 20px;
            border-radius: 8px;
            font-size: 14px;
            font-weight: bold;
            z-index: 999999;
            box-shadow: 0 4px 12px rgba(0,0,0,0.3);
            text-align: center;
        `;
        banner.innerHTML = `
            ⚠️ FLBot: Please fill manually<br>
            <span style="font-weight:normal">Torn ID: <b>${tornId}</b> — Amount: <b>${formatted}</b></span>
        `;
        document.body.appendChild(banner);
        setTimeout(() => banner.remove(), 10000);
    }

    // ── Wait for page to fully load then run ──────────────────────────────────
    // Torn's faction page is a React SPA — we wait for the controls tab to render
    // before attempting to fill anything in.

    // If the URL already has #/tab=controls, wait for content to appear
    // If Torn needs to navigate to the tab first, observe DOM changes
    const observer = new MutationObserver(() => {
        const hash = window.location.hash || '';
        if (hash.includes('tab=controls') || hash.includes('option-give-to-user')) {
            // Controls tab is active — attempt fill
            observer.disconnect();
            setTimeout(autoFill, 600); // small delay for React to finish rendering
        }
    });

    // Start observing hash changes and DOM mutations
    observer.observe(document.body, { childList: true, subtree: true });

    // Also try immediately in case the page is already on the right tab
    setTimeout(() => {
        const hash = window.location.hash || '';
        if (hash.includes('tab=controls') || hash.includes('option-give-to-user') || hash.includes('giveMoneyTo')) {
            observer.disconnect();
            autoFill();
        }
    }, 1500);

    // Listen for hash changes (Torn SPA navigation)
    window.addEventListener('hashchange', () => {
        const hash = window.location.hash || '';
        if (hash.includes('giveMoneyTo') || hash.includes('givePointsTo')) {
            setTimeout(autoFill, 800);
        }
    });

})();