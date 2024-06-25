import * as CryptoJS from 'crypto-js';



export class Encrypt {

  key = "encrypt!135790";

  public encrypt(password: string): string {
    return CryptoJS.AES.encrypt(password, this.key).toString();
  }

  public decrypt(passwordToDecrypt: string): any {
    return CryptoJS.AES.decrypt(passwordToDecrypt, this.key).toString(CryptoJS.enc.Utf8);
  }

}