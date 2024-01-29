class BasePage {
  getTechGloablLogo() {
    return cy.get('#logo')
  }
  getNavigationDropdown() {
    return cy.get('#dropdown-container')
  }
  getMainHeading() {
    return cy.get('#main_heading')
  }
}

export default BasePage
