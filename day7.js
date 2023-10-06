//closure a closure in JavaScript is a function that
// "remembers" and can still access variables from the scope in which it was created,
// even after that scope has finished executing. Closures are useful for encapsulating data and behavior and are a key feature in JavaScript for maintaining state and creating private variables.

// function outer()
// {
//    const a="hello 1"
//    console.log(a)
//     function inner()
//     {
//         const b="hello 2";
//         console.log(b)
        
//     }
//     return inner
// }
// let execute = outer()
// execute()

//callback functions

function sum(a,b,callBack)
{
    let ans=a+b
    callBack(ans)
}

function display(ans)
{
    console.log(ans)
}

sum(10,20,display)
