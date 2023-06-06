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
  cy.session(
    [session.sessionToken],
    () => {
      cy.task("seedDB", { sessionToken: session.sessionToken });

      cy.setCookie("next-auth.session-token", session.sessionToken, {
        expiry: 1661406204,
        sameSite: "lax",
        domain: "127.0.0.1",
        path: "/",
      });
      cy.intercept("GET", "/api/auth/session", {
        statusCode: 200,
        fixture: "current-user.json",
      });
    },
    {
      validate() {
        cy.request("/api/auth/session").its("status").should("eq", 200);
      },
    }
  );
});

// domain: 'localhost',
// path: '/',
// httpOnly: true,
// sameSite: 'Lax',
// expires: 1661406204
