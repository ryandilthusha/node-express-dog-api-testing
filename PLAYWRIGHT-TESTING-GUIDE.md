# Playwright API & E2E Testing Guide

## 🧪 Test Coverage (Assignment Requirements)

### API Tests (tests/dogApi.api.test.ts)

#### ✅ Test 1: Positive API Test - Get Random Dog Image
Make GET call to `/api/dogs/random`

**Expectations:**
- ✓ Returned HTTP status is 200
- ✓ success is true
- ✓ data is returned
- ✓ data contains imageUrl
- ✓ type of imageUrl is string

#### ❌ Test 2: Negative API Test - Invalid Route
Make GET request with invalid URL `/api/dogs/invalid`

**Expectations:**
- ✓ Returned HTTP status is 404
- ✓ Returned response contains error message
- ✓ Error message is correct: "Route not found"

### E2E Tests (tests/dogApp.e2e.test.ts)

#### ✅ Test 3: Positive E2E Test - Dog Image Retrieved Successfully
Go to the page and wait for response and API call to be finished

**Expectations:**
- ✓ Image has source value
- ✓ Source value starts with `https://`

#### ✅ Test 4: Positive E2E Test - Dog Image Retrieved on Button Click
Wait for response, click button and wait for API call to be finished

**Expectations:**
- ✓ Image has source value
- ✓ Source value starts with `https://`

#### ❌ Test 5: Negative E2E Test - API Call Fails
Set route to abort on call and go to the page

**Expectations:**
- ✓ Page has an element containing word "error" (using regular expression)
- ✓ Element with error text is visible

## 🚀 How to Run Tests

### Option 1: Run All Tests (Recommended)
Playwright will automatically start both the backend and frontend servers:

```bash
npm run test:all
```

### Option 2: Run Tests Separately

**API Tests Only (Tests 1 & 2):**
```bash
npm run test:api
```

**E2E Tests Only (Tests 3, 4 & 5):**
```bash
npm run test:e2e
```

**Run Tests in Browser:**
```bash
npm run test:headed:slow
```

### View Test Report
After running tests, view the detailed HTML report:
```bash
npm run test:report
```

## 📊 Test Results

All 5 assignment tests are **PASSING** ✅

```
Running 5 tests using 5 workers

API Tests (2 tests)
  ✓ Test 1: Positive API test - get random dog image
  ✓ Test 2: Negative API test - invalid route

E2E Tests (3 tests)
  ✓ Test 3: Positive E2E test - dog image retrieved successfully on page load
  ✓ Test 4: Positive E2E test - dog image retrieved when button clicked
  ✓ Test 5: Negative E2E test - API call fails

5 passed (15.3s)
```

## 🔧 Available Commands

| Command | Description |
|---------|-------------|
| `npm run test:all` | Run all tests (API + E2E) |
| `npm run test:api` | Run only API tests (Tests 1 & 2) |
| `npm run test:e2e` | Run only E2E tests (Tests 3, 4 & 5) |
| `npm run test:ui` | Run tests in interactive UI mode |
| `npm run test:report` | Open the HTML test report |

