import { Encrypt } from "./encrypt";

const encrypt = new Encrypt();

//creo las variables que voy a almacenar

let  dataEncrypted = ''
let  dataDesencrypted = ''

//encripto el string que quiero 
dataEncrypted = encrypt.encrypt('../assets/db/players.json')
//lo muestro
console.log(dataEncrypted) 

//desencripto el string que quiero
dataDesencrypted = encrypt.decrypt(dataEncrypted)
//lo muestro
console.log(dataDesencrypted) 