// type definitions for Cypress object "cy"
/// <reference types="cypress" />

// type definitions for custom cypress commands
/// <reference types="../../support" />
describe('Inline Editor iFrame', function () {
  it('Interaction with embedded inline editor in iFrame', function () {
    cy.visit('/');

    // find h2 TinyMCE title
    cy.get('#inlineEditorIframe')
      .its('0.contentDocument.body')
      .then(cy.wrap)
      .findByText('TinyMCE Inline Text Editor');

    // find textarea text
    cy.get('#inlineEditorIframe')
      .its('0.contentDocument.body')
      .then(cy.wrap)
      .findByText('Hi there! This is a sample inline editor...');

    // iframe within iframe
    cy.get('#inlineEditorIframe')
      .its('0.contentDocument.body')
      .then(cy.wrap)
      .find('#inlinetextarea_ifr')
      .its('0.contentDocument.body')
      .then(cy.wrap)
      .contains('Hi there! This is a sample inline editor...');

    // click on 'Edit' menu in TinyMCE iframe
    cy.get('#inlineEditorIframe')
      .its('0.contentDocument.body')
      .then(cy.wrap)
      .findByText('Edit')
      .click();
  });
});
