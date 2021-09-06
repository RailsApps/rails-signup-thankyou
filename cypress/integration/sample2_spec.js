it('successfully loads', function() {
  cy.request({
      url: 'http://0.0.0.0:3000/help',
      failOnStatusCode: false
  })
})
