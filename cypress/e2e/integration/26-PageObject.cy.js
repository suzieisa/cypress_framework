/// <reference types="cypress"/>
import LoginPage from '../../pages/LoginPage'

describe('Login page test', () => {
  beforeEach(() => {
    cy.fixture('example').then(function (data) {
      this.username = data.username
      this.password = data.password
    })

    cy.clickCard('Project - Login Function')
  })

  //   it("Login without POM", () => {
  //     cy.get("#username").type(Cypress.env('UI_USERNAME'));

  //     cy.get("#password").type(Cypress.env('UI_PASSWORD'));

  //     cy.get("#login_btn").click();

  //     cy.get("#success_lgn").should("be.visible");
  //   });

  const loginPage = new LoginPage()

  it('Login with POM', { tags: '@smoke' }, function () {
    // loginPage.userLogin(Cypress.env('UI_USERNAME'), Cypress.env('UI_PASSWORD'))
    loginPage.userLogin(this.username, this.password)

    loginPage.getSuccessMessage().should('be.visible')

    loginPage.getTechGlobalLogo()
  })

  /**
   * 
   * 1. Go techglobal.com
   * 2. Navigate to frontend page
   * 3. go to html elements page
   * 4. click on checkbox
   * 
   * import HomePage from "../../pages/HomePage";
   * import FrontendPage from "../../pages/FrontendPage";
   * import HtmlElementsPage from "../../pages/HtmlElementsPage";
   * 
   * const homePage = new HomePage()
   * const frontendPage = new FrontendPage()
   * const htmlElementsPage = new HtmlElementsPage()
   * 
   it("Login with POM", () => {

    loginPage.userLogin(Cypress.env('UI_USERNAME'), Cypress.env('UI_PASSWORD'))

    loginPage.getSuccessMessage().should("be.visible");
  });
   */
})
