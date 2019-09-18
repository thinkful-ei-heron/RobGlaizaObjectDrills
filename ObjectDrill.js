// //#1
// const loaf = {
//     flour: 300,
//     water: 210,
//     hydration: function() {
//         return (this.water / this.flour) * 100;
//     }
// };
// const result = loaf.hydration()
// console.log(result);

// //#2

// let result2 = "";
// const myObject = {
//     foo: 2,
//     bar: 4,
//     fum: 6,
//     quux: 8,
//     spam: 10
// }

// for (let val in myObject) {
//     result2 += myObject[val];
// }

// console.log(result2);

//3 Arrays in Objects
// const meal = {
//     meals:['breakfast', 'second breakfast', 'elevenses', 'lunch', 'afternoon tea', 'dinner', 'supper']
// };

// console.log(meal.meals[3]);


// //#4 Arrays of objects

// let obj = [
//     {
//     name: 'Rob',
//     jobTitle: 'Software Engineer'
// }, {
//     name: 'Will',
//     jobTitle2: 'Teacher'
// }, {
//     name: 'John',
//     jobTitle: 'Programmer'
// }
// ];

// //let superObj = {obj1, obj2, obj3};
// let arr = [];

// for (let i in obj) {
//     arr.push(obj[i]);
// }

// console.log(...obj);


//#5

let obj = [
    {
    name: 'Rob',
    jobTitle: 'Founder',
    
}, {
    name: 'Will',
    jobTitle: 'Teacher',
    boss: 'Rob'
}, {
    name: 'John',
    jobTitle: 'Programmer',
    boss: 'Rob'
}
];

//let superObj = {obj1, obj2, obj3};
let arr = [];

for (let i in obj) {
    
    if(obj[i].boss === 'Rob') {
        console.log(`${obj[i].jobTitle} ${obj[i].name} reports to ${obj[i].boss}`);
    } else {
        console.log(`${obj[i].jobTitle} ${obj[i].name} doesn't report to anybody`);
    }
    arr.push(obj[i]);
}

console.log(...obj);
