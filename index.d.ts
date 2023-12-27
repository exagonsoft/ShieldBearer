declare module 'shieldbearer' {
  export class CustomError {
    constructor(message: any, code: any);
  }

  export class Validation {
    isValidSBT(token: any): boolean;
  }

  export class ComplexTokenHandler {
    constructor(secretKey: any);
    generateToken(objectValue: any): any;
    decodeToken(signedStringToken: any): any;
    validateToken(signedStringToken: any): boolean;
    validateRefreshToken(signedStringToken: any): boolean;
  }

  export class SimpleTokenHandler {
    generateToken(objectValue: any): any;
    decodeToken(signedStringToken: any): any;
    validateToken(signedStringToken: any): any;
    validateRefreshToken(signedStringToken: any): any;
  }

  export function Sign(objectValue: any, secretKey?: any): any;
  export function Decode(signedStringToken: any, secretKey?: any): any;
  export function Validate(signedStringToken: any, secretKey?: any): boolean;
  export function ValidateRefresh(signedStringToken: any, secretKey?: any): boolean;
}
