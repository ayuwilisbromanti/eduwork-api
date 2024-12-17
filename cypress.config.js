const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    apiUrl: "https://the-internet.herokuapp.com",
    username: "admin",
    password: "admin",
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
