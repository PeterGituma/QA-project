describe('Products API', () => {
  it('GET /products should return 200', () => {
    cy.request('/products')
      .its('status')
      .should('eq', 200);
  });
});