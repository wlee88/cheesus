# Frontend

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.4.

## Component structure

- This project is structured in way that router, leads to a page.
- A page contains all the smart things
- Features should be "lightweight" and not contain any dependencies. This ensures complexity is all in once place.
- Pages folder should match the route structure. For example /cheese should have a cheese folder with a cheese page, and cheese/price-calculator should have a price-calculator folder with a price-calculator page.

## CSS Styling
- We're using bootstrap for core elements to get the project running.
- This project aims to follow [BEM](https://getbem.com/) for CSS styling/maintenance.
## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
