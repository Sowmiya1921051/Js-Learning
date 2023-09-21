function fun() //print first 10 numbers 
{
    let n=10;

    for(let i=1;i<=n;i++)
    {
        console.log(i)
    }
}
fun()



const object= { //object
    name:"Sowmiya",
    age:21
}

console.log("Name : "+object.name +" Age : "+object.age)


const arr=[10,20,35] // average number
let count=0,c=0
for(let i=0;i<arr.length;i++)
{
    count =count+arr[i];
    c++;
    
}
let ans=count%c
console.log("Average : "+ans)
