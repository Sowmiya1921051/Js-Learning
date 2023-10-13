const ps=require("prompt-sync")
const prompt=ps()
const a=2,b=5
let name=prompt("Choose the Calculator: ")
if(name == "+")
{
    console.log("Add : ", a+b)
}
else if(name == "-")
{
    console.log("Sub : a-b")
}
else if(name == "*")
{
    console.log("Mul : ",a*b)
}
else if(name == "%")
{
    console.log("Mod : ",a%b)
}
else
{
    console.log("Div : ",a/b)
}


