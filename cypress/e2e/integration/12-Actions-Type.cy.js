/// <reference types="cypress"/>
/// <reference types="cypress"/>

describe('Actions', () => {
  it('Actions | type and click', () => {
    cy.visit('https://www.wikipedia.org/')

    // One way to enter and search for smth in an input
    // cy.get('#searchInput').type('Cypress')
    // cy.get('.pure-button-primary-progressive').click()

    // Another way - enter
    cy.get('#searchInput').type('Cypress{enter}')

    cy.url().should('contain', 'Cypress')
    cy.title().should('include', 'Cypress')

    cy.get('#firstHeading').should('have.text', 'Cypress')
  })
})
