it('successfully loads', function() {
  cy.request({
      url: 'https://rails-signup-boh-heroku-22.herokuapp.com/',
      failOnStatusCode: false
  })
})
