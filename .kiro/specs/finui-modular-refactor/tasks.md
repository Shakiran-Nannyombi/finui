# Implementation Plan: FinUI Modular Refactor

## Overview

Incrementally extract the monolithic `src/App.tsx` (1612 lines) into the modular structure defined in the design. Each task produces working, importable code. The final task wires everything together and replaces `App.tsx` with the ~60-line shell.

## Tasks

- [x] 1. Create shared foundation (types, utils, ui)
  - Create `src/types/index.ts` with `TabName`, `User`, `Transaction`, and `TrustScore` interfaces/types
  - Create `src/lib/utils.ts` with the `cn()` utility (clsx + twMerge)
  - Create `src/components/ui/Logo.tsx` extracting the SVG Logo component from `App.tsx`

- [x] 2. Extract layout components
  - [x] 2.1 Create `src/components/layout/Footer.tsx`
    - Extract the `Footer` component verbatim from `App.tsx`
    - Import `Logo` from `components/ui/Logo`
  - [x] 2.2 Create `src/components/layout/Navbar.tsx`
    - Implement `NavbarProps` interface (`activeTab`, `user`, `onTabChange`) as defined in design
    - Extract desktop nav logic from `App.tsx`, rendering public and authenticated links conditionally
  - [x] 2.3 Create `src/components/layout/MobileNav.tsx`
    - Implement `MobileNavProps` interface (`activeTab`, `user`, `onTabChange`) as defined in design
    - Extract fixed bottom mobile nav from `App.tsx`

- [x] 3. Extract hooks
  - [x] 3.1 Create `src/hooks/useAppState.ts`
    - Implement all state: `activeTab`, `user`, `score`, `transactions`
    - Implement `handleLogin(user)` → sets user + navigates to `'home'`
    - Implement `handleLogout()` → clears user/score/transactions + navigates to `'landing'`
  - [x] 3.2 Create `src/hooks/useUserData.ts`
    - Accept `setUser`, `setScore`, `setTransactions` as parameters
    - Implement `fetchData(userId)` using `Promise.all` for parallel API calls
    - Each setter called independently based on `res.ok` check; errors logged to console

- [ ] 4. Extract landing page sections
  - [x] 4.1 Create `src/components/landing/HeroSection.tsx`
    - Extract hero banner with animated blobs and CTA button
    - Props: `{ onGetStarted: () => void }`
  - [x] 4.2 Create `src/components/landing/FeaturesGrid.tsx`
    - Extract bento grid (Trust Score Engine, Micro-Savings, Credit Unlocks cards)
    - Props: none (purely presentational)
  - [x] 4.3 Create `src/components/landing/HowItWorks.tsx`
    - Extract dark section with phone mockups and timeline steps
    - Props: `{ onGetStarted: () => void }`
  - [-] 4.4 Create `src/components/landing/SmartAISection.tsx`
    - Extract dark section with floating chat UI mockup
    - Props: none (purely presentational)
  - [~] 4.5 Create `src/components/landing/CTASection.tsx`
    - Extract bottom CTA banner
    - Props: none (uses `window.location.hash` internally as in original)
  - [~] 4.6 Create `src/pages/LandingPage.tsx`
    - Compose all five landing section components in order
    - Props: `{ onGetStarted: () => void }`

- [ ] 5. Extract dashboard components and page
  - [~] 5.1 Create `src/components/dashboard/DashboardHeader.tsx`
    - Implement `DashboardHeaderProps` (`user`, `transactions`, `score`)
    - Encapsulate `handleDownloadReport` logic internally
  - [~] 5.2 Create `src/components/dashboard/TrustScoreCard.tsx`
    - Implement `TrustScoreCardProps` (`score`, `creditTier`)
    - Include recharts `PieChart`, breakdown progress bars, and AI recommendation text
  - [~] 5.3 Create `src/components/dashboard/TransactionList.tsx`
    - Implement `TransactionListProps` (`transactions`)
    - Slice to 6 most recent items; apply credit/debit color coding
  - [~] 5.4 Create `src/pages/Dashboard.tsx`
    - Compose `DashboardHeader`, `TrustScoreCard`, `TransactionList`
    - Props: `{ user: User, score: TrustScore | null, transactions: Transaction[] }`

- [ ] 6. Extract savings components and page
  - [~] 6.1 Create `src/components/savings/SavingsCard.tsx`
    - Display total savings balance card
    - Props: `{ user: User }`
  - [~] 6.2 Create `src/components/savings/SmartSuggestion.tsx`
    - Implement `SmartSuggestionProps` (`recommendation`, `onApply`)
    - Render AI savings recommendation with pre-fill button
  - [~] 6.3 Create `src/components/savings/TransferForm.tsx`
    - Implement `TransferFormProps` (`user`, `onTransferSuccess`)
    - Manage local `amount`, `loading`, `error` state
    - Call `POST /api/savings/transfer`; invoke `onTransferSuccess` on success
    - Display inline error with `AlertCircle` on failure
  - [~] 6.4 Create `src/pages/SavingsFlow.tsx`
    - Compose `SavingsCard`, `SmartSuggestion`, `TransferForm`
    - Props: `{ user: User, onTransferSuccess: () => void }`

- [ ] 7. Extract remaining pages
  - [~] 7.1 Create `src/pages/AuthPage.tsx`
    - Extract login/signup form with left-column form and right-column imagery
    - Props: `{ onLogin: (user: User) => void, onBack: () => void }`
    - Retain local `isLogin`, `email`, `password`, `name`, `phone`, `businessType`, `error`, `loading` state
  - [~] 7.2 Create `src/pages/ProfileSettings.tsx`
    - Extract profile edit form from `App.tsx`
    - Props: `{ user: User, onUpdate: (user: User) => void, onLogout: () => void }`
  - [~] 7.3 Create `src/pages/AboutPage.tsx`
    - Extract mission, vision, and how-to-use sections
    - Props: `{ setActiveTab: (tab: TabName) => void }`

- [~] 8. Checkpoint — verify all modules compile
  - Ensure all new files have no TypeScript errors before proceeding to wiring
  - Ask the user if any questions arise.

- [~] 9. Wire everything together in App.tsx
  - Replace the contents of `src/App.tsx` with the ~60-line shell as shown in the design
  - Import `Navbar`, `MobileNav`, `Footer` from `components/layout`
  - Import `useAppState` and `useUserData` from `hooks`
  - Import all page components from `pages`
  - Implement routing logic per the `renderMainContent` pseudocode in the design:
    - `landing` → `<LandingPage>`
    - `about` → `<AboutPage>`
    - `auth` (user null) → `<AuthPage>`
    - `home` (user set) → `<Dashboard>`
    - `savings` (user set) → `<SavingsFlow>`
    - `profile` (user set) → `<ProfileSettings>`

- [~] 10. Final checkpoint — ensure app runs correctly
  - Ensure all TypeScript diagnostics pass with no errors
  - Confirm no orphaned code remains in `App.tsx`
  - Ask the user if any questions arise.
