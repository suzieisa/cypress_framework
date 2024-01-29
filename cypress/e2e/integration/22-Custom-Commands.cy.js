/// <reference types="cypress"/>

describe('Custom Commands', { tags: '@custom' }, () => {
  beforeEach(() => {
    cy.visit(`${Cypress.env('SITE_URL')}/frontend`)
    cy.clickCard('Html Elements')
  })

  it('Parent Commands', () => {
    /* Parent Commands */
    // cy.get()
    // cy.title()
    // cy.visit()
    // cy.window()
    // cy.on()

    // cy.get('#webElement').select('option1')

    cy.selectDropdownOption('#company_dropdown1', 'Apple')
    cy.selectDropdownOption('#company_dropdown2', 'Microsoft')

    cy.login('Tech', 'Global')
  })

  it('Child Command', () => {
    cy.get('#main_heading').then(($el) => {
      const text = $el.text()
      cy.log(`My text is: ${text}`)
    })

    cy.get('#main_heading').logText().haveText('Html Elements')

    cy.get('#main_heading').assertAttribute('id', 'main_heading')
  })
})
