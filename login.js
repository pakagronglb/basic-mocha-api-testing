import request from 'supertest';
import { expect } from 'chai';

async function login(payload) {
    const response = await request("https://reqres.in")
        .post("/api/login")
        .send(payload)
    return response
}

// Successful Login Test
describe("Login Feature", () => {
    it("Success Login", async () => {
        const payload = { "email": "eve.holt@reqres.in", "password": "cityslicka" };
        const response = await login(payload);
        expect(response.status).to.equal(200);
      });


// Failed Login Test
    it("Failed Login", async () => {
        const payload = { "email": "peter@klaven" };
        const response = await login(payload);
        expect(response.status).to.equal(400);
      });

})