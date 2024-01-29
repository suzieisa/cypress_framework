// <reference types="cypress"/>

// TEST CASE:
// Go to https://techglobal-training.com/frontend/actions
// Validate that 'Click on me' button is visible
// Validate that 'Click on me' button is enabled (clickable)
// Validate that 'Click on me' button text 'Click on me'
// Click on 'Click on me' button
// Validate 'You clicked on a button!' paragraph is displayed with it's text to be 'You clicked on a button!'

describe('Actions', () => {
  beforeEach(() => {
    cy.visit('https://techglobal-training.com/frontend/actions')
  })

  it('Actions | Click', () => {
    cy.get('#click')
      .as('ClickOnMeButton')
      .should('be.visible')
      .and('be.enabled')
      .and('have.text', 'Click on me')
    cy.get('@ClickOnMeButton').click()
    cy.get('#click_result')
      .should('be.visible')
      .and('have.text', 'You clicked on a button!')
  })

  it('Actions | Right-Click', () => {
    cy.get('#right-click')
      .should('be.visible')
      .and('be.enabled')
      .and('have.text', 'Right-Click on me')
      .rightclick()

    cy.get('#right_click_result')
      .should('be.visible')
      .and('have.text', 'You right-clicked on a button!')
  })

  it('Actions | Double-Click', () => {
    cy.get('#double-click')
      .should('be.visible')
      .and('be.enabled')
      .and('have.text', 'Double-Click on me')
      .dblclick()

    cy.get('#double_click_result')
      .should('be.visible')
      .and('have.text', 'You double-clicked on a button!')
  })

  it('Actions | Type', () => {
    cy.get('#input_box')
      .should('be.visible')
      .and('be.enabled')
      .and('have.attr', 'placeholder', 'Enter your message...')
      .type('Cypress{enter}')
      .should('have.attr', 'value', 'Cypress')
      .clear()
      .should('have.attr', 'value', '')
  })
})
