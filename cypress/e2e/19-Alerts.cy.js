/// <reference types="cypress"/>

describe("Alerts", () => {
  beforeEach(() => {
    // This will fail if the page doesn't send text/html with 200 status
    cy.visit(`${Cypress.env("SITE_URL")}/frontend`);
    cy.clickCard("Alerts");
  });

  it("Handling the Warning Alerts", () => {
    cy.get("#warning_alert").click();

    cy.on("window:alert", (str) => {
      expect(str).to.equal("You are on TechGlobal Training application.");
    });
    cy.get("#warning_alert").click();

    cy.get("#action").should(
      "have.text",
      "You accepted warning by clicking OK"
    );
  });

  /**
   * CONFIRMATION ALERT
   * 1. Go to https://techglobal-training.com/frontend/
   * 2. Click on the "Alerts" card
   * 3. Click on the "Confirmation alert" button
   * 4. Validate the alert text equals "Would you like to stay on TechGlobal Training application?"
   * 5. Click on the "Cancel" button on the alert
   * 6. Validate the result message equals "You rejected the alert by clicking Cancel."
   */
  it("Handling the Confirmation Alerts", () => {
    cy.on("window:confirm", (str) => {
      expect(str).to.equal(
        "Would you like to stay on TechGlobal Training application?"
      );
      return false;
    });

    cy.get("#confirmation_alert").click();

    cy.get("#action").should(
      "have.text",
      "You rejected the alert by clicking Cancel."
    );
  });
  it.only("Handling the Prompt Alert", () => {
    cy.window().then((win) => {
      // window is a window object
      cy.stub(win, "prompt").returns(null); // null is how you would cancel
      // stub method gets the function and takes the functionality that we provide temporaotily
    });
    cy.get("#prompt_alert").click();
  });
});
