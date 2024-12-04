import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
/// <reference types="Cypress" />

When("I am entering the {string} into {string}", (data, element) => {
    cy.get(element).type(data)
})