# SGTaxPal

[**Open the public interactive demo →**](https://influencees-tax-pal.zhur02.chatgpt.site)

SGTaxPal is an MVP finance and tax-recording dashboard for Singapore content creators. It helps creators record income and tax-related expenses, keep supporting invoices, and understand key IRAS considerations in plain language.

> This project is an educational tracking tool, not tax, accounting, or legal advice. Confirm your individual obligations with IRAS or a qualified adviser.

## What it does

- Shows a dashboard of mock 2026 income, deductions, and estimated taxable income.
- Lets users filter dashboard analysis by a **from/to month** dropdown.
- Breaks down income by source type (pie chart) and customer (horizontal bar chart).
- Records income with a transaction date, source, payer, amount, and invoice/photo attachment.
- Records tax-related expenses with category and business-purpose prompts.
- Prevents amount entry when an expense is clearly not deductible; for mixed-use costs, asks for only the deductible business amount.
- Provides a visual IRAS policy guide with examples and links to official IRAS sources.

## How to use the demo

1. Open **Dashboard** to review the income summary and choose a month range from the two dropdowns.
2. Use the **By type** and **By customer** controls to explore income composition.
3. Open **Income** and add a transaction. Choose any past transaction date using the calendar, select an income source, then attach supporting evidence if available.
4. Open **Tax Expenses** and select the expense type and business purpose. Read the guidance displayed before entering an amount.
5. Open **IRAS Policy** for examples covering creator income, PR gifts, mixed-use costs, evidence retention, affiliate payouts, and GST review.

## Run locally

### Requirements

- Node.js 22.13 or later

### Commands

```bash
npm install
npm run dev
```

Open the local URL printed by the development server. To check a production build:

```bash
npm run build
```

## Project structure

```text
app/page.tsx          Main single-page MVP interface and client-side demo data
app/globals.css       Application styles
public/brand/         SGTaxPal logo assets
```

## Current MVP limitations

- Records and attachments are stored in browser memory only; refreshing the page resets them.
- Dashboard figures are mock data.
- The deduction logic is guidance-oriented and does not replace a tax professional's review.

## Official references

- [IRAS: Social Media Influencers](https://www.iras.gov.sg/docs/default-source/uploadedfiles/pdf/social-media-influencer.pdf)
- [IRAS: Business Expenses and Deductions](https://www.iras.gov.sg/taxes/individual-income-tax/self-employed-and-partnerships/business-expenses-and-deductions)
- [IRAS: Online Sellers and Service Providers](https://www.iras.gov.sg/taxes/individual-income-tax/self-employed-and-partnerships/tax-obligations-by-industry-trade-or-profession/tax-guide-for-online-sellers-and-service-providers)
