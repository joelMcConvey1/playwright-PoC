@smoke
Feature: Passport Application

  Background: User navigates to the GOV.UK passport page
    Given the user navigates to the passports page

  @SMK1
  Scenario Outline: User starts an application
    When the user selects "<Answer>" to do they live in the UK
    And the user uploads a photo

    Examples:
    | Answer |
    | Yes    |
    | No     |
