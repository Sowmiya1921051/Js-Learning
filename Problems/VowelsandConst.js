const name="Sowmiya"
let vowels=0
let consonant=0
function count()
{
    for(let i=0;i<name.length;i++)
    {
        if(name[i]=='a' || name[i]=='e' || name[i]=='i' || name[i]=='o' || name[i]=='u')
        {
            vowels++
        }
        else{
            consonant++
        }
       
    }
    console.log("vowels : ",vowels)
    console.log("consonant",consonant)
}
count()