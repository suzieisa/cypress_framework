/// <reference types="cypress"/>

describe("Cypress Navigation", () => {
  it("Go to URL, refresh, navigate forward and back", () => {
    cy.visit("https://techglobal-training.com/");

    // refresh the page
    cy.reload();

    // navigate to another page
    cy.visit("https://www.google.com/");

    // navigate back to TechGlobal
    cy.go("back");

    // navigate forward to Google
    cy.go("forward");
  });
});
