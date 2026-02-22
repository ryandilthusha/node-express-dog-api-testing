import { test, expect } from "vitest"
import request from "supertest"
import { app } from "../index"

test("GET /api/dogs/random returns success and data.imageUrl", async () => {
  const response = await request(app).get("/api/dogs/random")

  expect(response.status).toBe(200)
  expect(response.body).toHaveProperty("success", true)
  expect(response.body).toHaveProperty("data")
  expect(response.body.data).toHaveProperty("imageUrl")
  expect(typeof response.body.data.imageUrl).toBe("string")
})

/**
 * Negative Test Case
 * - Call invalid endpoint
 * - Expect 404
 */
test("GET /api/dogs/invalid returns 404 for non-existent route", async () => {
  const response = await request(app).get("/api/dogs/invalid")

  expect(response.status).toBe(404)
  expect(response.body).toHaveProperty("success", false)
  expect(response.body).toHaveProperty("error", "Route not found")
})


// I have done this part as fun
// Needed to test my skills that I gained through last walkthrough ;)