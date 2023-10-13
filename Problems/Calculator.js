const ps=require("prompt-sync")
const prompt=ps()
let details = "Select operation: \n 1.Addition \n 2.Subtraction \n 3.Multiplication \n 4.Division"
console.log(details)
let Choose=prompt("Enter choice (1/2/3/4): ")
const a = parseFloat(prompt("Enter first number: "));
const b = parseFloat(prompt("Enter second number: ")); 
if(Choose == 1)
{
    console.log(a ," + ", b ," = ",a+b)
  
}
else if(Choose == 2)
{
    console.log(a ," - ", b ," = ",a-b)
}
else if(Choose== 3)
{
    console.log(a ," * ", b ," = ",a*b)
}
else
{
   if(b==0)
   {
    console.log("Cannot divide by zero")
   }
   else{
    console.log(a ," / ", b ," = ",a/b)
   }
}


