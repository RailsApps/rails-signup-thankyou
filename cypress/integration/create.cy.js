describe('User can navigate to create account screen', function() {
    it('from url', function() {
      cy.visit('https://rails-signup-thankyou-boh.herokuapp.com/users/sign_up')
    })
})
    
Cypress.Commands.add('login', (name, username, password, confirmation) => {
  cy.visit('https://rails-signup-thankyou-boh.herokuapp.com/users/sign_up')
  cy.get('#user_name').type(name)
  cy.get('#user_email').type(username)
  cy.get('#user_password').type(password)
  cy.get('#user_password_confirmation').type(confirmation)
  cy.get('#new_user > input.button.right').click()
})
    

describe('Signup is unsuccessful when incorrectly formatted e-mail address is provided', function() {

  beforeEach(() => {
    cy.login('User2 McUser', 'user2!user2.com', 'p4ssw0rd123', 'p4ssw0rd123')
  })

  it('should actually be accessible', () => {
    cy.visit('https://rails-signup-thankyou-boh.herokuapp.com/users/sign_up')
  })

})

describe('Signup is successful with these credentials', function() {

  beforeEach(() => {
    cy.login('User2 McUser', 'user2@user2.com', 'p4ssw0rd123', 'p4ssw0rd123')
  })

  it('should actually be accessible', () => {
    cy.visit('https://rails-signup-thankyou-boh.herokuapp.com/users/sign_up')
  })

})
