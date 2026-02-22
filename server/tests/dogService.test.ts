import { expect, vi, beforeEach, afterEach, test } from 'vitest';
import { getRandomDogImage } from '../services/dogService';


// Setup: mock fetch before each test
beforeEach(() => {
    global.fetch = vi.fn();
});

// Cleanup after each test
afterEach(() => {
    vi.clearAllMocks();
    vi.restoreAllMocks();
});



/* 
    * TEST 1 (Positive)
    * - imageUrl equals mocked message
    * - returned status is "success"
    * - fetch called once
*/
test('DogService returns imageUrl and success when API call succeeds', async () => {

    const mockApiData = {
        message: 'https://images.dog.ceo/breeds/hound-afghan/n02088094_1003.jpg',
        status: 'success'
    };

    vi.mocked(fetch).mockResolvedValueOnce({
        ok: true,
        json: async () => mockApiData
    } as Response);

    const result = await getRandomDogImage();

    expect(result.imageUrl).toBe(mockApiData.message);
    expect(result.status).toBe(mockApiData.status);
    expect(fetch).toHaveBeenCalledTimes(1);
});



/*
    * TEST 2 (Negative)
    * - fetch throws an error
    * - returned status is "error"
    * - imageUrl is empty string
*/
test('DogService returns error status and empty imageUrl when API call fails', async () => {

    vi.mocked(fetch).mockResolvedValue({
        ok: false,
        status:500} as Response);

    await expect(getRandomDogImage()).rejects.toThrow("Dog API returned status 500");
});
