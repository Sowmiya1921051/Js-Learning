let arr=["apple", "banana", "apple", "cherry", "banana"]

let sol=[];

function dValues()
{
    
    for(let i=0;i<arr.length;i++)
    {
        for(let j=i+1;j<arr.length;j++)
        {
            if(arr[i]===arr[j])
            {
                continue
            }
            if(!sol.includes(arr[i]))
            {
                sol.push(arr[i])
            }
        }
       
    }
    console.log(sol)
   
}
dValues()




//Using int 
// let arr=[1, 2, 2, 3, 4, 4, 5] 
// let sol=[];

// function dValues()
// {
    
//     for(let i=0;i<arr.length;i++)
//     {
//         if(arr[i]==(arr[i+1]))
//         {
//             continue
//         }
//         sol.push(arr[i])
//     }
//     console.log(sol)

   
// }
// dValues()





