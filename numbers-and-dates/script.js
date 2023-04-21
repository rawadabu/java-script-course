console.log(23 === 23.0);
console.log(0.1 + 0.2);

// Conversion
console.log(+"23");
console.log(Number("23"));

// Parsing
console.log(Number.parseInt("30px")); // JS tries to figure out the number that is in this string
console.log(Number.parseInt("e23")); // Not gonna work, output => NaN

console.log(Number.parseFloat("2.5rem"));

console.log(Number.isNaN(20));
console.log(Number.isFinite(20));
console.log(Number.isInteger(20));
