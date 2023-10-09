let fact=1
function factorial(n)
{
    for(let i=1;i<=n;i++)
{
    if (n === 1) {
        return 1;
      } else {
        
        return n * factorial(n - 1);
      }
    }
    console.log(fact)
}

const result = factorial(5);
console.log("Sum of integers from 1 to 5:", result);