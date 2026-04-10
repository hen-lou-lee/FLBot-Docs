# Terms of Service

**Last updated:** April 10, 2026

By using FLBot ("the Bot") in any Discord server, you agree to the following terms.

---

## 1. Acceptance of Terms

Use of the Bot constitutes your acceptance of these Terms of Service. If you do not agree, do not use the Bot.

---

## 2. Description of Service

FLBot is a Discord bot designed to assist Torn City faction and company management. It provides features including:

- **Chain monitoring** — live chain status and milestone alerts
- **War alerts** — ranked war tracking and notifications
- **Retaliation tracking** — incoming hit alerts with a timed retaliation window
- **Banking requests** — in-faction withdrawal coordination via `/bank`
- **Member management** — account linking, Discord verification, and role assignment
- **Stat leaderboards** — weekly and monthly stat rankings with personal progress tracking
- **Gym energy tracking** — monthly gym energy usage logs and summaries
- **Giveaways** — timed prize giveaways within your server
- **Investment reporting** — personal Torn stock and vault balance lookups
- **Company director tools** — employee management, stock tracking, and position optimisation

---

## 3. Eligibility

You must comply with:
- [Discord's Terms of Service](https://discord.com/terms)
- [Torn City's Terms of Service](https://www.torn.com/terms.php)

Use of the Bot is intended for members of authorised Discord servers only.

---

## 4. Data Collection and Storage

The Bot collects and stores the following data:

- **Discord User ID** — used to identify users within the server.
- **Torn City Player ID and Name** — collected when a user voluntarily links their account via `/link`.
- **Faction Membership Status** — verified at the time of account linking and when `/verify` is used.
- **Personal Torn API Key** — only if you voluntarily provide one via `/link api_key:[key]`. This is stored locally under three independent layers of encryption (SQLCipher AES-256, Fernet column encryption, and AES-256-GCM envelope) and used solely to make Torn API requests on your behalf.
- **Stat snapshots and monthly baselines** — personal stat values (Xanax used, Energy Drinks used, etc.) stored for leaderboard and progress calculations.
- **Gym energy logs** — energy usage entries collected from your Torn gym activity log.
- **Activity records** — daily last-action timestamps for activity tracking.

All data is stored in a local SQLite database on the server hosting the Bot. No data is sold or shared with third parties.

---

## 5. Account Linking and Verification

By using `/link`, you consent to associating your Discord account with your Torn City player ID. You may remove this association at any time using `/unlink`.

When linking, the Bot cross-checks your Torn account against Torn's official Discord verification records. If your Torn account is not linked to your Discord account on Torn's servers, the link may be rejected. You can establish this connection at [torn.com/discord](https://www.torn.com/discord).

Use `/verify` to refresh your faction status, role assignment, and nickname at any time.

---

## 6. Personal Torn API Key

You may optionally provide your personal Torn API key via `/link api_key:[key]`. By doing so you agree that:

- The key is stored locally on the Bot's host server under three independent layers of encryption.
- It will be used to make Torn API requests on your behalf, including faction data, personal stats, gym energy logs, investment data, and — if you are a company director — company profile, employee, and stock data.
- For best security, generate a pre-scoped key using [this link](https://www.torn.com/preferences.php#tab=api?step=addNewKey&company=profile,detailed,employees,stock&faction=members,wars,basic,chain,news,balance,attacks&user=faction,basic,discord,personalstats,money,stocks,log&logIds=125&torn=stocks&title=FLBot_V5), which grants only the exact permissions the Bot requires and nothing more.
- You may remove it at any time using `/unlink key_only:True` without affecting your account link.
- The Bot operator accepts no responsibility for any consequences arising from a compromised API key.

---

## 7. Company Director Features

The `/company` commands (status, employees, stock, optimize) access your Torn company data exclusively via your personal Torn API key. By using these commands you acknowledge that:

- The Bot will retrieve your company's profile, employee list, stock inventory, and financial data from the Torn API on your behalf.
- This data is displayed in Discord in response to your command and is not persistently stored.
- These commands are intended for use by company directors or authorised personnel only.

---

## 8. Banking and Financial Requests

The `/bank` command facilitates in-game currency request coordination within Torn City. The Bot does not handle, store, or transfer any real-world money. All financial activity is entirely within the Torn City game environment.

---

## 9. Giveaways

The `/giveaway` commands allow server members to host and enter prize giveaways. By participating you acknowledge that:

- Giveaways are entirely in-game or within-server in nature. The Bot does not facilitate real-world prizes.
- The giveaway host is solely responsible for honouring any prize.
- The Bot randomly selects a winner from entrants at the time the giveaway ends.

---

## 10. Prohibited Use

You must not use the Bot to:
- Harass, impersonate, or harm other users.
- Link a Torn account that does not belong to you.
- Provide an API key that does not belong to you.
- Access company data you are not authorised to view.
- Circumvent or exploit Bot functionality for unintended purposes.
- Violate Discord's or Torn City's Terms of Service.

---

## 11. Availability

The Bot is provided as-is with no guarantee of uptime, accuracy, or availability. Features may change or be discontinued at any time without notice.

---

## 12. Limitation of Liability

The Bot's operators are not liable for any loss, damage, or disruption arising from use of the Bot, including but not limited to in-game losses, missed chain alerts, incorrect vault payments, company mismanagement, or consequences arising from a stored API key being exposed.

---

## 13. Changes to These Terms

These terms may be updated at any time. Continued use of the Bot after changes constitutes acceptance of the revised terms.

---

## 14. Contact

For questions or concerns, contact the Bot operator through your Discord server's administration.
