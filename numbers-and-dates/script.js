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

// Rounding integers

console.log(Math.round(23.3)); // Rounds to the nearest integer ->23
console.log(Math.round(23.9)); // Rounds to the nearest integer ->24

console.log(Math.ceil(23.3)); // Rounds up  ->24
console.log(Math.ceil(23.9)); // Rounds up  ->24

console.log(Math.floor("23.9")); // Rounds down  ->23
console.log(Math.floor(-23.9)); // Rounds up  ->-23
console.log(Math.trunc(-23.9)); // Rounds up  ->-24

// Rounding decimals
console.log((2.7).toFixed(0)); // toFixed returns a string and not a number
console.log((2.7).toFixed(3)); // Will add zeroes to get 3 decimal parts ->2.700
console.log(+(2.7).toFixed(3)); // Will add zeroes to get 3 decimal parts ->2.700 (Number returns)

// The remainder operator
console.log(5 % 2); // -> 1
console.log(5 / 2); // -> 2.5

const isEven = (n) => n % 2 === 0;
console.log(isEven(8)); // True
console.log(isEven(23)); // False

// Numeric separators
const diameter = 287_460_000_000; // We need it to look 287,460,000,000, _ is the solution
console.log(diameter); // -> The engine basically ignores the underscores

// Working with BigInt
console.log(2 ** 53 - 1);
console.log(Number.MAX_SAFE_INTEGER); // Same as line 48 output
console.log(BigInt(123123123123));
console.log(20n > 15); // True
console.log(11n / 3n); // 3n
console.log(20n == "20"); // True

// Creating Dates
const now = new Date();
console.log(now);
console.log(new Date(0));
console.log(new Date(3 * 24 * 60 * 60 * 1000)); // 3Days later

// Working with dates
const future = new Date(2037, 10, 19, 15, 23);
console.log(future.getFullYear());
console.log(future.getMonth());
console.log(future.getDay());
console.log(future.getHours());
console.log(future.getMinutes());
console.log(future.getSeconds());
console.log(future.toISOString());

console.log(future.getTime());
future.setFullYear(2040);
