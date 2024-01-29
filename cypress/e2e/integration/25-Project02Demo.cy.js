/// <reference types="cypress"/>

describe('Debugging', () => {
  beforeEach(() => {
    cy.clickCard('Login Function')
  })

  const testData = [
    {
      description: 'Validate the invalid login with the empty credentials',
      username: ' ',
      password: ' ',
      message: 'Invalid Username entered!',
    },
    {
      description: 'Validate the invalid login with the wrong username',
      username: 'John',
      password: 'Test1234',
      message: 'Invalid Username entered!',
    },
    {
      description: 'Validate the invalid login with the wrong password',
      username: 'TechGlobal',
      password: '1234',
      message: 'Invalid Password entered!',
    },
    {
      description:
        'Validate the invalid login with the wrong username and password',
      username: 'John',
      password: '1234',
      message: 'Invalid Username entered!',
    },
  ]

  testData.forEach((testItem, index) => {
    it(`Test Case ${index + 7} - ${testItem.description}`, () => {
      cy.get('#username').type(testItem.username)
      cy.get('#password').type(testItem.password)
      cy.get('#login_btn').click()
      cy.get('#error_message').should('have.text', testItem.message)
    })
  })

  /**
   * Navigate to https://techglobal-training.com/frontend/project-2
   * Enter the username as “TechGlobal”
   * Enter the password as “Test1234”
   * Click on the “LOGIN” button
   * Validate the success message is displayed as “You are logged in”
   * Validate the logout button displayed with the text “LOGOUT”
   */

  it('Test Case 02 - Validate the valid login', () => {
    // cy.get("#username").type(Cypress.env('UI_USERNAME'));
    // cy.get("#password").type(Cypress.env('UI_PASSWORD'));

    const arr = [Cypress.env('UI_USERNAME'), Cypress.env('UI_PASSWORD')]

    cy.get('#username, #password').each(($el, index) => {
      cy.wrap($el).type(arr[index])
    })

    cy.get('#login_btn').click()

    cy.get('#success_lgn').should('have.text', 'You are logged in')
    cy.get('#logout').should('be.visible')
  })
})
