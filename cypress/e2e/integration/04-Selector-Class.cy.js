/// <reference types="cypress"/>

describe('Selector - Class', () => {
  it('Validate Frontend Cards', () => {
    cy.visit('https://techglobal-training.com/frontend')
    cy.get('.card').should('have.length', 20)
  })
})
