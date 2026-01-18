
# Tasbeeh Counter Application

## Overview

A simple, modern, and accessible single-page web application designed for users to perform Tasbeeh (praising God). It provides a clean, distraction-free interface with a large button for counting and displays common Tasbeeh phrases.

## Core Features & Design

*   **UI:** Dark-themed, minimalist design to provide a focused and calming user experience.
*   **Central Button:** A large, prominently displayed button with the Arabic label "سبح" (Tasbeeh) for easy interaction.
*   **Counter:** A numerical display that increments with each press of the button, tracking the count from 0 to 33.
*   **Dynamic Phrases:** The application cycles through three fundamental Tasbeeh phrases:
    1.  `سبحان الله` (SubhanAllah)
    2.  `الحمدلله` (Alhamdulillah)
    3.  `لا إله الا الله` (La ilaha illallah)
*   **Automatic Cycling:** The phrase and counter automatically reset after every 33 counts, allowing for continuous use.
*   **Responsive Design:** The layout is fully responsive, ensuring a seamless experience on both mobile devices and desktops.
*   **Styling:** The application is styled using Tailwind CSS, featuring a modern aesthetic with large, readable fonts and a vibrant accent color for interactive elements.

## Current Plan

1.  **Refactor `src/app/page.tsx`**: Convert the existing page into a client-side component to handle user interactions.
2.  **Implement State Management**: Use React's `useState` hook to manage the counter and the current Tasbeeh phrase.
3.  **Build the UI**: Create the new interface with a heading for the phrase, a display for the counter, and the main "سبح" button.
4.  **Style the Components**: Apply a modern, dark-themed design using Tailwind CSS, focusing on clarity, aesthetics, and ease of use.
5.  **Implement Click Logic**: Develop the function to increment the counter and cycle through the phrases every 33 clicks.
6.  **Deploy to Firebase**: Deploy the final, refactored application to Firebase Hosting.
