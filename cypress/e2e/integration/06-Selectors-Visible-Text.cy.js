/// <reference types="cypress"/>

describe('Selector - Visible Text', () => {
  it('Validate Frontend Cards', () => {
    cy.visit('https://techglobal-training.com/frontend')
    //Locate elements that contains waits
    cy.contains('Waits')
    //locate elements that has Tables
    cy.contains('Tables')
    //locate elements that has project
    cy.contains('Project')
    //locate elements that has elements
    cy.contains('Elements')
    //locate elements that has actions
    cy.contains('Actions')
  })
})
