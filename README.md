# TECHNICAL-TEST-WOJCIECHGRYGO

This repository contains UI tests using Playwright.

## 🚀 Getting Started

### Prerequisites

1. Install dependencies:
```bash
npm install
```

2. Install Playwright:
```bash
npx playwright install
```

## 💡 Recommendations

- Install the [Playwright Test for VSCode](https://marketplace.visualstudio.com/items?itemName=ms-playwright.playwright) extension. This extension provides an integrated experience for running and debugging Playwright tests directly from Visual Studio Code. It helps in writing, running, and debugging tests more efficiently by providing features like code completion, inline test results, and debugging capabilities.

## 🧪 Running Tests

### Run all tests
```bash
npx playwright test
```

## 📊 Test Reports
After test execution, HTML report will be generated in the `playwright-report` directory. To view it:
```bash
npx playwright show-report
```

## 🔧 Configuration
The project configuration is defined in `playwright.config.ts`. Key features include:
- Parallel test execution - 3 number of workers
- HTML report generation
- Trace capture on failure
- Project uses only chromium browser

## 📁 Project Structure
```
├── test-results            # Stores raw test output and artifacts
├── playwright-report       # Contains generated HTML test reports
├── src                     # Source files for test logic and utilities
│   ├── fixtures            # Test data
│   ├── helpers             # Helper functions for tests
│   ├── pages               # Page object models for UI automation
├── tests                   # Test suites and test case definitions
└── playwright.config.ts    # Environment variables
```