# Terms of Service

**Last updated:** March 22, 2026

By using FLBot ("the Bot") in any Discord server, you agree to the following terms.

---

## 1. Acceptance of Terms

Use of the Bot constitutes your acceptance of these Terms of Service. If you do not agree, do not use the Bot.

---

## 2. Description of Service

FLBot is a Discord bot designed to assist Torn City faction management. It provides features including chain monitoring, war alerts, banking requests, member status lookups, and account linking between Discord and Torn City profiles.

---

## 3. Eligibility

You must comply with:
- [Discord's Terms of Service](https://discord.com/terms)
- [Torn City's Terms of Service](https://www.torn.com/terms.php)

Use of the Bot is intended for members of authorized Discord servers only.

---

## 4. Data Collection and Storage

The Bot collects and stores the following data:

- **Discord User ID** — used to identify users within the server.
- **Torn City Player ID and Name** — collected when a user voluntarily links their account via `/link`.
- **Faction Membership Status** — verified at the time of account linking and when `/verify` is used.
- **Personal Torn API Key** — only if you voluntarily provide one via `/link` or `/setkey`. This is stored locally and used solely to make Torn API requests on your behalf.

All data is stored in a local SQLite database on the server hosting the Bot. No data is sold or shared with third parties.

---

## 5. Account Linking and Verification

By using `/link`, you consent to associating your Discord account with your Torn City player ID. You may remove this association at any time using `/unlink`.

When linking, the Bot cross-checks your Torn account against Torn's official Discord verification records. If your Torn account is not linked to your Discord account on Torn's servers, the link may be rejected. You can establish this connection at [torn.com/discord](https://www.torn.com/discord).

Use `/verify` to refresh your faction status, role assignment, and nickname at any time.

---

## 6. Personal Torn API Key

You may optionally provide your personal Torn API key via `/link` or `/setkey`. By doing so you agree that:

- The key is stored locally on the Bot's host server.
- It will be used to make Torn API requests on your behalf to improve performance and reduce reliance on the Bot's shared key.
- The minimum required access level is **Limited Access**. You must enable the following selections on your key: **Public**, **Stocks**, and **Bank**. A Public-only key will not have sufficient permissions for all personal commands and will return API error 16.
- To generate a correctly scoped key, visit [torn.com/preferences.php#tab=api](https://www.torn.com/preferences.php#tab=api) and enable only the required selections listed above.
- You may remove it at any time using `/removekey` without affecting your account link.
- The Bot operator accepts no responsibility for any consequences arising from a compromised API key.

---

## 7. Banking and Financial Requests

The `/withdraw` command facilitates in-game currency request coordination within Torn City. The Bot does not handle, store, or transfer any real-world money. All financial activity is entirely within the Torn City game environment.

---

## 8. Prohibited Use

You must not use the Bot to:
- Harass, impersonate, or harm other users.
- Link a Torn account that does not belong to you.
- Provide an API key that does not belong to you.
- Circumvent or exploit Bot functionality for unintended purposes.
- Violate Discord's or Torn City's Terms of Service.

---

## 9. Availability

The Bot is provided as-is with no guarantee of uptime, accuracy, or availability. Features may change or be discontinued at any time without notice.

---

## 10. Limitation of Liability

The Bot's operators are not liable for any loss, damage, or disruption arising from use of the Bot, including but not limited to in-game losses, missed chain alerts, incorrect vault payments, or consequences arising from a stored API key being exposed.

---

## 11. Changes to These Terms

These terms may be updated at any time. Continued use of the Bot after changes constitutes acceptance of the revised terms.

---

## 12. Contact

For questions or concerns, contact the Bot operator through your Discord server's administration.
