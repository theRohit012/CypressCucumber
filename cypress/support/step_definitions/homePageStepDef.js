import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import HomePage from "../../pageObjects/homePageObject";

const homepage = new HomePage();

Then('I verify the homePage Logo', function () {
    homepage.validateHomePageLogo();
})

Then('I verify {string} navigation link in header', function (navLink) {
    homepage.validateNavLinks(navLink);
})