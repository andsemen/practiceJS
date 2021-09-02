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

const evenArrIndex = arr.filter((_, i) => i % 2 === 0);

for (const elem of arr) {
  elem % 2 === 0 ? console.log(elem) : null;
}

arr[12] = 0;
arr[19] = 0;
arr[6] = 0;

//4

class Book {
  constructor(autor, bookTitle, wasWritten, publisher) {
    (this.autor = autor),
      (this.bookTitle = bookTitle),
      (this.wasWritten = wasWritten),
      (this.publisher = publisher);
  }
}

class EBook extends Book {
  constructor(autor, bookTitle, wasWritten, publisher, typeOfBook, eNumber) {
    super(autor, bookTitle, wasWritten, publisher);

    this.typeOfBook = typeOfBook, 
    this.eNumber = eNumber;
  }
}


//5

function fizzBuzz(numb) {
  
  for(let i = 1; i <= numb; i++) {
    if (i % 3 ===0 && i % 5 === 0) {
      console.log('FizzBuzz');
    } else if (i % 3 ===0) {
      console.log('Fizz');
    } else if(i % 5 ===0) {
      console.log('Buzz');
    } else {
      console.log(i);
    }
  }
}

//6

class Students extends student {
  constructor(name,lastName,isMale,contacts,spesialetyInfo,dateOfApplication) {
    super(name,lastName,isMale,contacts,spesialetyInfo)

    this._spesialetyInfo = spesialetyInfo
  }
}