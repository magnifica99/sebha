# Sebha App Blueprint

## Purpose and Capabilities
A simple, beautiful digital "Sebha" (prayer beads) application built with Next.js and Firebase. It allows users to track their tasbih counts with a clean, intuitive interface and automatic phrase transitions.

## Project Outline
- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS v4
- **Deployment:** Firebase Hosting (with GitHub Actions CI/CD)
- **Features:**
    - Digital counter for tasbih.
    - Automatic phrase transition (e.g., Subhan Allah -> Alhamdulillah -> La ilaha illa Allah) after 33 counts.
    - Responsive and mobile-friendly design.
    - Dark theme (Navy/Gray-900).

## Current Plan
1. **Fix Styling Issue:** Updated `src/app/globals.css` to use the correct Tailwind CSS v4 `@import "tailwindcss";` syntax to ensure styles are correctly bundled in production builds.
2. **Redeploy:** Trigger a new manual deployment to verify the fix.
3. **Enhance UI:** (Future) Add subtle animations, sound feedback, and persistent storage for counts.
