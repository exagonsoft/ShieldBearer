const ComplexTokenHandler = require("./codex");
const SimpleTokenHandler = require("./plain");
const Validation = require("./validation");
const CustomError = require("./error");

const _validator = new Validation();

module.exports.Sign = (objectValue, secretKey = null) => {
  //Throw an Error if Source is not an Object//
  const _isObject = objectValue instanceof Object;
  if (!_isObject) {
    const _error = new CustomError("Invalid Object Provided", "Invalid Source");
    throw _error;
  }

  //Return Complex Token Using Secret//
  if (secretKey) {
    const _complexToken = new ComplexTokenHandler(secretKey);
    const _signedToken = _complexToken.generateToken(objectValue);
    return _signedToken;
  }

  //Return Simple Token//
  const _simpleToken = new SimpleTokenHandler();
  const _signedToken = _simpleToken.generateToken(objectValue);
  return _signedToken;
};

module.exports.Decode = (signedStringToken, secretKey = null) => {
  //Throw an Error if Source is not an Object//
  const _isString =
    typeof signedStringToken === "string" ||
    signedStringToken instanceof String;
  if (!_isString) {
    const _error = new CustomError("Invalid String Provided", "Invalid Source");
    throw _error;
  }

  if (!_validator.isValidSBT(signedStringToken)) {
    const _error = new CustomError("Invalid String Provided", "Invalid Source");
    throw _error;
  }

  //Return Object using complex Algorithm with secret//
  if (secretKey) {
    const _complexToken = new ComplexTokenHandler(secretKey);
    const _decodedObject = _complexToken.decodeToken(signedStringToken);
    return _decodedObject;
  }

  //Return Object using simple Algorithm//
  const _simpleToken = new SimpleTokenHandler();
  const _decodedObject = _simpleToken.decodeToken(signedStringToken);
  return _decodedObject;
};

module.exports.Validate = (signedStringToken, secretKey = null) => {
  const _isString =
    typeof signedStringToken === "string" ||
    signedStringToken instanceof String;
  if (!_isString) {
    const _error = new CustomError("Invalid String Provided", "Invalid Source");
    throw _error;
  }

  if (!_validator.isValidSBT(signedStringToken)) {
    const _error = new CustomError("Invalid String Provided", "Invalid Source");
    throw _error;
  }

  //Return Object using complex Algorithm with secret//
  if (secretKey) {
    const _complexToken = new ComplexTokenHandler(secretKey);
    const _isValid = _complexToken.validateToken(signedStringToken);
    return _isValid;
  }

  //Return Object using simple Algorithm//
  const _simpleToken = new SimpleTokenHandler();
  const _isValid = _simpleToken.validateToken(signedStringToken);
  return _isValid;
};

module.exports.ValidateRefresh = (signedStringToken, secretKey = null) => {
  //Throw an Error if Source is not an Object//
  const _isString =
    typeof signedStringToken === "string" ||
    signedStringToken instanceof String;
  if (!_isString) {
    const _error = new CustomError("Invalid String Provided", "Invalid Source");
    throw _error;
  }

  if (!_validator.isValidSBT(signedStringToken)) {
    const _error = new CustomError("Invalid String Provided", "Invalid Source");
    throw _error;
  }

  //Return Object using complex Algorithm with secret//
  if (secretKey) {
    const _complexToken = new ComplexTokenHandler(secretKey);
    const _isValid = _complexToken.validateRefreshToken(signedStringToken);
    return _isValid;
  }

  //Return Object using simple Algorithm//
  const _simpleToken = new SimpleTokenHandler();
  const _isValid = _simpleToken.validateRefreshToken(signedStringToken);
  return _isValid;
};
