let n="The quick brown fox jumped over the lazy dog".split(" ")
let r=""
let count=0;
function lWord()
{
    for(let i=0;i<n.length;i++)
    {
       if(n[i].length > count)
       {
            count=n[i].length
            r=n[i]
           
       }
        
    }
    console.log(r)
 
}
lWord()

