const chai = require('chai');
const expect = chai.expect;
const { Sign, Decode, Validate, ValidateRefresh } = require('../index');

describe('Token Handling Functions', () => {
  it('should sign and decode a token correctly', () => {
    const objectValue = { userId: 123, username: 'testuser' };
    const secretKey = 'mySecretKey';

    const signedToken = Sign(objectValue, secretKey);
    expect(signedToken).to.be.an('String')

    const decodedObject = Decode(signedToken, secretKey);
    expect(decodedObject).to.be.an('Object')
    expect(decodedObject).to.contain.keys(['userId', 'username'])
    expect(decodedObject.userId).to.be.equal(123)
    expect(decodedObject.username).to.be.equal('testuser')
  });

  it('should sign and decode a token correctly without secret key', () => {
    const objectValue = { userId: 123, username: 'testuser' };

    const signedToken = Sign(objectValue);
    expect(signedToken).to.be.an('String')

    const decodedObject = Decode(signedToken);
    expect(decodedObject).to.be.an('Object')
    expect(decodedObject).to.contain.keys(['userId', 'username'])
    expect(decodedObject.userId).to.be.equal(123)
    expect(decodedObject.username).to.be.equal('testuser')
  });

  it('should validate a token correctly', () => {
    const objectValue = { userId: 123, username: 'testuser' };
    const secretKey = 'mySecretKey';

    const signedToken = Sign(objectValue, secretKey);
    expect(signedToken).to.be.a('string');

    const isValid = Validate(signedToken, secretKey);
    expect(isValid).to.be.true;
  });

  it('should validate a token correctly without secret key', () => {
    const objectValue = { userId: 123, username: 'testuser' };

    const signedToken = Sign(objectValue);
    expect(signedToken).to.be.a('string');

    const isValid = Validate(signedToken);
    expect(isValid).to.be.true;
  });

  it('should validate a refresh token correctly', () => {
    const objectValue = { userId: 123, username: 'testuser' };
    const secretKey = 'mySecretKey';

    const signedToken = Sign(objectValue, secretKey);
    expect(signedToken).to.be.a('string');

    const isValid = ValidateRefresh(signedToken, secretKey);
    expect(isValid).to.be.true;
  });

  it('should validate a refresh token correctly without secret key', () => {
    const objectValue = { userId: 123, username: 'testuser' };

    const signedToken = Sign(objectValue);
    expect(signedToken).to.be.a('string');

    const isValid = ValidateRefresh(signedToken);
    expect(isValid).to.be.true;
  });

  it('should throw an error if objectValue is not an object', () => {
    const invalidObject = 'not an object';
    const secretKey = 'mySecretKey';

    expect(() => Sign(invalidObject, secretKey)).to.throw('Invalid Object Provided');
  });

  it('should throw an error if signedStringToken is not a string', () => {
    const invalidToken = 123;
    const secretKey = 'mySecretKey';

    expect(() => Decode(invalidToken, secretKey)).to.throw('Invalid String Provided');
    expect(() => Validate(invalidToken, secretKey)).to.throw('Invalid String Provided');
    expect(() => ValidateRefresh(invalidToken, secretKey)).to.throw('Invalid String Provided');
  });
});
