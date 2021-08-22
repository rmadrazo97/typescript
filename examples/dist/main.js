"use strict";
console.log('Bitcoin is KING');
// variable types
// number
// explicit:
let phone;
phone = 33866530;
// phone = 'hello' // this is an error
// infered
let phoneNum = 33866530;
// phoneNum = true // this is also an error
let hex = 0x23a; // hexadecimal
let binary = 0b1010; // binary
let ocatl = 0o1537; // octal
// boolean
let isTrue = true;
let isHappy;
isHappy = false;
let isRight = true;
// strings
let creatorName = "Alex";
let creatorTeam = "Real Madrid";
// template string
let creatorTemplate = `
    User info:
    Name: ${creatorName}
    Team: ${creatorTeam}
    isHappy: ${!isHappy}
`;
console.log(creatorTemplate);
// Any, Void and Never types
// any -> dynamic variables or when we do not know which value type will this variable adopt. 
// explicit
let idUser;
idUser = '123';
idUser = 123,
    idUser = 0x134;
//  infered
let otherId;
otherId = '431';
otherId = 431;
console.log('idUser: ', idUser, ' OtherId: ', otherId);
let surprise = 'hello typescript';
const res = surprise.split(" ")[1]; // this could generate error on runtime for this it's not recommended to use 'any' variable types
console.log('res: ', res);
// void type
