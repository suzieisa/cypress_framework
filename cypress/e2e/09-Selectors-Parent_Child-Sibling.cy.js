/// <reference types="cypress"/>

describe("Dyamic Elements | CSS parent, child, sibling", () => {
  beforeEach(() => {
    cy.visit("https://techglobal-training.com/frontend/html-elements");
  });

  it("Validate TechGlobal Elements with parent-child", () => {
    cy.get("input").should("have.length.at.least", 10);
    cy.get("div>input").should("have.length", 12);
  });
});
