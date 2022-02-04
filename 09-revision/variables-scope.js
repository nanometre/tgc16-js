/*
What is a scope?
It's the curly braces that comes about when we use the following:
- if..else
- for
- while
- function
- abritrary { } (but not objects)

some exceptions:
- object defintion
- const { ... } = require(...)

*/

// to create a variable, we use either let or const (never var) 
// 1. the variable belongs to the scope it is created in
// (btw, the topmost scope, which is the javascript file itself, is known as the global scope)
let x = 42;  // x belongs to the global scope
{
    console.log("Scope A:")
    console.log('x =>', x); // ==> 42 (because scope cascades down)
                    // there's no other x variable being defined (i.e let x = ???)
}
{
    console.log("Scope B")
    let x = 44;  // this variable is defined in scope B
    console.log("x => ", x); // JavaScript will use the variable in the closest scope possible
                             // technical term: variable hiding (the local variable hides the more indirect one)

    {
        console.log("Scope C:")
        console.log("x =>", x)
    }
}
{
    {
        {
            {
                console.log("Scope D:");
                console.log("x =>", x);
            }
        }
    }
}
// scope Z
{
    {
        console.log("Z1")
        let y = 3;
        console.log("Z1's y =>", y);
    }
    {
        console.log("Z2")
        let y = 10;
        console.log("Z2's y =>", y);
    }
    {   
        console.log("Z3")
        console.log("Z3's y=>",y); 
        
    }
}

console.log("Global x =>", x);