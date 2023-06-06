describe("Homepage - not signed in", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("Has a login button", () => {
    cy.get('[data-testid="signInBtn"]');
  });
});
