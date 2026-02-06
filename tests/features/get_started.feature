@smoke @getStarted
Feature: Playwright Get Started navigation

  Scenario: Navigate to installation page using Get Started link
    Given user is on Playwright home page
    When user clicks on Get Started link
    Then installation heading should be visible
