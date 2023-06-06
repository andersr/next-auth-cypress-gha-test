// ***********************************************************
// This example support/e2e.ts is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

/// <reference types="cypress" />
// Import commands.js using ES2015 syntax:
// import "./commands";

// Alternatively you can use CommonJS syntax:
// require('./commands')

import session from "../fixtures/session.json";
declare global {
  namespace Cypress {
    interface Chainable {
      login(): Chainable;
    }
  }
}

Cypress.Commands.add("login", () => {
  cy.session("login", () => {
    cy.task("seedDB", { sessionToken: session.sessionToken });
    Cypress.Cookies.debug(true); // this does not appear to be logging anything - https://github.com/cypress-io/cypress/issues/19745 (?)
    cy.clearCookies();

    // ***** THIS COOKIES IS BEING SET ONLY IN DEV MODE AND NOT WHEN USIING cy run *****
    cy.setCookie("next-auth.session-token", session.sessionToken, {
      expiry: 1661406204,
      sameSite: "lax",
      domain: "127.0.0.1",
      path: "/",
    });
    cy.intercept("GET", "/api/auth/session", {
      statusCode: 304,
      fixture: "current-user.json",
    });
  });
});

// domain: 'localhost',
// path: '/',
// httpOnly: true,
// sameSite: 'Lax',
// expires: 1661406204
