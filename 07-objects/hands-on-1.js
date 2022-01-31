const prompt = require('prompt-sync')();

let student = {
    firstName:'John',
    lastName:'Smith',
    'age': 19,
    contact:{
      email:'johnsmith@fakeschool.com',
      phoneNumber:{
        'country code':'+65',
        'number': '9919912'
      }
    },
    address: {
      'streetName':'Yishun Ring Road',
      'building': 'Blk 171 #11-221'
    },
    classes:[
      "Computing 101", "Computing 102", "Computing 103"
    ],
    grades:[
      {
        'subject name':'Computing 1',
        'Grade': 85
      },
      {
        'subject name':'Computing 2',
        'grade': 31
      },
      {
        'subject name':'Computing 3',
        'grade': 75
      }
    ],
    nameEmail: function() {
        return this.firstName + " " + this.lastName + " (" + this.contact.email +")"
    }
}

console.log(student.firstName + " " + student.lastName)

console.log(student.age)

console.log(student.contact.phoneNumber['country code'] + " " + student.contact.phoneNumber['number'])

student.age = 21
console.log(student.age)

student.gender = 'male'
// console.log(student)

student.classes.push("Computing 104")
// console.log(student)

let s = student;
s.contact.email = "johnsmith@fakehotmail.com"
console.log(student.contact.email); 

for (let propertyName in student.address) {
    console.log(propertyName," : ", student.address[propertyName])
   }

console.log(student.nameEmail())


let studentDatabase = {
  "A123456":"John Doe",
  "B421123":"Jane Smith",
  "C1231234":"James Bond"
}

let studentId = prompt("Please enter the student ID: ");

if (studentId in studentDatabase) {
  console.log("Student found! Their name is: ", studentDatabase[studentId]);
} else {
  console.log("The student is not found!");
}