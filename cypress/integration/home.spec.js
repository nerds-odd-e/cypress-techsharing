// type definitions for Cypress object "cy"
/// <reference types="cypress" />

// type definitions for custom cypress commands
/// <reference types="../../support" />
describe("Tech Community Home", function () {
  it("Displays Home page with actionable link to 'Manage Tech Communities'", function () {
    cy.visit("/");

    cy.contains("Home");
    cy.contains("@cypress");
    cy.contains("@odd-e");
    cy.contains("@github");

    cy.contains("Manage Tech Communities")
      .click()
      .then(() => {
        cy.contains("Tech Community Events");
        cy.contains("Add Group");
      });
  });
});
