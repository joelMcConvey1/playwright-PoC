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
- JavaScript — test and framework code
- Node.js
- Winston

## Running the Tests
Install dependencies:
`npm install`

Run Tests:
`npm run test`

## Next Steps
- Move setup, base page, utilities (exc. paths), logger, and potentially components into a shared library
- Building out further actions & validations potentially
- Could extend Paths to pass dynamic data to support query params
- PageFactory to be removed in shared library hook (Each service can have a hook for this)
- Investigate passing base url through Cucumber (doesn't look possible atm)
- BrowserStack integration
- Add parallel execution
- Approach Storing data between steps
- Using JSON to feed data?
