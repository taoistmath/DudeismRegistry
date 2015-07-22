Feature: Running Cucumber with Protractor
  As a user of Protractor
  I should be able to use Cucumber
  to run my E2E tests

  @dev
  Scenario: Running Cucumber with Protractor
    Given I run Cucumber with Protractor
    Then it should still do normal tests
    Then it should expose the correct global variables

  @dev
  Scenario: Wrapping WebDriver
    Given I go on "/"
    Then the title should equal "Dudeism Registry"
    When I click Sign In link
    Then I should see the registration form
    When I enter username "GFunk"
