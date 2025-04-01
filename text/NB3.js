function intervalSum(start, end)
{
    let sum = 0

for (let i=start; i<=end; i++)
    {
        sum += i;
    }
    return sum;
}

console.log(intervalSum(0, 0));
console.log(intervalSum(0, 4));
console.log(intervalSum(0, 100));
console.log(intervalSum(574, 815));
console.log(intervalSum(-50, 50));
console.log(intervalSum(-70, 30));

console.log('------------------------------');


// 1)

for (let i=1; i<11; i++)
{
    console.log(i);
}

console.log('-----------------');


// 2

for (let i=10; i>0; --i)
{
    console.log(i);
}

console.log('-----------------');


// 3

for (let i=0; i<22; i+=2)
{
    console.log(i);
    
}

console.log('-----------------');


// 4

for (let i=22; i<0; i+= 1)
{
    console.log(i);   
}