
const request = require("supertest");
const app = require("./app");

describe("Classroom API", () => {
  test("GET / returns the application message", async () => {
    const response = await request(app).get("/");

    expect(response.status).toBe(200);
    expect(response.body.message).toBe(
      "Classroom CI/CD Demo"
    );
  });

  test("GET /health returns status ok", async () => {
    const response = await request(app).get("/health");

    expect(response.status).toBe(200);
    expect(response.body.status).toBe("ok");
  });
});
