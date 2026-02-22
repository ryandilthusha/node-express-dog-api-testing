import { test, expect, vi, beforeEach, afterEach } from "vitest"
import { getDogImage } from "../controllers/dogController"
import * as dogService from "../services/dogService"

// Mock the entire service module
vi.mock("../services/dogService")

const createMockResponse = () => {
  const res: any = {}
  res.status = vi.fn().mockReturnThis()
  res.json = vi.fn()
  return res
}

beforeEach(() => {
  vi.clearAllMocks()
})

afterEach(() => {
  vi.resetAllMocks()
})

/**
 * TEST 3 (Positive)
 * - Mock dogService return value
 * - Expect controller returns { success: true, data: mockedValue }
 */
test("DogController getDogImage returns success true and mocked data", async () => {
    
  const mockedServiceResult = {
    imageUrl: "https://images.dog.ceo/breeds/terrier-welsh/lucy.jpg",
    status: "success",
  }

  // Stub the service function result
  vi.mocked(dogService.getRandomDogImage).mockResolvedValue(mockedServiceResult)

  const req: any = {} // controller usually doesn't need anything from req for this endpoint
  const res = createMockResponse()

  await getDogImage(req, res)

  expect(res.json).toHaveBeenCalledWith({
    success: true,
    data: mockedServiceResult,
  })
})
