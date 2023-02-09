it('successfully loads', function() {
  cy.request({
      url: 'https://rails-signup-boh-heroku-20.herokuapp.com/',
      failOnStatusCode: false
  })
})
