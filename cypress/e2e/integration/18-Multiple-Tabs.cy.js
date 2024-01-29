/// <reference types="cypress"/>

describe('Interacting Multiple Tabs', () => {
  beforeEach(() => {
    // This will fail if the page doesn't send text/html with 200 status
    cy.visit(`${Cypress.env('SITE_URL')}/frontend`)
    cy.clickCard('Multiple Windows')
  })

  it('Multiple Tabs', () => {
    cy.get('#apple').should('have.attr', 'target', '_blank')
    cy.get('#apple').invoke('removeAttr', 'target').click()
    cy.title().should('contain', 'Apple')
  })

  /**
   * Go to https://techglobal-training.com/frontend/
   * Click on the "Multiple Windows" card
   * Click on the "Apple" link
   * Validate that the child window title is "Apple"
   * Navigate back to main page
   * Validate title contains "techglobal"
   */

  it('Multiple Tabs Test', () => {
    cy.get('#apple').invoke('removeAttr', 'target').click()

    cy.title().should('contain', 'Apple')

    cy.go(-1)

    // cy.title().invoke('toLowerCase').should("contain", "techglobal")

    cy.title().then((title) => {
      cy.wrap(title.toLowerCase()).should('contain', 'techglobal')
    })
  })
})
