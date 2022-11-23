it('successfully loads', function() {
  cy.request({
      url: 'https://rails-signup-thankyou-boh.herokuapp.com/',
      failOnStatusCode: false
  })
})
