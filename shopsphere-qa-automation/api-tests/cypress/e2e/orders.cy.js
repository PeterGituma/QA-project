describe('Orders API', () => {
  it('POST /orders should create order', () => {
    cy.request('POST', '/orders', {
      userId: 1,
      productId: 2,
      quantity: 1
    }).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body).to.have.property('orderId');
    });
  });
});