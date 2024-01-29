/// <reference types="cypress"/>

describe('Timeouts', () => {
  beforeEach(() => {
    cy.visit(`${Cypress.env('SITE_URL')}/frontend`, { timeout: 100000 })
    cy.clickCard('Html Elements')
  })

  it('Explicit and Inline Timeouts', () => {
    cy.get('#main_heading', { timeout: 10000 })

    cy.get('#hello_paragraph', { timeout: 10000 }).click({
      timeout: 10000,
      force: true,
    })

    // npx cypress run --config defaultCommandTimeout=10000,pageLoadTimeout=20000
  })

  /**
   * Go to https://techglobal-training.com/frontend/
   * Click on the "Waits" card
   * Click on the "Click on me to see a red box" button
   * Validate that a red box is displayed
   */

  //   it('Waits Page Test', () => {
  //     cy.visit(`${Cypress.env("SITE_URL")}/frontend`, { timeout: 100000 });
  //     cy.clickCard("Waits");

  //     cy.get('#red').click()
  //     cy.get('.box', { timeout: 10000}).should('be.visible')
  //   })
})
