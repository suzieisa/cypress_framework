/// <reference types="cypress"/>

describe("iFrames", () => {
  beforeEach(() => {
    // This will fail if the page doesn't send text/html with 200 status
    cy.visit(`${Cypress.env("SITE_URL")}/frontend`);
    cy.clickCard("IFrames");
  });

  it("iFrames Example", () => {
    // This will not work
    // cy.get('#name_form').type('MyName')

    cy.get("#form_frame")
      .its("0.contentDocument.body")
      .should("not.be.empty")
      .find("#first_name")
      .type("TechGlobal");
  });

  /**
   * Go to https://techglobal-training.com/frontend/
   * Click on the "IFrames" card
   * Enter "John" into the first name input box
   * Enter "Doe" into the last name input box
   * Click on the "SUBMIT" button
   * Validate the result equals "You entered: John Doe"
   */

  it("iFrames validate Login", () => {
    const name = ["John", "Doe"];

    cy.get("#form_frame")
      .its("0.contentDocument.body")
      .find("#first_name, #last_name")
      .each(($el, index) => {
        cy.wrap($el).type(name[index]);
      });

    cy.get("#form_frame").its("0.contentDocument.body").find("#submit").click();

    cy.get("#result").should("have.text", `You entered: ${name.join(" ")}`);
  });
});
