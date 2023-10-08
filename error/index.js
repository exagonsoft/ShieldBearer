class CustomError extends Error {
  constructor(message, type) {
    super(message);
    this.name = type; // Optional: specify the error name
  }
}

module.exports = CustomError;
