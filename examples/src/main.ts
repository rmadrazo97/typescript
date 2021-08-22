console.log('Bitcoin is KING');

// variable types

// number
// explicit:
let phone: number;
phone = 33866530;
// phone = 'hello' // this is an error

// infered
let phoneNum = 33866530;
// phoneNum = true // this is also an error

let hex: number = 0x23a; // hexadecimal
let binary: number = 0b1010;  // binary
let ocatl: number = 0o1537; // octal

// boolean
let isTrue: boolean = true;
let isHappy: boolean;
isHappy = false;
let isRight = true;

// strings
let creatorName: string = "Alex";
let creatorTeam = "Real Madrid";

// template string
let creatorTemplate: string = `
    User info:
    Name: ${creatorName}
    Team: ${creatorTeam}
    isHappy: ${!isHappy}
`;

console.log(creatorTemplate);

// Any, Void and Never types
// any -> dynamic variables or when we do not know which value type will this variable adopt. 

// explicit
 let idUser: any;
 idUser = '123';
 idUser = 123,
 idUser = 0x134;

//  infered
let otherId;
otherId = '431';
otherId = 431;

console.log('idUser: ',idUser, ' OtherId: ',otherId);

let surprise: any = 'hello typescript';
const res = surprise.split(" ")[1]; // this could generate error on runtime for this it's not recommended to use 'any' variable types
console.log('res: ',res);

// void type