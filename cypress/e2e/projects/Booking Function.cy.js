/// <reference types="cypress"/>

import BookingPage from '../../pages/BookingPage.js'

describe('Booking Function', () => {
  const bookingPage = new BookingPage()
  
  beforeEach(() => {
    cy.fixture('booking').then(function (data) {
      this.labels = data.labels
      this.labelsForOneWay = data.labelsForOneWay
      this.labelsForOnePassenger = data.labelsForOnePassenger
      this.labelsForTwoPassengers = data.labelsForTwoPassengers
    })
    
    cy.visit(`${Cypress.env('SITE_URL')}/frontend/project-3`)
  })


  // const numberOfPassenger = 1
  // const passengerAges = 'Adult (16-64)'

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

  it('Validate the default Book your trip form', function () {
    bookingPage.getRadioButton().each(($el, index) => {
      if (index === 0) {
      cy.wrap($el)
      .should('be.visible').and('be.enabled').should('be.checked')
      }
      else {
        cy.wrap($el)
        .should('be.visible').and('be.enabled').and('not.be.checked')
      }
      bookingPage.getLabels().each(($el, index) => {
        cy.wrap($el).should('have.text', this.labels[index]).should('be.visible')
      })
      bookingPage.getDatePicker().each(($el, index) => {
        cy.wrap($el).should('be.visible')
        if(index === 1) {
        cy.wrap($el).should('not.be.enabled')
        } 
      })
      bookingPage.getLabels()
    .each(($el, index) => {
      if(index === 5){
        cy.wrap($el).should('have.text','Number of passengers')
        cy.wrap($el).parent().find('select').select('1')
      }  
      if(index === 6){
        cy.wrap($el).should('have.text','Passenger 1')
        cy.wrap($el).parent().find('select').select('Adult (16-64)')
      }
      })
      bookingPage.getBookButton().should('be.visible').and('be.enabled')
    })
  })
  // Navigate to https://techglobal-training.com/frontend/project-3
  // Click on the “Round trip” radio button and validate it is selected
  // Validate that the “One way” radio button is not selected
  // Validate that the “Cabin Class” label and dropdown are displayed
  // Validate that the “From” label and dropdown are displayed
  // Validate that the “To” label and dropdown are displayed
  // Validate that the “Depart” label and date picker is displayed
  // Validate that the “Return” label and date picker is displayed
  // Validate that the “Number of passengers” label and dropdown are displayed and 1 is the default
  // Validate that the “Passenger 1” label and dropdown are displayed and “Adult (16-64)” is the default
  // Validate that the “BOOK” button is displayed and enabled

    it('Validate the Book your trip form when Round trip is selected', function () {
      bookingPage.getRadioButton().each(($el, index) => {
        if (index === 1) {
            cy.wrap($el)
            .check().should('be.checked')
          }
        else {
          cy.wrap($el)
        .check().should('not.be.selected')
        }
    })
    bookingPage.getLabels().each(($el, index) => {
      cy.wrap($el).should('be.visible').and('have.text', this.labels[index])
    })
    bookingPage.getDatePicker().each(($el) => {
      cy.wrap($el).should('be.visible')
    })
    bookingPage.getLabels()
    .each(($el, index) => {
      if(index === 5){
        cy.wrap($el).should('have.text','Number of passengers')
        cy.wrap($el).parent().find('select').select(1)
      }  
      if(index === 6){
        cy.wrap($el).should('have.text','Passenger 1')
        cy.wrap($el).parent().find('select').select(1)
      }
      })
      bookingPage.getBookButton().should('be.visible').and('be.enabled')
  })
    //   Navigate to https://techglobal-training.com/frontend/project-3
    // Select the “One way” radio button
    // Select “Business” for the “Cabin Class” dropdown
    // Select “Illinois” for the “From” dropdown
    // Select “Florida” for the “To” dropdown
    // Select the next week for the ”Depart”
    // Select “1” for the “Number of passengers” dropdown
    // Select “Senior (65+)” for the Passenger 1 dropdown
    // Click on the “BOOK” button
    // Validate the booking information displayed below
    // DEPART
    // IL to FL
    // {dynamic date}
    // Number of passengers: 1
    // Passenger 1: Senior (65+)
    // Cabin Class: Business

    it('Validate the booking for one passenger and one way', function () {
    bookingPage.getRadioButton().each(($el, index) => {
    if (index === 0) {
    cy.wrap($el).check().should('be.checked')
    }
})
    bookingPage.getLabels().parent().find('select')
    .each(($el, index) => {
        cy.wrap($el).select(this.labelsForOneWay[index])
      })

    bookingPage.getBookButton().click()
    bookingPage.getBookingInfo().should('be.visible')
})

// Navigate to https://techglobal-training.com/frontend/project-3
// Select the “Round trip” radio button
// Select “First” for the “Cabin Class” dropdown
// Select “California” for the “From” dropdown
// Select “Illinois” for the “To” dropdown
// Select the next week for the ”Depart”
// Select the next month for the “Return”
// Select “1” for the “Number of passengers” dropdown
// Select “Adult (16-64)” for the Passenger 1 dropdown
// Click on the “BOOK” button
// Validate the booking information displayed below
// DEPART
// CA to IL
// {dynamic date}
// Number of passengers: 1
// Passenger 1: Adult (16-64)
// Cabin Class: First


// RETURN
// IL to CA
// {dynamic date}
it('Validate the booking for 1 passenger and round trip', function () {
  bookingPage.getRadioButton().each(($el, index) => {
    if (index === 1) {
        cy.wrap($el)
        .check().should('be.checked')
      }
    else {
      cy.wrap($el)
    .check().should('not.be.selected')
    }
})
bookingPage.getLabels().parent().find('select')
    .each(($el, index) => {
        cy.wrap($el).select(this.labelsForOnePassenger[index])
      })
      bookingPage.getBookButton().click()
      bookingPage.getBookingInfo().should('be.visible')
})
it('Validate the booking for 2 passengers and one way', function () {
  bookingPage.getRadioButton().each(($el, index) => {
    if (index === 0) {
    cy.wrap($el).check().should('be.checked')
    }
})
bookingPage.getLabels().parent().find('select')
    .each(($el, index) => {
        cy.wrap($el).select(this.labelsForTwoPassengers[index])
      })
      bookingPage.getBookButton().click()
      bookingPage.getBookingInfo().should('be.visible')
    })
  })