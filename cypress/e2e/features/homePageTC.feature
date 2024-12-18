Feature: Verify homepage functionalities

This is to verify the homepage functionalities and flow

Scenario Outline: Verify homepage logo
Then I verify the homePage Logo

Scenario Outline: Verify Navigation Links
Then I verify <navLinks> navigation link in header

Examples:
    | navLinks |
    | Top Deals |
    | Flight Booking |