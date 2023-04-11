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