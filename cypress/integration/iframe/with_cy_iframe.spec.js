// type definitions for Cypress object "cy"
/// <reference types="cypress" />

// type definitions for custom cypress commands
/// <reference types="../../support" />
/// <reference types="cypress-iframe" />
describe('Inline Editor iFrame', function () {
  it('Using cy.iframe interact with embedded inline editor in iFrame', function () {
    cy.visit('/');
    cy.frameLoaded('#inlineEditorIframe');
    cy.iframe().findByText('View').click();
  });
});
