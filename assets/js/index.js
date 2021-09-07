"use strict";

//1
function calcN(numb) {
  let result = numb;

  if (numb > 1) {
    result += calcN(numb - 1);
  }
  return result;
}

//another solution
function calcSumN(numb) {
  let result = 0;

  for (let i = 0; i <= numb; i++) {
    result += i;
  }
  return result;
}

//2
const university = {
  faculty: "International Relations",
  department: "special language training",
};

const student = {
  name: "Ivan",
  lastName: "Ivanov",
  isMale: true,
  contacts: {
    phoneNumber: 80971671741,
    email: "ivanov@gmail.com",
    adrress: "221B Baker street ",
  },
  spesialetyInfo: university,

  studentInfo() {
    const {
      name,
      lastName,
      contacts: { phoneNumber, email, adrress },
      spesialetyInfo: { faculty, department },
    } = this;

    console.log(`Name: ${name}  
    Last name: ${lastName}
    contacts: ${phoneNumber}  ${email}, ${adrress}
    studing info: ${faculty}, ${department} `);
  },
};

//3

const arr = new Array(25).fill(null).map((_, i) => i + 7);

//3.2
const evenArrIndex = arr.filter((_, i) => i % 2 === 0);

//3.3
for (const elem of arr) {
  elem % 2 === 0 ? console.log(elem) : null;
}

//3.4
arr[12] = 0;
arr[19] = 0;
arr[6] = 0;

const zeroElemIndex = arr.map((elem, index) => 
 elem === 0 ? index : undefined).filter(Boolean);

//3.5
const zeroElem = arr.filter((elem) => elem === 0);
console.log(zeroElem.length);

//4

class Book {
  constructor(autor, bookTitle, wasWritten, publisher) {
    this.autor = autor,
    this.bookTitle = bookTitle,
    this.wasWritten = wasWritten,
    this.publisher = publisher;
  }
}

class EBook extends Book {
  constructor(autor, bookTitle, wasWritten, publisher, typeOfBook, eNumber) {
    super(autor, bookTitle, wasWritten, publisher);

    this.typeOfBook = typeOfBook; 
    this.eNumber = eNumber;
  }
}

//5

function fizzBuzz(numb) {
  for (let i = 1; i <= numb; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

//6

class Student {
  constructor(name, lastName, isMale, contacts, dateOfApplication = new Date()) {
    this.name = name;
    this.lastName = lastName;
    this.isMale = isMale;
    this.contacts = contacts;
    this.dateOfApplication = dateOfApplication;
  }

  set name(text) {
    if (typeof text !== "string") {
      throw new TypeError("Invalid type");
    }
    if (text.trim() === "") {
      throw new Error("Name must not to be empty");
    }

    this._name = text;
  }

  get name() {
    return this._name;
  }

  set lastName(text) {
    if (typeof text !== "string") {
      throw new TypeError("Invalid type");
    }
    if (text.trim() === "") {
      throw new Error("Last Name must not to be empty");
    }

    this._lastname = text;
  }

  get lastName() {
    return this._lastname;
  }

  set isMale(text) {
    if (typeof text !== "boolean") {
      throw new TypeError("Invalid Type");
    }

    this._isMale = text;
  }

  get isMale() {
    return this._isMale;
  }

  set contacts(numb) {
    if (isNaN(numb) || typeof numb !== "number") {
      throw new TypeError("Invalid Type");
    }

    this._contacts = numb;
  }

  get contacts() {
    return this._contacts;
  }

  set dateOfApplication(str) {
    const date = new Date(str);
    const today = new Date()
if (today.getFullYear()-date.getFullYear()  > 5) {
  throw new Error('Too old bro')
}

  this._dateOfApplication = date;

  }

  get dateOfApplication() {
    return this._dateOfApplication
  }

  get course() {
    const thisYear = new Date();

    return thisYear.getFullYear() - this._dateOfApplication.getFullYear();
  }
}