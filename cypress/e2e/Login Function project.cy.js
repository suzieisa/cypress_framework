/// <reference types="cypress"/>

describe("Login Function Project", () => {
  beforeEach(() => {
    cy.visit("https://techglobal-training.com/frontend/project-2");
  });

  it("Validate the Login Form", () => {
    cy.get("#username")
      .should("be.visible")
      .should("not.have.attr", "required");
    cy.get("label[for= 'username']").should(
      "have.text",
      "Please enter your username"
    );
    cy.get("#password")
      .should("be.visible")
      .should("not.have.attr", "required");
    cy.get("label[for= 'password']").should(
      "have.text",
      "Please enter your password"
    );
    cy.get("#login_btn")
      .should("be.visible")
      .should("be.enabled")
      .should("have.text", "LOGIN");
    cy.get("[href='/frontend/project-2']")
      .should("be.visible")
      .click()
      .should("have.text", "Forgot Password?");
  });

  it("Validate the Valid Login", () => {
    cy.get("#username").type("TechGlobal");
    cy.get("#password").type("Test1234");
    cy.get("#login_btn").click();
    cy.get("#success_lgn").should("have.text", "You are logged in");
    cy.get("#logout").should("have.text", "LOGOUT");
  });

  it("Validate the logout", () => {
    cy.get("#username").type("TechGlobal");
    cy.get("#password").type("Test1234");
    cy.get("#login_btn").click();
    cy.get("#logout").click();
    cy.get(".has-background-white-ter").should("be.visible");
  });
  it("Validate the Forgot Password? Link and Reset Password Modal", () => {
    cy.get("[href='/frontend/project-2']").click();
    cy.get("#modal_title").should("have.text", "Reset Password");
    cy.get(".delete").should("be.visible");
    cy.get("#email").should("be.visible");
    cy.get("label[for= 'email']").should(
      "have.text",
      "Enter your email address and we'll send you a link to reset your password. "
    );
    cy.get("#submit")
      .should("be.visible")
      .should("be.enabled")
      .should("have.text", "SUBMIT");
  });

  it("Validate the Reset Password modal close button", () => {
    cy.get("[href='/frontend/project-2']").click();
    cy.get(".modal-card").should("be.visible");
    cy.get(".delete").click();
    cy.get(".modal-card").should("not.exist");
  });
  it("Validate the Reset Password form submission", () => {
    cy.get("[href='/frontend/project-2']").click();
    cy.get("#email").type("isasuzm@gmail.com");
    cy.get("#submit").click();
    cy.get("#confirmation_message")
      .should("be.visible")
      .and(
        "contain",
        "A link to reset your password has been sent to your email address."
      );
  });
  it("Validate the invalid login with the empty credentials", () => {
    cy.get("#username").clear();
    cy.get("#password").clear();
    cy.get("#login_btn").click();
    cy.get("#error_message")
      .should("be.visible")
      .and("contain", "Invalid Username entered!");
  });
  it("Validate the invalid login with the wrong username", () => {
    cy.get("#username").type("John");
    cy.get("#password").type("Test1234");
    cy.get("#login_btn").click();
    cy.get("#error_message")
      .should("be.visible")
      .and("contain", "Invalid Username entered!");
  });
  it("Validate the invalid login with the wrong password", () => {
    cy.get("#username").type("TechGlobal");
    cy.get("#password").type("1234");
    cy.get("#login_btn").click();
    cy.get("#error_message")
      .should("be.visible")
      .and("contain", "Invalid Password entered!");
  });
  it("Validate the invalid login with the wrong username and password", () => {
    cy.get("#username").type("John");
    cy.get("#password").type("1234");
    cy.get("#login_btn").click();
    cy.get("#error_message")
      .should("be.visible")
      .and("contain", "Invalid Username entered!");
  });
});
