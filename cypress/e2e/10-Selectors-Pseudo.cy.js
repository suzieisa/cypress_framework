/// <reference types="cypress"/>
describe("Selectors | PSEUDO CLASSES", () => {
  beforeEach(() => {
    cy.visit("https://techglobal-training.com/frontend/html-elements");
  });
  it("Validate Input Elements", () => {
    cy.get("input:not(:checked)").should("have.length", 12);
    cy.get("#checkbox_1").click();
    cy.get("#checkbox_1").should("be.checked");
    cy.get("input:not(:checked)").should("have.length", 11);
    cy.get("input:checked").should("have.length", 1);
  });
});
