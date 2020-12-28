// type definitions for Cypress object "cy"
/// <reference types="cypress" />

// type definitions for custom cypress commands
/// <reference types="../../support" />
describe("Tech Community Group Edit", function () {
  it("Edit Group form for 'Shanghai TechSharing' with updated address field in /groups", function () {
    cy.visit("/groups");

    cy.contains("Huawei Shanghai TechSharing")
      .parent()
      .findByRole("link", { name: "Edit" })
      .click()
      .then(() => {
        cy.findByRole("heading", { name: "Edit Group" });
        cy.findByRole("textbox", { name: /name/i });
        cy.findByRole("textbox", { name: /address/i })
          .clear()
          .type("88 Nanjing Road West");
        cy.findByRole("textbox", { name: /city/i }).clear().type("Shanghai");
        cy.findByRole("textbox", { name: /state\/province/i })
          .clear()
          .type("Shanghai");
        cy.findByRole("textbox", { name: /country/i })
          .clear()
          .type("People's Republic of China");
        cy.findByRole("textbox", { name: /postal code/i })
          .clear()
          .type("200003");
        cy.findByRole("button", { name: "Save" })
          .click()
          .then(() => {
            cy.contains("Huawei Shanghai TechSharing");
            cy.contains("88 Nanjing Road West Shanghai Shanghai 200003");
          });
      });
  });
});
