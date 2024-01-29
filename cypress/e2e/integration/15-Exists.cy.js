/// <reference types="cypress"/>
describe('Exists', () => {
  beforeEach(() => {
    cy.visit('https://techglobal-training.com/frontend/html-elements')
  })
  it('Exists', () => {
    cy.get('.mt-1').should('not.exist')
    cy.get('#register_button').click()
    cy.get('.mt-1')
      .should('be.visible')
      .and('have.text', 'You clicked on “Register”')
  })
})
