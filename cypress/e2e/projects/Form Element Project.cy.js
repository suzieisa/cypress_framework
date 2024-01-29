/// <reference types="cypress"/>

describe('Form Element Project', () => {
  beforeEach(() => {
    cy.visit('https://techglobal-training.com/frontend/project-1')
  })

  it('Validate Contact Information', () => {
    cy.get('.is-size-3').should('have.text', 'Contact Us')
    cy.get('#address').should(
      'have.text',
      '2800 S River Rd Suite 310, Des Plaines, IL 60018'
    )
    cy.get('#email').should('have.text', 'info@techglobalschool.com')
    cy.get('#phone-number').should('have.text', '(224) 580-2150')

    // instead can do this, save as an alias and use next to get all siblings for addres, email, number
    cy.get('.is-size-3').as('header').should('have.text', 'Contact Us')
    const expectedTexts = [
      '2860 S River Rd Suite 480, Des Plaines, IL 60018',
      'info@techglobalschool.com',
      '(224) 580-2150',
    ]
    cy.get('@header')
      .nextAll()
      .each((ele, index) => {
        cy.wrap(ele).should('have.text', expectedTexts[index])
      })
  })

  it('Validate that the Full name input box', () => {
    cy.get('form > :nth-child(1) > .control > .input')
      .should('be.visible')
      .and('have.attr', 'required')
      .and('have.attr', 'placeholder', 'Enter your full name')
  })
  cy.get('form > :nth-child(1) > .label').should('have.text', 'Full name *')
  cy.get('form > :nth-child(1) > .control > .input').should(
    'have.attr',
    'placeholder',
    'Enter your full name'
  )
})

it('Validate the Gender radio button', () => {
  cy.get('form > :nth-child(2) > .control > .label').should(
    'have.text',
    'Gender *'
  )
  cy.get('form > :nth-child(2) > .control > .radio > .mr-1').should(
    'have.attr',
    'required'
  )
  cy.get('.control > :nth-child(2)').and('have.text', 'Male')
  cy.get('.control > :nth-child(3)')
    .should('be.visible')
    .and('have.text', 'Female')
  cy.get('.control > :nth-child(4)')
    .should('be.visible')
    .and('have.text', 'Prefer not to disclose')

  cy.get('.mr-1').should('be.enabled').and('not.be.checked')

  cy.get('.control > :nth-child(2) > .mr-1').check().should('be.checked')
  cy.get('.control > :nth-child(3) > .mr-1').should('not.be.checked')
  cy.get('.control > :nth-child(4) > .mr-1').should('not.be.checked')

  cy.get('.control > :nth-child(3) > .mr-1').check().should('be.checked')
  cy.get('.control > :nth-child(2) > .mr-1').should('not.be.checked')
  cy.get('.control > :nth-child(4) > .mr-1').should('not.be.checked')
})

it('Validate the Email input box', () => {
  cy.get('form > :nth-child(4) > .control > .input')
    .should('be.visible')
    .should('have.attr', 'required')

  cy.get('form > :nth-child(4) > .label').should('have.text', 'Email *')

  cy.get('form > :nth-child(4) > .control > .input').should(
    'have.attr',
    'placeholder',
    'Enter your email'
  )
})
it('Validate the Phone input box', () => {
  cy.get('form > :nth-child(5) > .control > .input')
    .should('be.visible')
    .should('not.have.attr', 'required')

  cy.get('form > :nth-child(5) > .label').should('have.text', 'Phone')
  cy.get('form > :nth-child(5) > .control > .input').should(
    'have.attr',
    'placeholder',
    'Enter your phone number'
  )
})

it('Validate the Message text area', () => {
  cy.get('.textarea').should('be.visible').should('not.have.attr', 'required')
  cy.get('form > :nth-child(6) > .label').should('have.text', 'Message')
  cy.get('.textarea').should(
    'have.attr',
    'placeholder',
    'Type your message here...'
  )
})
it('Validate the Consent checkbox', () => {
  cy.get('.checkbox').should(
    'have.text',
    ' I give my consent to be contacted.'
  )
  cy.get('.checkbox > input')
    .should('be.visible')
    .should('have.attr', 'required')
  cy.get('.checkbox > input')
    .should('be.visible')
    .and('be.enabled')
    .click()
    .should('be.checked')
    .uncheck()
    .should('not.be.checked')
})
it.only('Validate the SUBMIT button', () => {
  cy.get('.control > .button')
    .should('be.visible')
    .and('be.enabled')
    .and('have.text', 'SUBMIT')
})
it('Validate the form submission', () => {
  cy.get('form > :nth-child(1) > .control > .input').type('Suzanne Isa')
  cy.get('.control > :nth-child(3)').click()
  cy.get('form > :nth-child(3) > .control > .input').type(
    '1930 Stapleton, Frankfort, IL'
  )
  cy.get('form > :nth-child(4) > .control > .input').type('isasuzm@gmail.com')
  cy.get('form > :nth-child(5) > .control > .input').type('708 - 633 - 4685')
  cy.get('.textarea').type(
    'I am interested in your program and would like more information.'
  )
  cy.get('.checkbox > input').click().should('be.checked')
  cy.get('form ').submit()
  cy.get('.mt-5')
    .should('be.visible')
    .should('have.text', 'Thanks for submitting!')
})
