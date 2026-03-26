<p align="center">
  <img src="./public/banner.svg" alt="Finui built with Google AI Studio" />
</p>

# Finui - Financial Power for the Informal Economy

Finui is a financial inclusion application designed specifically for informal workers, such as market vendors, boda boda riders, and tailors. Millions of informal workers lack access to traditional banking and credit facilities because they don't have formal pay slips or predictable monthly salaries. Finui bridges this gap by using alternative data—like mobile money transaction patterns—to build a verifiable "Trust Score."

## Features

- **Trust Score Engine:** Analyzes daily income and expenses to calculate a financial reliability metric based on Income Regularity, Consistency, and Savings Stability.
- **Financial Reporting:** Users can download a verifiable financial history report to apply for business loans or keep for their records.
- **Smart Savings Nudges:** Provides automated savings recommendations based on recent transaction patterns and income highs/lows.
- **Credit Tier System:** Unlocks higher credit tiers as users improve their Trust Score and savings habits.
- **Mobile-First Design:** A clean, accessible interface designed for mobile users.

## How to Use

1. **Track Your Transactions:** Connect your mobile money account. Finui automatically categorizes your daily income and expenses to understand your cash flow.
2. **Monitor Your Trust Score:** Check the Dashboard to see your Trust Score. It improves based on three factors: Income Regularity, Consistency, and Savings Stability.
3. **Follow Smart Savings Nudges:** Finui's AI detects when you have a good income day and suggests a comfortable amount to save.
4. **Unlock Credit:** As your Trust Score grows and you hit savings milestones, you unlock higher credit tiers, giving you access to micro-loans when you need them.
5. **Download Your Report:** Use the "Download Report" button on your dashboard to generate a verifiable financial history to share with lenders.

## Tech Stack

- **Frontend:** React 19, Tailwind CSS, Lucide React, Recharts
- **Backend:** Node.js, Express (Mock API for demo purposes)
- **Build Tool:** Vite

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```
3. Open your browser to the URL provided in the terminal (usually `http://localhost:3000`).

## Demo Accounts

You can test the application using the following demo accounts:
- **Amina (Market Vendor):** `amina@demo.com`
- **Kato (Boda Boda):** `kato@demo.com`
- **Sarah (Tailor):** `sarah@demo.com`
*(Password for all demo accounts: `demo123`)*
