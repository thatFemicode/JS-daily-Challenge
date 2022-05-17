// These are the basic types
let num: number = 20;

num = 20;
let character: string = "mean";
let isPublished: boolean = true;
let x: any = false;
// console.log(num, character, isPublished, x);

// The following are called Tuples
let person: [number, string, boolean] = [1, "Brad", true];
// let me = ;
// console.log(person[person.length - 2]);

// Tuples Array
let employees: [number, string][];

employees = [
  [1, "Brad"],
  [2, "John"],
  [3, "Jill"],
];
console.log(employees[0][0]);
// Union
let pid: string | number;
pid = "22";

// Enum
enum Direction1 {
  Up = 1,
  Down,
  Left,
  Right,
}

enum Direction2 {
  Up = "Up",
  Down = "Down",
  Left = "Left",
  Right = "Right",
}

// Objects
type User = {
  id: number;
  name: string;
};

const user: User = {
  id: 1,
  name: "John",
};

// Type Assertion
let cid: any = 1;
// let customerId = <number>cid
let customerId = cid as number;
