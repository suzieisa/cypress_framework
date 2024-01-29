/// <reference types="cypress"/>
import TablesPage from "../../pages/TablesPage";

describe("Static Tables", () => {
  beforeEach(() => {
    cy.visit(`${Cypress.env("SITE_URL")}/frontend`);
    cy.clickCard("Tables");
    cy.fixture("header").then(function (data) {
      this.headers = data.headers;
    });
  });
  const tablesPage = new TablesPage();
  it("Verify the headers of the table", { tags: ["@smoke", "@regression"]} function () {
    tablesPage.getHeader().each(($header, index) => {
      expect($header.text()).to.equal(this.headers[index]);
    });
  });
});
