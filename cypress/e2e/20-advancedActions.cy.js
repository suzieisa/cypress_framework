/// <reference types="cypress"/>

describe("Keyboard & Mouse Actions", () => {
  beforeEach(() => {
    // This will fail if the page doesn't send text/html with 200 status
    cy.visit(`${Cypress.env("SITE_URL")}/frontend`);
    cy.clickCard("Html Elements");
  });

  it("Keyboard Actions", () => {
    //  cy.get("#registerButton").realClick();
    cy.get("#text_input1")
      .realClick()
      .realPress("KeyA")
      .realPress("Tab")
      .realPress("KeyB")
      .realPress("ArrowLeft")
      .realPress("KeyR")
      .realPress("ArrowRight")
      .realPress("Backspace");
  });

  it.only("Right Click, and Double Click", () => {
    cy.clickCard("Actions");

    cy.get().dblclick();
    cy.get("#click").should("be.visible").should("have.text", "Click on me");
    cy.get("#right-click")
      .should("be.visible")
      .should("have.text", "Right-Click on me");
    cy.get("#double-click")
      .should("be.visible")
      .should("have.text", "Double-Click on me");

    cy.get("#click").click();
    cy.get("#click_result").should("be.visible").should("have.text", "You clicked on a button!")

    cy.get("#right-click").
  });

  it("Drag and Drop", () => {
    cy.visit(`${Cypress.env("SITE_URL")}/frontend`)
    cy.get()

  })
});
