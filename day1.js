function greet() {
    const arr=[3,6,4,2,1];
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i]>arr[i+1])
        {
            console.log("The largest number is: "+arr[i]);
            break;
        }
    }
    
  }
  
  greet(); 
  