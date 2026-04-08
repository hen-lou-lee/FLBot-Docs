# Privacy Policy

**Last updated:** April 8, 2026 (rev. 4)

This Privacy Policy explains how FLBot ("the Bot") collects, uses, and stores information about users.

---

## 1. Information We Collect

The Bot collects the following data only when you interact with it directly:

| Data | How It Is Collected |
|---|---|
| Discord User ID | Automatically, when you use any Bot command |
| Torn City Player ID | When you voluntarily use `/link` |
| Torn City Player Name | Retrieved from the Torn API at link time |
| Faction Membership Status | Verified via the Torn API at link time |
| Personal Torn API Key | Only if you voluntarily provide one via `/link api_key:[key]` |

The following data is retrieved on demand and is **not persistently stored**:

| Data | Command | Source |
|---|---|---|
| Personal stats (Xanax, Energy Drinks, etc.) | `/leaderboard` | Torn API, using bot key |
| Bank balance and stock holdings | `/investments` | Torn API, using your personal key |
| Company profile, financials, efficiency | `/company status` | Torn API, using your personal key |
| Company employee list, positions, stats | `/company employees`, `/company optimize` | Torn API, using your personal key |
| Company stock inventory | `/company stock` | Torn API, using your personal key |

No messages, voice data, or other personal information are collected or stored.

---

## 2. How We Use Your Information

Collected data is used exclusively to:

- Associate your Discord account with your Torn City profile for Bot features.
- Verify faction membership to restrict access to relevant commands.
- Display your Torn profile information alongside banking requests.
- Use your personal Torn API key (if provided) to perform lookups on your behalf, including faction data, investment data, and company director data.

Your data is never sold, shared with third parties, or used for advertising.

---

## 3. Data Storage

Linked account data (Discord User ID → Torn Player ID, and optionally your personal Torn API key) is stored in a local SQLite database (`links.db`) on the server hosting the Bot. It is not stored in any external database or cloud service.

Your personal API key, if provided, is stored in encrypted form (AES-256 SQLCipher + AES-128 Fernet column encryption) within this local database. It is accessible only to the Bot operator and is used solely to make Torn API requests on your behalf.

Company data, employee information, and stock data retrieved via `/company` commands is fetched live from the Torn API and displayed in Discord. None of this data is written to the database or retained after the command response is sent.

---

## 4. Account Verification and Cross-Checking

When you use `/link`, the Bot queries the Torn API to confirm that your Torn account is officially associated with your Discord account. If Torn's records show your Torn ID is linked to a different Discord account, the link will be rejected. This cross-check is performed to prevent impersonation and to maintain consistency with other Torn-integrated services.

Faction administrators may also use `/linkall` to automatically link all current faction members using Torn's public Discord verification records. This process uses the same Discord ID and Torn ID association that Torn City maintains on their own servers. No additional data is collected beyond what is described in Section 1. If you do not wish to be linked, you may request removal at any time using `/unlink` or by contacting the Bot operator.

---

## 5. Personal API Key

You may optionally provide your personal Torn API key via `/link api_key:[key]`. By doing so, you acknowledge that:

- The key is stored in encrypted form on the Bot's host server.
- It is used only to make Torn API requests on your behalf — including profile lookups, balance checks, investment data, verification, and company director data if you use `/company` commands.
- It is never transmitted to any third party other than the Torn City API.
- You may remove it at any time using `/unlink key_only:True` without removing your account link.
- For best security, generate a pre-scoped key using [this link](https://www.torn.com/preferences.php#tab=api?step=addNewKey&company=profile,detailed,employees,stock&faction=members,wars,basic,chain,news,balance,attacks&user=faction,basic,discord,personalstats,money,stocks,log&logIds=125&torn=stocks&title=FLBot_V5), which grants only the exact permissions the Bot requires. You should not provide a key with higher access than necessary.

---

## 6. Data Retention

Your linked account data is retained until you remove it yourself using `/unlink`, or until the Bot operator deletes it manually. Your personal API key can be independently removed at any time using `/unlink key_only:True` without removing your account link. You may request full removal at any time through your server's administration.

On-demand data (company info, employee stats, stock levels, investment data) is never retained — it is fetched, displayed, and discarded within the same command response.

---

## 7. Third-Party Services

The Bot interacts with the following third-party services:

- **Torn City API** — Used to retrieve player, faction, and company data, and to verify Discord-to-Torn account associations. See [Torn's Privacy Policy](https://www.torn.com/privacypolicy.php).
- **Discord** — The platform on which the Bot operates. See [Discord's Privacy Policy](https://discord.com/privacy).

---

## 8. Your Rights

You have the right to:

- **Access** — Ask the Bot operator what data is stored about you.
- **Deletion** — Use `/unlink` to remove your linked account data, or `/unlink key_only:True` to remove only your API key. Contact the Bot operator for full removal.
- **Correction** — Re-link your account or update your API key if your information changes.

---

## 9. Children's Privacy

The Bot is not intended for users under 13 years of age, in accordance with Discord's Terms of Service.

---

## 10. Changes to This Policy

This policy may be updated at any time. Continued use of the Bot after changes constitutes acceptance of the revised policy.

---

## 11. Contact

For privacy-related questions or data removal requests, contact the Bot operator through your Discord server's administration.
