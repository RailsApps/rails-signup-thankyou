it('successfully loads', function() {
  cy.request({
      url: 'https://rails-signup-thankyou-boh.herokuapp.com/pages/about',
      failOnStatusCode: false
  })
})
