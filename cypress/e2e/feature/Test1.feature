Feature: Test Script

    Created a script for demo

    Scenario Outline: Scenario for testing a scenario
        Given I am opening a URL
        When I am entering the "standard_user" into "input#user-name"
        And I am entering the "secret_sauce" into "input#password"
        And I click on a "input#login-button"
        Then Page should contains "Products"