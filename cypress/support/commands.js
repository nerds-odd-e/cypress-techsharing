// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import '@testing-library/cypress/add-commands';

Cypress.Commands.add('verifyHomePage', () => {
  cy.visit('/');
  cy.findByText(/Home/i);
  cy.findByText(/Groups/i);
  cy.findByText(/Visit cypress.io to read the documentation/i);

  cy.findByAltText(
    'End-to-End Testing with Cypress.io Introductory Technical Workshop'
  );
});

Cypress.Commands.add('editAndVerifyLocation', (groupName) => {
  cy.visit('/groups');
  cy.findByRole('cell', { name: groupName })
    .parent()
    .findByRole('button', { name: 'Edit' })
    .click()
    .then(() => {
      cy.url().should('include', '/group/3');
      cy.findByRole('textbox', { name: /name/i });
      cy.findByRole('textbox', { name: /address/i })
        .clear()
        .type('2012 Shennan Blvd., Futian District');
      cy.findByRole('textbox', { name: /city/i }).clear().type('Shenzhen');
      cy.findByRole('textbox', { name: /state\/province/i })
        .clear()
        .type('Guangdong');
      cy.findByRole('textbox', { name: /country/i })
        .clear()
        .type("People's Republic of China");
      cy.findByRole('textbox', { name: /postal code/i })
        .clear()
        .type('518038');
      cy.findByRole('button', { name: 'Submit' })
        .click()
        .then(() => {
          cy.contains('Shenzhen Tech Community');
          cy.contains(
            "2012 Shennan Blvd., Futian District Shenzhen Guangdong People's Republic of China 518038"
          );
        });
    });
});
