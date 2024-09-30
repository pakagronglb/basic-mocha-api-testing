# API Testing with Mocha, Chai, and Supertest

This project demonstrates the very basic of **API testing** using Mocha, Chai, and Supertest. The goal is to test login functionality by verifying success and failure cases using POST requests. The testing framework ensures that the login feature behaves as expected. 

## Project Structure

The basic structure of the project is as follows:

```bash
api-testing-mocha-chai/
│
├── .gitignore
├── LICENSE
├── login.js  # Contains the test cases
├── package.json  # Project dependencies and test scripts
└── README.md  # Project documentation
```

## How It Works

The API tests are structured to test the login functionality using predefined user credentials:

1. **Success Login Test:**
   - Sends a valid user login request with correct credentials.
   - Asserts that the response status code is `200 OK`, indicating a successful login.
   
2. **Failed Login Test:**
   - Sends a login request with incorrect credentials.
   - Asserts that the response status code is `400 Bad Request`, showing that the login attempt was unsuccessful.

## Setup Instructions

1. Clone the repository.
2. Run `npm install` to install the required dependencies:
   - **Mocha**: JavaScript test framework for Node.js programs.
   - **Chai**: Assertion library for BDD and TDD testing.
   - **Supertest**: A library for testing HTTP APIs.

```bash
npm install
```

## Running the Tests

To run the API tests, execute the following command in your terminal:

```bash
npm test
```

This will trigger Mocha, which will run the tests defined in `login.js`.

## Test Logic

### Login Function
The `login()` function in `login.js` is responsible for sending POST requests to the login API. It uses **Supertest** to send requests and **Chai** to make assertions on the returned status code.

```javascript
async function login(payload) {
  const response = await request('https://reqres.in')
    .post('/api/login')
    .send(payload);
  return response;
}
```

### Test Cases

1. **Successful Login Test:**

   The first test sends the correct credentials to the API and expects a `200` status in return:

   ```javascript
   it("Success Login", async () => {
     const payload = { "email": "eve.holt@reqres.in", "password": "cityslicka" };
     const response = await login(payload);
     expect(response.status).to.equal(200);
   });
   ```

2. **Failed Login Test:**

   The second test sends incorrect login details and expects a `400` status:

   ```javascript
   it("Failed Login", async () => {
     const payload = { "email": "peter@klaven" };
     const response = await login(payload);
     expect(response.status).to.equal(400);
   });
   ```

## Debugging Process

I encountered a few issues during implementation, such as incorrect payloads and wrong API endpoints, which required multiple debugging steps. After fixing the issues with request format and endpoint handling, the tests passed successfully.

## Credits

This project is inspired by a blog post by **[Cofiali53](https://medium.com/@cofiali53/automation-api-testing-in-javascript-using-mocha-chai-and-supertest-a-beginners-guide-47e317e04501)**, who provided the foundation for understanding how to implement API testing in JavaScript using Mocha, Chai, and Supertest.

## Resources
- https://reqres.in/
- https://www.postman.com/
----
 
