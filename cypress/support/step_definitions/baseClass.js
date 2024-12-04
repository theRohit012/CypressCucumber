import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
/// <reference types="Cypress" />

Given("I am opening a URL", () => {
    cy.visit("https://www.saucedemo.com/")
})