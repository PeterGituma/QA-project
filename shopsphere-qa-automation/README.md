# ShopSphere QA Automation Framework

## Overview

Enterprise-level QA Automation project simulating full SDLC execution for a multi-tier e-commerce application.

This project demonstrates:

- End-to-end UI automation (Playwright)
- API automation (Cypress)
- SQL database validation
- Test strategy & documentation
- Defect lifecycle management
- Release readiness assessment

---

## Tech Stack

- Playwright (UI Automation)
- Cypress (API Testing)
- SQL (Backend Validation)
- JIRA (Defect Tracking Simulation)
- GitHub (Version Control)

---

# Project Structure

shopsphere-qa-automation/

- web-tests/ → Playwright UI automation
- api-tests/ → Cypress API automation
- db-validation/ → SQL validation scripts
- docs/ → Test documentation & strategy

---

# Installation Guide

## Prerequisites

- Node.js (v18+ recommended)
- npm
- Database client (DBeaver, pgAdmin, MySQL Workbench, etc.)

---

# 1️⃣ Web Automation Setup (Playwright)

Navigate to web-tests folder:

cd web-tests

Initialize project (if needed):

npm init -y

Install required package:

npm install -D @playwright/test

Install Playwright browsers (IMPORTANT):

npx playwright install

Optional (for TypeScript support):

npm install -D typescript ts-node @types/node
npx tsc --init

---

# Run UI Tests

cd web-tests
npx playwright test

---

# 2️⃣ API Automation Setup (Cypress)

Navigate to api-tests folder:

cd api-tests

Initialize project (if needed):

npm init -y

Install required package:

npm install -D cypress

---

# Run API Tests

cd api-tests
npx cypress run

To open Cypress UI:

npx cypress open

---

# 3️⃣ Database Validation

No npm packages required.

Execute SQL scripts inside:

db-validation/

Using any SQL client against your test database.

Scripts validate:

- Order totals
- Inventory updates
- Business rule calculations
- Order status transitions

---

# Test Coverage

UI Automation:

- Login
- Product browsing
- Add to cart
- Checkout
- Regression scenarios

API Automation:

- GET /products
- POST /orders
- Response validation
- Status code validation

Database Validation:

- Order total verification
- Inventory deduction validation
- Data integrity checks

Automation Coverage: 85%

---

# SDLC Participation

This project simulates full QA lifecycle involvement:

✔ Requirement Analysis  
✔ Test Planning  
✔ Test Case Design  
✔ Traceability Matrix (RTM)  
✔ Automation Framework Development  
✔ SQL Backend Validation  
✔ Defect Logging & Tracking  
✔ UAT Support  
✔ Release Risk Assessment

---

# Defect Lifecycle

Defects logged with:

- Severity classification
- Reproduction steps
- Environment details
- Resolution status
- Closure validation

Simulated JIRA workflow included in docs.

---

# Release Readiness

Regression Coverage: 85%  
Open Defects: 2 (Low Severity)  
Risk Level: Low  
Recommendation: GO for Production

---

# Important Note

The demo baseURL currently points to:

https://demo.shopsphere.com

This is a simulated environment.

To execute tests against a real public demo application,
you may update the baseURL inside:

web-tests/playwright.config.ts  
api-tests/cypress.config.js

Example replacement:
https://www.saucedemo.com

---

# Author

QA Automation Engineer Portfolio Project

Demonstrates:

- Enterprise automation framework design
- Multi-tier testing architecture
- Backend validation expertise
- Risk-based release governance
- SDLC-aligned quality engineering practices
