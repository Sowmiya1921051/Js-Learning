let name="Sowmiya"
let reverse="";
function rString()
{
    for(let i=0;i<name.length;i++)
    {
        reverse=name[i]+reverse
    }
}
rString()
console.log(reverse)