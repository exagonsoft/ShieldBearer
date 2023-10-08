class SimpleTokenHandler {
  constructor() {}

  generateToken(object) {
    const _tokenHeader = this.generateHeader();
    const _tokenBody = this.generateBody(object);
    const _tokenSignature = this.generateSignature();

    const _token = _tokenHeader + "." + _tokenBody + "." + _tokenSignature;

    return _token;
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

  generateHeader() {
    const _objectHeader = { alg: "custom", typ: "JWT" };
    const _stringHeader = JSON.stringify(_objectHeader);
    const _base64Header = btoa(_stringHeader);

    return _base64Header;
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

    return _base64Body;
  }

  generateSignature() {
    const _objectSignature = { signTyp: "Secret Key" };
    const _stringSignature = JSON.stringify(_objectSignature);
    const _base64Signature = btoa(_stringSignature);

    return _base64Signature;
  }

  decodeBody(stringBody) {
    try {
      const _stringBody = atob(stringBody);
      const _objectBody = JSON.parse(_stringBody);

      return _objectBody;
    } catch (error) {
      throw error;
    }
  }

  validateBody(stringBody) {
    try {
      const _stringBody = atob(stringBody);
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

module.exports = SimpleTokenHandler;
