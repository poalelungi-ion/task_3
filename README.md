# Life Gamification App

This is an Angular project that demonstrates various features of the Angular framework, built as a "Life Gamification App".

## How to Run

1.  Install the dependencies: `npm install`
2.  Run the development server: `ng serve`
3.  Open your browser to `http://localhost:4200/`

## Implemented Tasks

This project implements the following tasks:

### T03_04: Services

-   A `DataService` is created to provide randomly generated "life stats".
-   The service is injected into the `StatsDashboardComponent` to display the stats.

### T03_05: Testing

-   Unit tests are created for the `DataService`, `StatsDashboardComponent`, and `LoginComponent`.
-   The tests cover the services, components, and HTML output.

### T03_06: Routing

-   Routing is implemented to navigate between different pages of the application.
-   A menu with `routerLink` is used for navigation.
-   The routes are defined in `app-routing-module.ts`.

### T03_07: Heterogeneous Lists and Component Communication

-   An `AchievementsService` is created to provide a list of heterogeneous entities (achievements and quests).
-   The `AchievementsListComponent` displays the list of entities, with different output for each type.
-   Parent-child communication is demonstrated between the `StatsDashboardComponent` and `StatDetailsComponent` using `@Input` and `@Output`.

### T03_08: Forms

-   A login form is created using Reactive Forms.
-   The form includes validation to ensure that both the username and password fields are filled out before submission.

## Code Highlighting in UI

The application UI includes "Task Explanation" sections that highlight how the code follows the requirements of each task. This is intended to make the code more readable and understandable for humans.

# Task Angular - Chapter 3 Extension

This project is an extension of the Angular project from Chapter 3. It adds a new feature that fetches external information (weather data) and provides style recommendations based on it.

## New Features

- **Weather Forecast**: The application now has a "Weather" page that displays the current weather based on your location.
- **Location-based Data**: It uses the browser's Geolocation API to get your current location and fetch accurate weather data. You will be prompted to allow location access.
- **Style Recommendations**: Based on the current weather, the application provides style and color recommendations.

## How to Run

1.  Navigate to the `task_3` directory: `cd task_3`
2.  Install the dependencies: `npm install`
3.  Start the development server: `npm start`
4.  Open your browser and navigate to `http://localhost:4200/`.

You will see a "Weather" link in the navigation bar. Click on it to see the new feature in action.

## Gemini / 'What to wear' backend

This project includes a small Express backend that will call Google's Generative Language API (Gemini/PaLM) to produce a short "what to wear" recommendation based on current weather.

Steps to enable:

1. Copy `.env.example` to `.env` and set `GEMINI_API_KEY` to your API key (do NOT commit `.env`).
2. Install dependencies: `npm install`
3. Start the backend server: `npm run start:server` (defaults to port 3333)
4. Start the frontend as usual: `npm start`

You can verify the backend is running by visiting `http://localhost:3333/api/health` which should return `{ "ok": true }`.

If you see `Cannot POST /api/what-to-wear` in your browser console or network tab, ensure:

- The backend is running (`npm run start:server`).
- You started the frontend with `npm start` (the Angular dev server now proxies `/api` to the backend by default).
- Your firewall or another process is not blocking port 3333.

Notes:
- If `GEMINI_API_KEY` is not set the server will return a small, deterministic fallback suggestion so the feature still works offline.
- Never paste your API keys in source files. Put them in `.env` or your deployment platform's secret store.