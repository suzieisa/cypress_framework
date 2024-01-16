/// <reference types="cypress"/>
describe("Dynamic Elements | CSS contains, starts-with ends-with", () => {
  it("Validate TechGlobal Dynamic Elements 1", () => {
    cy.visit("https://techglobal-training.com/frontend/");
    cy.get("#card-2").click();
    cy.get("p[id^=box_1").should("be.visible").and("have.text", "Box 1");
    cy.get("p[id*=box_1").should("be.visible").and("have.text", "Box2");
  });
});
