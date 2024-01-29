class BookingPage {
  getElement(label) {
    return cy.get(`#${label}`)
  }
}

export default BookingPage
