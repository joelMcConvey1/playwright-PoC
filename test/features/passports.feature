@smoke
Feature: Passport Application

  Background: User navigates to the GOV.UK passport page
    Given the user navigates to the passports page

  @data:uk-passport-application
  Scenario: User starts an application
    When the user answers if they live in the UK
    And the user uploads a photo

  @data:ovs-passport-application
  Scenario: User starts an application
    When the user answers if they live in the UK
    And the user uploads a photo

  @data:ovs-passport-application-country-specific
  Scenario Outline: User starts an application
    When a user begins an application from "<Country>"
    And the user uploads a photo

    Examples:
    | Country |
    | Spain   |
    | France  |
    | Italy   |
