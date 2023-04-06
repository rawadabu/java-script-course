'use strict';

const resturant = {
    name: 'Classico Italiano',
    location: 'Via Angelo, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegeterian', 'Organic'],
    starterMenu: ['Foccacia', 'Bruscetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    openingHours:{
        thu:{
            open:12,
            close:22,
        },
        fri:{
            open:11,
            close:23,
        },
        sat:{
            open:0, // 24 Hours Open
            close:24,
        },
    },

    order: function (starterIndex, mainIndex){
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },

    orderDelivery: function ({starterIndex, mainIndex, time, address}){
        console.log(`Order recevied! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will
        be delivered too ${address} at ${time}.`);
    },
}

resturant.orderDelivery({
    time:'22:30',
    address: 'Via del sole,21',
    mainIndex: 2,
    starterIndex: 2,
})

const {name, openingHours, categories} = resturant;
console.log(name, openingHours, categories);
const {name: resturantName, openingHours: hours, categories: tags} = resturant;
console.log(resturantName, hours, tags);

// Default values
const {menu = [], starterMenu: starters = []} = resturant; // Setting defaults

// Mutating variables
let a = 111;
let b = 999;
const obj = {a: 23, b: 11, c:14};
({a,b} = obj);
console.log(a,b);

// Nested objects
const {fri: {open: o, close: c}} = openingHours;
console.log(o,c);

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