let m = { // defining an object is NOT a scope
    'title':'Manager',
    'first name':"Ah Kow",
    'last-name':'Tan',
    'date_of_birth':'11/11/11',
    salary: 3000,  // the key is 'salary' despite not having quotes around it explictly.
    getSalaryAfterCPF:function() {
        return this.salary * 0.8; // have to use this. if we want to refer to a property within the object
    }
}
// the keys (aka the property name) are always strings

// the dot notation works if the property name is a valid variable name
console.log('m.title =>', m.title); // works 'cos title is a valid variable name
console.log('m.salary =>', m.salary); // works because salary is a valid variable name
console.log('m.date_of_birth =>', m.date_of_birth); // underscores are valid in varibale names
console.log('last-name =>', m['last-name']);
console.log('first name =>', m['first name']);
console.log("Salary after CPF =>", m.getSalaryAfterCPF());