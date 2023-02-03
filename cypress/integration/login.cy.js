describe('Login Page', function() {
  it('successfully loads', function() {
    cy.visit('https://rails-signup-boh-heroku-22.herokuapp.com/users/sign_in')
  })
})

Cypress.Commands.add('login', (username, password) => {
  cy.visit('https://rails-signup-boh-heroku-22.herokuapp.com/users/sign_in')
  cy.get('#user_email').type(username)
  cy.get('#user_password').type(password)
  cy.get('#new_user > input.button.right').click()
})

describe('User login  page', () => {

  beforeEach(() => {
    cy.login('jj2@jj2.com', 'Password123!')
  })

  it('should actually be accessible', () => {
    cy.visit('https://rails-signup-boh-heroku-22.herokuapp.com/users/sign_in')
  })

  it('allows you to sign out again', () => {
    cy.get('a[href="/users/sign_out"]').click()
  })
})

describe('Signin is unsuccessful with the below credentials', function() {
    
  beforeEach(() => {
    cy.login('user1@user1.com', 'p4ssw0rd123')
  })

  it('should actually be accessible', () => {
    cy.visit('https://rails-signup-boh-heroku-22.herokuapp.com/users/sign_in')
  })
  
})

