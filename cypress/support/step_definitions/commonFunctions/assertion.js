import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
/// <reference types="Cypress" />

Then("Page should contains {string}", (text) => {
    cy.contains(text)
})