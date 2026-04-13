server.js

const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello CI/CD World");
});

module.exports = app;

test/server.test.js

const request = require("supertest");
const app = require("../server");

describe("GET /", () => {
  it("should return Hello CI/CD World", async() =>
    const res = await request(app).get("/");
    expect(res.text).toBe("Hello CI/CD World");
    expect(res.statusCode).toBe(200);
  });
});

