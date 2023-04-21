"use strict";
// Object

const weekDays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

const openingHours = {
  [weekDays[3]]: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // 24 Hours Open
    close: 24,
  },
};

const resturant = {
  name: "Classico Italiano",
  location: "Via Angelo, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegeterian", "Organic"],
  starterMenu: ["Foccacia", "Bruscetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  // ES6 enhanced object literals
  openingHours,

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({ starterIndex, mainIndex, time, address }) {
    console.log(`Order recevied! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will
        be delivered too ${address} at ${time}.`);
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is you delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },
};

resturant.orderDelivery({
  time: "22:30",
  address: "Via del sole,21",
  mainIndex: 2,
  starterIndex: 2,
});

const { name, openinghours, categories } = resturant;
console.log(name, openingHours, categories);
const {
  name: resturantName,
  openingHours: hours,
  categories: tags,
} = resturant;
console.log(resturantName, hours, tags);

// Default values
// const {menu = [], starterMenu: starters = []} = resturant; // Setting defaults

// Spread Operator ...
// const arr = [7,8,9];
// const badNewArr = [1,2,arr[0], arr[1], arr[2]];
// console.log(badNewArr);

// const newArr = [1,2,...arr]; // Expand this array with the new arr.

// const newMenu = [...resturant.mainMenu, 'Gnocci'];

// Rest Pattern
// const arr = [1,2,...[3,4]];
// console.log(arr);

// const [a,b,...others] = [1,2,3,4,5];
// console.log(a,b,others);

// const ingredients = [prompt("Let\'s make Pasta! Ingredient 1?")];
// Mutating variables
//let a = 111;
// let b = 999;
// const obj = {a: 23, b: 11, c:14};
// ({a,b} = obj);
// console.log(a,b);

// Nested objects
// const {fri: {open: o, close: c}} = openingHours;
// console.log(o,c);

//const arr = [2,3,4];
// const a = arr[0]
// const b = arr[1]
// const c = arr[2]

// const [x, y, z] = arr;
// console.log(x, y, z); // Results = 2,3,4, Destructoring Arrays
// console.log(arr);

// const [first, , second] = resturant.categories;
// console.log(first, second); // Second element skipped

// console.log(resturant.order(2,0));
// Destructoring way
// const [starter, main] = resturant.order(2,0);
// console.log(starter, main);

// Nested Destructoring
// const nested = [2, 4, [5, 6]];
// console.log(nested);
// const [i,, j]= nested;
// console.log(i, j);

// SETS

const orderSet = new Set([
  "Pasta",
  "Pizza",
  "Pizza",
  "Risotto",
  "Pasta",
  "Pizza",
]);
console.log(orderSet);
console.log(orderSet.has("Bread")); // checks whether Bread includes in a set
orderSet.add("Bread");
orderSet.delete("Bread");
console.log(orderSet);

for (const order of orderSet) console.log(order);

// Example

const staff = ["Waiter", "Chef", "Waiter", "Manager", "Chef"];
const staffUnique = [...new Set(staff)]; // we want it as array
console.log(staff);
console.log(staffUnique);

// MAPS the keys can have any type
const rest = new Map();
rest.set("name", "Classico Italiano");
rest.set(1, "Firenze, Italy");
console.log(rest);

// FIND
const firstMeal = staff.find((mov) => (mov = "Waiter"));
console.log(staff);
console.log(firstMeal);

console.log(staff.some((mov) => mov === "Waiter"));

const arrayFlat = [[1, 2, 3], 4, 5, [8, 9]];
console.log(arrayFlat.flat());

const arrayDeep = [[[1, 2], 3], 4, 5, [[6, 8], 9]];
console.log(arrayDeep.flat(1)); // We still got 2 level array, so flat only takes first level of nesting (depth 1 is the default)
// To figure it, we need deeper depth
console.log(arrayDeep.flat(2)); // Solved
