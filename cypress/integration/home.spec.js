// type definitions for Cypress object "cy"
/// <reference types="cypress" />

// type definitions for custom cypress commands
/// <reference types="../../support" />
describe('Tech Community Home', function () {
  it('Loads the Tech Community Home page on user request to root app URL', function () {
    cy.visit('/');
    // Take a snapshot for visual diffing
    cy.compareSnapshot('Tech-Community-Home', 0.03);
    //
    // *** Visual Testing with percy.io ***
    // cy.percySnapshot();
    // ************************************
  });

  it("Displays Home page with actionable link to 'Manage Tech Communities'", function () {
    cy.visit('/');

    cy.contains('Home');
    cy.contains('@cypress');
    cy.contains('@odd-e');
    cy.contains('@github');

    cy.contains('Manage Tech Communities')
      .click()
      .then(() => {
        cy.contains('Tech Community Events');
        cy.contains('Add Group');
      });
  });
});
