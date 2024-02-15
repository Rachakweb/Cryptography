//Cryptography
//Using build_in crypto module
//HASH
const { log } = require('console');
const {createHash}=require('crypto');

//Create a string hash
function hash(input){
    return createHash('sha256').update(input).digest('hex');//Secure hash Alogrithm 2 || Return 256-bit Digest
}
//Compare two hashed passwords
let password = 'hi-hello!';
const hash1 = hash(password);
console.log(hash1);
//

password='hi-hello!';
const hash2=hash(password);
const match = hash1===hash2;
console.log(match ? 'good password':'password does not match');