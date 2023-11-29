const request = require("supertest");
const mongoose = require("mongoose");
const app = require("../app"); // Import your Node.js app
const dotenv = require("dotenv");

dotenv.config({ path: "../config.env" });
const {
  db: { stringConnect },
} = require("../configs/config.mongodb");

beforeAll(async () => {
  await mongoose.connect(stringConnect, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  });
});
describe("Get API ChuongHoc", () => {
  it("should return 200 OK for GET /api/v1/chuonghoc", async () => {
    console.log(request(app));
    const response = await request(app).get("/api/v1/chuonghoc");

    console.log({ response });
    expect(response.statusCode).toBe(200);
  });
});
describe("Get API BaiHoc", () => {
  it("should return 200 OK for GET /api/v1/baihoc", async () => {
    const response = await request(app).get("/api/v1/baihoc");
    expect(response.statusCode).toBe(200);
  });
});
describe("Get API PhanLoai", () => {
  it("should return 200 OK for GET /api/v1/phanloai", async () => {
    const response = await request(app).get("/api/v1/phanloai");
    expect(response.statusCode).toBe(200);
  });
});
describe("Get API PhanMuc", () => {
  it("should return 200 OK for GET /api/v1/phanmuc", async () => {
    const response = await request(app).get("/api/v1/phanmuc");
    expect(response.statusCode).toBe(200);
  });
});

afterAll(async () => {
  await mongoose.connection.close();
});
