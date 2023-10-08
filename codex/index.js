class ComplexTokenHandler {
  constructor(secretKey) {
    this.secretKey = secretKey;
  }

  // Basic XOR-based encryption with matrix multiplication and random values
  encrypt(text) {
    let encryptedText = "";
    
    for (let i = 0; i < text.length; i++) {
      const textChar = text.charCodeAt(i);
      const keyChar = this.secretKey.charCodeAt(i % this.secretKey.length);
      const encryptedChar = (textChar + keyChar) % 256; // Assuming ASCII characters (0-255)
      encryptedText += String.fromCharCode(encryptedChar);
    }

    return encryptedText;
  }

  // Basic XOR-based decryption with matrix multiplication and random values
  decrypt(encryptedText) {
    let decryptedText = "";
    for (let i = 0; i < encryptedText.length; i++) {
      const encryptedChar = encryptedText.charCodeAt(i);
      const keyChar = this.secretKey.charCodeAt(i % this.secretKey.length);
      const decryptedChar = (encryptedChar - keyChar + 256) % 256; // Assuming ASCII characters (0-255)
      decryptedText += String.fromCharCode(decryptedChar);
    }
    return decryptedText;
  }

  decodeToken(token) {
    const { _header, _body, _signature } = token.split(".");
    const _decodedObject = this.decodeBody(_body);

    return _decodedObject;
  }

  validateToken(token) {
    const { _header, _body, _signature } = token.split(".");
    const _isValid = this.validateBody(_body);

    return _isValid;
  }

  generateToken(object) {
    const _tokenHeader = this.generateHeader();
    const _tokenBody = this.generateBody(object);
    const _tokenSignature = this.generateSignature();

    const _token = _tokenHeader + "." + _tokenBody + "." + _tokenSignature;

    return _token;
  }

  generateHeader() {
    const _objectHeader = { alg: "custom", typ: "JWT" };
    const _stringHeader = JSON.stringify(_objectHeader);
    const _base64Header = btoa(_stringHeader);
    const _hashHeader = this.encrypt(_base64Header);

    return _hashHeader;
  }

  generateBody(object) {
    // Calculate timestamps for rtt (now + 12h) and tto (now + 24h)
    const now = new Date();
    const rtt = new Date(now.getTime() + 12 * 60 * 60 * 1000);
    const tto = new Date(now.getTime() + 24 * 60 * 60 * 1000);

    const _newObj = {
      ...object,
      rtt: rtt.getTime(),
      tto: tto.getTime(),
    };

    const _stringBody = JSON.stringify(_newObj);
    const _base64Body = btoa(_stringBody);
    const _hashBody = this.encrypt(_base64Body);

    return _hashBody;
  }

  generateSignature() {
    const _objectSignature = { signTyp: "Secret Key" };
    const _stringSignature = JSON.stringify(_objectSignature);
    const _base64Signature = btoa(_stringSignature);
    const _hashSignature = this.encrypt(_base64Signature);

    return _hashSignature;
  }

  decodeBody(stringBody) {
    try {
      const _decodedStringBody = this.decrypt(stringBody);
      const _stringBody = atob(_decodedStringBody);
      const _objectBody = JSON.parse(_stringBody);

      return _objectBody;
    } catch (error) {
      throw error;
    }
  }

  validateBody(stringBody) {
    try {
      const _decodedStringBody = this.decrypt(stringBody);
      const _stringBody = atob(_decodedStringBody);
      const _objectBody = JSON.parse(_stringBody);
      const _tokenTimeOut = _objectBody.tto;
      const currentTimestamp = Date.now();

      if (_tokenTimeOut > currentTimestamp) {
        return true;
      } else {
        return false;
      }
    } catch (error) {
      throw error;
    }
  }
}

module.exports = ComplexTokenHandler;
