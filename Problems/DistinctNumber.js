let arr=[3, 0, 1, 4, 6, 2]

function DNum()
{
    // arr.sort()
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i] ==arr[i+1])
            continue
        console.log(arr[i])
       
    }
   
}
DNum()