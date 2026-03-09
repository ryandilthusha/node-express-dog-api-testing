import { test, expect } from '@playwright/test';

/**
 * E2E Tests for Dog API Application
 */

test.describe('Dog App E2E Tests', () => {
  
  /**
   * TEST 3: Create positive E2E test with Playwright
   * 
   * Test verifies that dog image is retrieved successfully when page is loaded.
   * Go to the page and wait for response and API call to be finished.
   * 
   * Expect that:
   * - Image has source value
   * - Source value starts with https://
   */
  test('Test 3: Positive E2E test - dog image retrieved successfully on page load', async ({ page }) => {
    // Navigate to the page and wait for the API call
    await page.goto('http://localhost:5173');
    
    // Wait for the API response to complete
    await page.waitForResponse(response => 
      response.url().includes('/api/dogs/random') && response.status() === 200
    );
    
    // Wait for the image to be loaded
    const dogImage = page.locator('img.dog-image');
    await dogImage.waitFor({ state: 'visible' });
    
    // Expect image has source value
    const imgSrc = await dogImage.getAttribute('src');
    expect(imgSrc).toBeTruthy();
    expect(imgSrc).not.toBeNull();
    
    // Expect source value starts with https://
    expect(imgSrc).toMatch(/^https:\/\//);
  });

  /**
   * TEST 4: Create another positive E2E test with Playwright
   * 
   * Test verifies that dog image is retrieved successfully when button is clicked.
   * Wait for response, click button and wait for API call to be finished.
   * 
   * Expect that:
   * - Image has source value
   * - Source value starts with https://
   */
  test('Test 4: Positive E2E test - dog image retrieved when button clicked', async ({ page }) => {
    // Navigate to the page and wait for initial load
    await page.goto('http://localhost:5173');
    
    // Wait for the first API response to complete
    await page.waitForResponse(response => 
      response.url().includes('/api/dogs/random') && response.status() === 200
    );
    
    // Set up promise to wait for next API response before clicking
    const responsePromise = page.waitForResponse(response => 
      response.url().includes('/api/dogs/random') && response.status() === 200
    );
    
    // Click the button to get another dog
    await page.getByRole('button', { name: /get another dog/i }).click();
    
    // Wait for the API call to finish
    await responsePromise;
    
    // Wait for the image to be loaded
    const dogImage = page.locator('img.dog-image');
    await dogImage.waitFor({ state: 'visible' });
    
    // Expect image has source value
    const imgSrc = await dogImage.getAttribute('src');
    expect(imgSrc).toBeTruthy();
    expect(imgSrc).not.toBeNull();
    
    // Expect source value starts with https://
    expect(imgSrc).toMatch(/^https:\/\//);
  });

  /**
   * TEST 5: Create negative E2E test with Playwright
   * 
   * Test verifies correct behaviour when API call fails.
   * Set route to abort on call and go to the page.
   * Page does not show any alerts for errors.
   * Check implementation how errors are displayed.
   * 
   * Expect that:
   * - Page has an element containing word error (use regular expression)
   * - Element with error text is visible
   */
  test('Test 5: Negative E2E test - API call fails', async ({ page }) => {
    // Abort the API call to simulate failure
    await page.route('**/api/dogs/random', route => route.abort());
    
    // Navigate to the page
    await page.goto('http://localhost:5173');
    
    // Wait a moment for the error to appear
    await page.waitForTimeout(1000);
    
    // Expect page has an element containing word "error" (case-insensitive)
    const errorElement = page.locator('text=/error/i');
    await expect(errorElement).toBeVisible();
    
    // Verify the error element is actually visible
    const isVisible = await errorElement.isVisible();
    expect(isVisible).toBe(true);
  });
});
