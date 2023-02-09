it('successfully loads', function() {
  cy.request({
      url: 'https://https://rails-signup-boh-heroku-20.herokuapp.com/pages/about',
      failOnStatusCode: false
  })
})
