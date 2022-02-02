import { Given } from "cypress-cucumber-preprocessor/steps";
import { Then } from "cypress-cucumber-preprocessor/steps";

const url = 'http://localhost:3000/'
Given('I open the app', () => {
  cy.visit(url)
})

Then(`I see {string} text`, (text) => {
  cy.contains(text).should('be.visible')
})
