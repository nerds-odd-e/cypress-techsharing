// groups.spec.js created with Cypress
//
describe('Groups Page', function () {
  it('Updates Shenzhen Tech Community Location after edit', function () {
    cy.editAndVerifyLocation('Shenzhen Tech Community');
  });
});
