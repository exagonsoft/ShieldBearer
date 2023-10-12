class Validation {
  constructor() {}

  isValidSBT(token) {
    let _result = false;

    if (token) {
      const _sections = token.split(".");
      if (_sections.length == 3) {
        _result = true;
      }
    }

    return _result;
  }
}

module.exports = Validation;
