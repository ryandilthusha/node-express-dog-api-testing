import { test, expect, vi, beforeEach, afterEach } from "vitest"
import request from "supertest"
import { app } from "../index"
import * as dogController from "../controllers/dogController"

// Mock the entire controller module
vi.mock("../controllers/dogController")

beforeEach(() => {
  vi.clearAllMocks()
})

afterEach(() => {
  vi.resetAllMocks()
})

/**
 * TEST 4 (Positive)
 * - Mock controller
 * - Call route
 * - Expect 200
 * - Expect success true
 * - Expect returned imageUrl equals mocked imageUrl
 */
test("GET /api/dogs/random returns mocked controller response", async () => {

  const mockedControllerResponse = {
    success: true,
    data: {
      imageUrl: "https://images.dog.ceo/breeds/stbernard/n02109525_15579.jpg",
      status: "success"
    }
  }

  // Stub controller function
  vi.mocked(dogController.getDogImage).mockImplementation(
    async (req: any, res: any) => {
      return res.status(200).json(mockedControllerResponse)
    }
  )

  const response = await request(app).get("/api/dogs/random")

  expect(response.status).toBe(200)
  expect(response.body.success).toBe(true)
  expect(response.body.data.imageUrl).toBe(
    mockedControllerResponse.data.imageUrl
  )
})

/**
 * TEST 5 (Negative)
 * - Mock controller to return 500 error
 * - Call route
 * - Expect 500
 * - Expect success false
 * - Expect error message
 */
test("GET /api/dogs/random returns 500 when controller fails", async () => {

  const mockedErrorResponse = {
    success: false,
    error: "Failed to fetch dog image: Network error"
  }

  // Mock controller to return 500
  vi.mocked(dogController.getDogImage).mockImplementation(
    async (req: any, res: any) => {
      return res.status(500).json(mockedErrorResponse)
    }
  )

  const response = await request(app).get("/api/dogs/random")

  expect(response.status).toBe(500)
  expect(response.body.success).toBe(false)
  expect(response.body.error).toBe(
    "Failed to fetch dog image: Network error"
  )
})
