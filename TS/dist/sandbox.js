"use strict";
// These are the basic types
let num = 20;
num = 20;
let character = "mean";
let isPublished = true;
let x = false;
// console.log(num, character, isPublished, x);
// The following are called Tuples
let person = [1, "Brad", true];
// let me = ;
// console.log(person[person.length - 2]);
// Tuples Array
let employees;
employees = [
    [1, "Brad"],
    [2, "John"],
    [3, "Jill"],
];
console.log(employees[0][0]);
// Union
let pid;
pid = "22";
// Enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 1] = "Up";
    Direction1[Direction1["Down"] = 2] = "Down";
    Direction1[Direction1["Left"] = 3] = "Left";
    Direction1[Direction1["Right"] = 4] = "Right";
})(Direction1 || (Direction1 = {}));
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
const user = {
    id: 1,
    name: "John",
};
// Type Assertion
let cid = 1;
// let customerId = <number>cid
let customerId = cid;
