/// <reference types="cypress"/>

import BookingPage from "./pages/BookingPage";

describe("Booking Funtion", () => {
  const bookingPage = new BookingPage();
  
  beforeEach(() => {
    cy.visit(`${Cypress.env("SITE_URL")}/frontend/project-3`);
  });

  // Navigate to https://techglobal-training.com/frontend/project-3
  // Validate that the “One way” radio button is displayed enabled and selected by default
  // Validate that the “Round trip” radio button is displayed enabled and not selected by default
  // Validate that the “Cabin Class” label and dropdown are displayed
  // Validate that the “From” label and dropdown are displayed
  // Validate that the “To” label and dropdown are displayed
  // Validate that the “Depart” label and date picker is displayed
  // Validate that the “Return” label and date picker is displayed and disabled
  // Validate that the “Number of passengers” label and dropdown are displayed and 1 is the default
  // Validate that the “Passenger 1” category label and dropdown are displayed and “Adult (16-64)” is the default
  // Validate that the “BOOK” button is displayed and enabled

  it("Validate the default Book your trip form", () => {
    cy.get(".is-flex > .radio").each(($el) => {
      cy.wrap($el)
        .should("be.visible")
        // .should("be.enabled")
        .should("be.checked");
      cy.get("div > label");
 
      cy.fixture("bookingData").then((data) => {
       this.cabinClassLabel= data.cabinClassLabel
       this.fromLabel = data.fromLabel 
       this.toLabel = data.toLabel

  
        labels.forEach((label) => {
          bookingPage.getElement(label).should("be.visible").contains(data[label]);
        });
  
        dropdowns.forEach((dropdown) => {
          bookingPage.getElement(dropdown).should("be.visible");
        });
    });
  });
});
