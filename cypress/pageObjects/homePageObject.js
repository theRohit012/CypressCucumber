require('cypress');
import homePageLocators from "../locators/homePageLocators";


class HomePage {

    validateHomePageLogo() {
        cy.get(homePageLocators.homePagelogo).should('be.visible');
    }

    validateNavLinks(NavLinkName){
        cy.contains(NavLinkName).should('be.visible');
    }
}

export default HomePage;