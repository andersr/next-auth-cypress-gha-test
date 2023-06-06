// import session from "~cy/fixtures/session.json";

Cypress.Cookies.debug(true, { verbose: false });

// const login = (name ="e2e") => {
//   cy.session(name, () => {
//     cy.task("seedDB", { sessionToken: session.sessionToken });

//     cy.setCookie("next-auth.session-token", session.sessionToken);

//     cy.intercept("GET", "/api/auth/session", {
//       statusCode: 304,
//       fixture: "current-user.json",
//     })
//   })
// }

describe("Homepage - signed in", () => {
  beforeEach(() => {
    // write session do db
    // cy.task("seedDB", { sessionToken: session.sessionToken });
    // // write the cookie
    // cy.setCookie("next-auth.session-token", session.sessionToken);

    // add listener for session
    // cy.intercept("GET", "/api/auth/session", {
    //   statusCode: 304,
    //   fixture: "current-user.json",
    // }).as("userSession");
    // cy.login();
    cy.visit("/");
  });
  it("Has a sign out button", () => {
    cy.get('[data-testid="signOutBtn"]');
  });
});
