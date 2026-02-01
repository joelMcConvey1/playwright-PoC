# Playwright + Cucumber PoC

A proof‑of‑concept framework for running browser‑based microservice tests against our frontend applications using Playwright.

This PoC demonstrates how we can build a shared, reusable automation layer that each frontend can consume, keeping tests consistent, maintainable, and scalable across services.

## Purpose of This PoC
The goal is to validate an approach where:

- Playwright handles browser automation 
- Cucumber provides readable, BDD scenarios 
- A shared automation library provides hooks, world setup, page actions, validations, and reusable components

Each frontend could only require maintenance of:

- Feature files
- Step definitions
- Page objects specific to that service

This would allow us to test microservices independently while sharing a common automation foundation.

## Tech Stack
- Playwright
- Cucumber.js
- JavaScript
- Node.js

## Running the Tests
Install dependencies:
`npm install`

Run Tests:
`npm run test`

Run Tests in Parallel:
`npm run test:parallel`

Run Tests Headless:
`HEADLESS=true npm test`

## Other Commands
Check for package updates:
`npm outdated`

Check for vulnerable packages:
`npm audit`

## Next Steps
- Move setup, base page, utilities, logger, and potentially components into a shared library
- PageFactory & LoadScenarioData to be removed in shared library hook (Each service can have a separate hook for this)
- BrowserStack integration
- Could look at Playwright's Network capability to get around split journeys (filter -> photo -> filter)
- Headless Mode -> Failing locally as page blocked :(
