//Linaer Search

let arr = [3, 0, 1, 4, 6, 2, 8]

function DNum()
{
    arr.sort()
    let max=arr[arr.length-1]
    for(let i=0;i<=max;i++)
    {
       
        if (!arr.includes(i)) {
            console.log(i)
        }
       
    }
   
}
DNum();



