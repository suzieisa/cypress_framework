/// <reference types="cypress"/>

describe('Selector - Attributes', () => {

    beforeEach(() => {
        cy.visit('https://techglobal-training.com/frontend/html-elements')
    })

  it('Validate Frontend Cards', () => {
  
    // select all the paragraphs
    cy.get('p').should('have.length.at.least', 5)

    // select all the paragrpahs that have ID attributes
    cy.get('p[id]').should('have.length.lessThan', 5)

    // select all the paragpraphs that have Id attirbutes equals "hello_paragraph"
    cy.get('p[id="hello_paragraph"]').should('have.length', 1)
  })

  it('Validate Frontend Html Element Buttons', () => {
    cy.visit('https://techglobal-training.com/frontend/html-elements')

    // Validate that there are 3 button elements
    cy.get('button').should('have.length', 3)

    // Validate that there are 2 button elements with id attribute
   
    cy.get('button[id]').should('have.length', 2)
    
    // Validate that there is only one button element with id="register_button"
    cy.get('button[id="register_button"]').should('have.length', 1)
  })
})
