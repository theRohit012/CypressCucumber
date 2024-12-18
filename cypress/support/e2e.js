require('cypress');
import './commands';

// Alternatively you can use CommonJS syntax:
// require('./commands')

Cypress.on('uncaught:exception', (err, runnable, promise) => {
    return false
})

beforeEach(()=> {
    cy.visit('/');
})