# Frontend

- [Angular](https://angular.io/) frontend for the Cheesus project.
## Project structure
- **src**
  - **pages** - these directly reflect what is in the router (e.g. `/cheese` would have a CheesePage, and any subroutes would be nested folders). This helps us easily navigate to where a page is defined.
  - **features** - any resuable components that compose many pages.

### Pages/Features philosophy
- A page should contain all the data required in one place (i.e make all service/network calls/handlers which react and make serice calls) such that components can be very simple and _only care about presentation only_.
- This project is structured in way that router, leads to a page.

## CSS Styling
- We're using [bootstrap](https://getbootstrap.com/) for core elements to get the project running.
- This project aims to follow [BEM](https://getbem.com/) for CSS styling/maintenance.

## API communucation
- We're using [ts-rest/core](https://ts-rest.com/) to generate the API client. This interfacts with our shared contracts library (see [🏛️ Architecture](../../README.md#-architecture) for more details)
## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
