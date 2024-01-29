/// <reference types="cypress"/>

describe('Debugging', () => {
  beforeEach(() => {
    cy.visit(`${Cypress.env('SITE_URL')}/frontend`, { timeout: 100000 })
    cy.clickCard('Html Elements')
  })

  it('cy.wait() - Hard Wait', () => {
    cy.get('#checkbox_1').check()

    //   cy.wait(10000)

    cy.get('#checkbox_2').check()
  })

  it('cy.pause() - Debugging using pause', () => {
    cy.visit(`${Cypress.env('SITE_URL')}/frontend`, { timeout: 100000 })
    cy.clickCard('Project - Login Function')

    cy.get('#username').type('TechGlobal')

    // cy.pause()

    cy.get('#password').type('Test1234')

    cy.get('#login_btn').click()

    cy.get('#success_lgn').should('be.visible')
  })

  it.only('cy.debug() - Debugging using pause', () => {
    cy.visit(`${Cypress.env('SITE_URL')}/frontend`, { timeout: 100000 })
    cy.clickCard('Project - Login Function')

    cy.get('#username').type('TechGlobal')

    // cy.debug()

    cy.get('#password').type('Test1234')

    cy.get('#login_btn').click()

    cy.get('#success_lgn').should('be.visible')
  })
})
