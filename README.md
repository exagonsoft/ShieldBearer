 <link rel="stylesheet" href="./styles/styles.css">
 <div class="logo-container">
    <img src="./pictures/logo.png" alt="SHIELDBEARER" width=200px class="logo" />
  </div>

# ShieldBearer

![npm](https://img.shields.io/npm/v/shieldbearer?style=flat&logo=NPM&logoColor=red)
[![npm downloads](https://img.shields.io/npm/dm/shieldbearer.svg)](https://www.npmjs.com/package/shieldbearer)
![GitHub last commit (branch)](https://img.shields.io/github/last-commit/exagonsoft/ShieldBearer/main?style=flat&logo=github&logoColor=red)
![GitHub (Pre-)Release Date](https://img.shields.io/github/release-date-pre/exagonsoft/ShieldBearer?style=flat&logo=jira&logoColor=yellow)
![Codecov branch](https://img.shields.io/codecov/c/github/exagonsoft/ShieldBearer/main?style=flat&logo=codecov&logoColor=red)
[![Codacy Badge](https://app.codacy.com/project/badge/Grade/b5fd0f45b22f4a4f9e9c69015089556c)](https://app.codacy.com/gh/exagonsoft/ShieldBearer/dashboard?utm_source=gh&utm_medium=referral&utm_content=&utm_campaign=Badge_grade)
![GitHub](https://img.shields.io/github/license/exagonsoft/ShieldBearer?style=flat&logo=Medium&logoColor=green)

ShieldBearer is a cutting-edge npm package meticulously crafted to simplify JSON Web Token (JWT) operations in JavaScript projects. This library stands out by not relying on any external libraries or tools, ensuring a lightweight and efficient solution for secure token handling. ShieldBearer empowers developers to seamlessly sign, decode, and validate JWTs, enhancing the security and reliability of applications.

## Benefits

-  **Zero Dependencies:** ShieldBearer doesn't rely on any external libraries or tools, providing a pure and lightweight JWT solution.
-  **Efficient Token Operations:** Sign, decode, and validate JWTs with ease, ensuring secure data transmission and authentication.
-  **Enhanced Security:** Utilize robust encryption techniques to safeguard sensitive data, bolstering the overall security of your applications.
-  **Developer-Friendly API:** ShieldBearer offers an intuitive and developer-friendly interface, allowing for seamless integration and usage.
-  **Transparent Codebase:** Explore a well-documented and transparent codebase, enabling developers to understand and customize the library to fit their needs.

## Installation

Install ShieldBearer via npm:

```bash
npm install shieldbearer
```

  <br />

## Usage

-  Require ShieldBearer in your JavaScript file and start harnessing the power of secure JWT operations:

```bash
const shieldbearer = require('shieldbearer');

// Sign a JWT
const token = shieldbearer.sign({ userId: 123 });

// Decode a JWT
const decodedData = shieldbearer.decode(token);

// Validate a JWT
const isValid = shieldbearer.validate(token);

```

<br />

## Example

-  Here's a basic example of signing, decoding, and validating a JWT using ShieldBearer.

```javascript
const shieldbearer = require("shieldbearer");

// Sign a JWT
const token = shieldbearer.sign({ userId: 123 });

// Decode the JWT
const decodedData = shieldbearer.decode(token);
console.log(decodedData); // Output: { userId: 123 }

// Validate the JWT
const isValid = shieldbearer.validate(token);
console.log(isValid); // Output: true
```

<br />

## Improved Security

-  You are also able to improve token security by using a secret key to perform operations.

```text
- The secret key works like an ssh encryption, you most have the same secret in both points to ensure success.
```

```javascript
const shieldbearer = require("shieldbearer");

// Sign a JWT
const token = shieldbearer.sign({ userId: 123 }, "secretKey");

// Decode the JWT
const decodedData = shieldbearer.decode(token, "secretKey");
console.log(decodedData); // Output: { userId: 123 }

// Validate the JWT
const isValid = shieldbearer.validate(token, "secretKey");
console.log(isValid); // Output: true
```

## Contributing

-  Contributions are welcome! For bug reports or feature requests, please submit an issue or make a pull request. For more information, check out our contribution guidelines.


