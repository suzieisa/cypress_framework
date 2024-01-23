const { defineConfig } = require("cypress");
require("dotenv").config();

module.exports = defineConfig({
  viewportHeight: 1080,
  viewportWidth: 1980,
  chromeWebSecurity: false,
  retries: 2,
  env: {
    SITE_URL: process.env.UI_URL,
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}",
  },
});
