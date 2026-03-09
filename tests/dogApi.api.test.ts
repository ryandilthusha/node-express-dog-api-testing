import { test, expect } from '@playwright/test';

/**
 * API Tests for Dog API
 */

test.describe('Dog API Tests', () => {
  
  /**
   * TEST 1: Create positive API test that calls API to get random dog image
   * 
   * Make GET call with request calling /api/dogs/random
   * Expect that:
   * - returned HTTP status is 200
   * - success is true
   * - data is returned
   * - data contains imageUrl
   * - type of imageUrl is string
   */
  test('Test 1: Positive API test - get random dog image', async ({ request }) => {
    // Make GET request to /api/dogs/random
    const response = await request.get('/api/dogs/random');
    
    // Expect returned HTTP status is 200
    expect(response.status()).toBe(200);
    
    // Parse JSON response
    const json = await response.json();
    
    // Expect success is true
    expect(json.success).toBe(true);
    
    // Expect data is returned
    expect(json.data).toBeDefined();
    expect(json.data).not.toBeNull();
    
    // Expect data contains imageUrl
    expect(json.data).toHaveProperty('imageUrl');
    
    // Expect type of imageUrl is string
    expect(typeof json.data.imageUrl).toBe('string');
  });

  /**
   * TEST 2: Create negative test for invalid route
   * 
   * Make GET request with invalid url (e.g. /api/dogs/invalid)
   * Expect that:
   * - returned HTTP status is 404
   * - returned response contains error message
   * - verify that returned error message is correct
   */
  test('Test 2: Negative API test - invalid route', async ({ request }) => {
    // Make GET request to invalid endpoint
    const response = await request.get('/api/dogs/invalid');
    
    // Expect returned HTTP status is 404
    expect(response.status()).toBe(404);
    
    // Parse JSON response
    const json = await response.json();
    
    // Expect returned response contains error message
    expect(json.error).toBeDefined();
    
    // Verify that returned error message is correct (check implementation)
    expect(json.error).toBe('Route not found');
  });
});
