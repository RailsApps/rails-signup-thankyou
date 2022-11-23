const invalidFeedback = Cypress.env('messages').invalidFeedback

describe('User can navigate to create account screen', function() {
    it('from url', function() {
      cy.visit('https://rails-signup-thankyou-boh.herokuapp.com/users/sign_up')
      cy.get('#signup-title').contains('Roll on up!!')
    })
})

describe('Signup is unsuccessful with 16 character username', function() {
    beforeEach(function() {
        const user = {
            username: 'ohjdcbao54321098',
            email: 'john@doe.com',
            password: 'Password123',
            passwordconfirmation: 'Password123'
        }
        cy.createAccount(user)
    })

    it('stay on signup page', function() {
        cy.url().should('include', '/sign_up')
    })

    it('error message visible', function() {
        cy.get('.invalid-feedback').should('be.visible')
        cy.get('.invalid-feedback').contains(invalidFeedback.username)
    })
})

describe('Signup is unsuccessful with non-alphanumeric username', function() {
    beforeEach(function() {
        const user = {
            username: 'Tom@Nook',
            email: 'Tom',
            password: 'Nook',
            passwordconfirmation: 'bells'
        }
        cy.createAccount(user)
    })

    it('stay on signup page', function() {
        cy.url().should('include', '/sign_up')
    })

    it('error message visible', function() {
        cy.get('.invalid-feedback').should('be.visible')
        cy.get('.invalid-feedback').contains(invalidFeedback.username)
    })
})


describe('User can create account', function() {
    const uuid = () => Cypress._.random(0, 1e6)
    const password = 'bells'
    const firstName = 'Tom'
    const lastName = 'Nook'
    const expectedBalance = '$0.00'

    beforeEach(function() {
        const id = uuid()
        const user = {
            username: `user_${id}`,
            firstName: firstName,
            lastName: `${lastName}-${id}`,
            password: password
        }

        cy.createAccount(user)
    })

    it('redirected to home', function() {
        cy.url().should('include', '/home')
    })

    it('contain zero balance', function() {
        cy.get('#current-balance').contains(expectedBalance)
    })

    it('sees correct username', function() {
        cy.get('#accountDropdown').contains(`${firstName} ${lastName}`)
    })

    it('sees empty transaction history message', function() {
        const transactionMsgs = Cypress.env('messages').transaction
        // sees empty transaction history message
        cy.get('#transaction-table').children('.card-table-header').contains(transactionMsgs.empty)
        // does not see error message
        cy.get('#transaction-table').children().should('not.contain', transactionMsgs.error)

    })


    it('sees no transactions', function() {
        // new accounts only see empty history message
        // new accounts should not see a table
        cy.get('#transaction-table').children().should('have.length', 1)
        cy.get('#transaction-table').children().should('have.class', 'card-table-header')
        cy.get('#transaction-table').children().should('not.have.class', 'table')        
    })
})
