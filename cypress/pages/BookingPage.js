class BookingPage {
  getRadioButton() {
    return cy.get('.mr-1')
  }
  getLabels() {
    return cy.get('.field > label')
  }
  getBookButton() {
  return cy.get('.null')
}
  getDropDowns() {
    return cy.get('.select > select')
  }
  getPassengerDropdown() {
    return cy.get(':nth-child(7) > .select > select')
  }
  getDatePicker() {
    return cy.get('.react-datepicker__input-container')
  }
  getBookingInfo() {
    return cy.get('.ml-3')
  }
}

export default BookingPage
