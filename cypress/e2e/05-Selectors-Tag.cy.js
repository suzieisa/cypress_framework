/// <reference types="cypress"/>

describe("Selector - Class", () => {
  it("Validate Frontend Cards", () => {
    cy.visit("https://techglobal-training.com/frontend");

    //Locate all the elements that are links -a
    cy.get("a");

    //Locate all the elements that are images -img
    cy.get("img");

    //Locate all the elements that are paragraphs -p
    cy.get("p");

    //Locate all the elements that are buttons -button
    cy.get("button").should("have.length", 0);

    //Locate all the elements that are headings
    cy.get("h1, h2, h3, h4, h5, h6").should("have.length.lessThan", 1);
  });
});
