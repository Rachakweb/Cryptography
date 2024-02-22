//Hash-Bashed Message Authentication Code
const { log } = require('console');
const {createHmac}=require('crypto');

const key='super-secreat!';
const message='hellow';

const hmac= createHmac('sha256',key).update(message).digest('hex');

console.log(hmac);

const key2 = 'other-password';
const hmac2= createHmac('sha256', key2).update(message).digest('hex');

console.log(hmac2);

