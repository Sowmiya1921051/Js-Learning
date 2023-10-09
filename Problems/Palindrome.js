let name="A man a plan a canal Panama".replace(/\s+/g, "").toLowerCase();
let p=name;
let check="";
for(let i=0;i<name.length;i++)
{
    check = name[i] + check
   
}
if(check ==p)
{
    console.log("Palindrome")
}
else{
    console.log("Not palindrome")
}