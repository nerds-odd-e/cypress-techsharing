// home.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test
describe("Home Page", function() {
  it("Loads with expected Home, Groups and Visit cypress.io buttons", function() {
    cy.visit("/");
    cy.findByText(/Home/i);
    cy.findByText(/Groups/i);
    cy.findByText(/Visit cypress.io to read the documentation/i);
    
    cy.fixture('svg/cypress_io_testing_hourglass.svg').as('expected_logo');
    cy.findByAltText('End-to-End Testing with Cypress.io Introductory Technical Workshop')
  });
});
