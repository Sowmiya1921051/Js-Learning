function fun()
{
    let l=5,b=5
    console.log(l*b)//Area of the rectangle
}

fun();

function fun()//odd or even
{
    const n=5;
    if(n%2==0)
    {
        console.log("Even")
    }
    else
    {
        console.log("Odd")
    }
    
}
fun()

function fun() //logical operators 
{

    let a=10,b=20,c=20
    let check1=a>b
    let check2=b==c
    console.log(check1)
    console.log(check2)
    if(check1 && check2)
    {
        console.log("True")
    }
    else 
    {
        console.log("False")
    }

}
fun()