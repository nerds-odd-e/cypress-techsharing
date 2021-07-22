describe('REST API tests', function () {
  it('Adds a new group', function () {
    cy.loadNewGroupFixture().then(function () {
      const baseApiUrl = Cypress.env('baseApiUrl')
        ? Cypress.env('baseApiUrl')
        : 'http://localhost:8080/api';
      cy.request('POST', `${baseApiUrl}/group`, this.newGroup)
        .its('body')
        .then(function (body) {
          expect(body.id).to.equal(5);
          expect(body.name).to.equal(this.newGroup.name);
          expect(body.address).to.equal(this.newGroup.address);
          expect(body.postalCode).to.equal(this.newGroup.postalCode);
        });
    });
  });
});
