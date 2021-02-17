var factorial;
var n = 5;

for(i = n; i > 0; i--)
{
    if(i == n)
    {
        factorial = i;
    }

    else 
    {
        factorial *= i;
    }
}

console.log(factorial);