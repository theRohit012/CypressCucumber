import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
/// <reference types="Cypress" />


When("I click on a {string}", (element) => {
    cy.get(element).click()
})

When("I click on {string} element inside the {string}", (childLocator, parentLocator) => {
    cy.get(parentLocator).find(childLocator).click()
})


