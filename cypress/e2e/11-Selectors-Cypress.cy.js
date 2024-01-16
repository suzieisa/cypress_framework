// <reference types="cypress"/>
describe("Cypress Selectors", () => {
  beforeEach(() => {
    cy.visit("https://techglobal-training.com/frontend");
  });
  it("Cypress Selectors | first, last, eq", () => {
    cy.get("div.cards").should("have.length", 20);
    cy.get("div.cards")
      .first()
      .should("be.visible")
      .and("have.length", 1)
      .and("have.text", "Html Elements");
    // do the same for the last card and the Tables
    cy.get("div.cards")
      .last()
      .should("be.visible")
      .and("have.length", 1)
      .and("have.text", "Project - Front-end 10");
    cy.get("div.cards")
      .eq(7)
      .should("be.visible")
      .and("have.length", 1)
      .and("have.text", "Tables");
  });
  it("Cypress Selectors | next, prev", () => {
    cy.get("div.cards")
      .first()
      .next()
      .should("have.text", "Dynamic Elements")
      .next()
      .should("have.text", "Waits")
      .prev()
      .should("have.text", "Dynamic Elements");
    // Locate and verify the text of second card from the end (card-19) -> Project - Front-end 9
    cy.get("div.cards")
      .last()
      .prev()
      .should("have.text", "Project - Front-end 9");
  });
  it("Cypress Selectors | find, children, parent", () => {
    // CSS parent-child
    cy.get("footer > div").should("have.length", 1);
    cy.get("footer div").should("have.length", 4);
    // Cypress parent-child
    cy.get("footer").children("div").should("have.length", 1);
    cy.get("footer").find("div").should("have.length", 4);
    // Cypress child-parent
    cy.get('a[href*="facebook"]')
      .parent()
      .should("have.class", "Footer_socials__7h4n1")
      .parent()
      .should("have.class", "has-text-centered")
      .parent()
      .should("have.class", "Footer_footer__kXlYa")
      .parent()
      .should("have.class", "App")
      .parent()
      .should("have.id", "root");
    cy.get('a[href*="facebook"]').parents().should("have.length", 7);
    cy.get('a[href*="facebook"]')
      .parent()
      .next()
      .children()
      .should("have.text", "© 2024 TechGlobal - All Rights Reserved");
  });
});
