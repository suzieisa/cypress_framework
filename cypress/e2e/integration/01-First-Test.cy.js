/// <reference types="cypress"/>

// describe is used to group together a bundle of tests
describe('TechGlobal Training Home Page Validation', () => {
  it('Validate TechGlobal Training application title and URL ', () => {
    cy.visit('https://techglobal-training.com/')

    // validate the title
    cy.title().should('eq', 'TechGlobal Training | Home')

    // validate the URL
    cy.url().should('eq', 'https://techglobal-training.com/')
  })

  it('Validate TechGlobal Training application title and URL', () => {
    cy.visit('https://techglobal-training.com/')

    // validate the title
    cy.title().should('contain', 'TechGlobal')

    // validate the url
    cy.url().should('contain', 'https://techglobal-training.com/')
  })
})
