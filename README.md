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