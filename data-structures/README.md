# Data structures, Modern operators and Strings

## Destructuring Arrays

`const [x, y, z] = arr;`

## Destructuring Objects

`const {x: new name, y, z} = arr;`

## The Spread Operator (...)

It's like taking all the elements out of the array, and writing them manually on the new array.
`const newArr = [1,2,...arr];`

## Rest Pattern and Parameters

The rest pattern basically collect the elements that are unused.
`const [a,b,...others] = [1,2,3,4,5];`

## Find method

The differance between filter and find is filter returns array with all the specific elements, while find returns the first element.

## Reduce method

In JavaScript, the reduce() method is used to reduce an array to a single value by applying a function to each element of the array. The reduce() method takes a callback function as its argument and an optional initial value.
`const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((accumulator, currentValue) => {
return accumulator + currentValue;
}, 0);

console.log(sum); // Output: 15
`
