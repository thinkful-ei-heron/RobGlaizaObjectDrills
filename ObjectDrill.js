//#1
const loaf = {
    flour: 300,
    water: 210,
    hydration: function() {
        return (this.water / this.flour) * 100;
    }
};
const result = loaf.hydration()
console.log(result);

//#2

let result2 = "";
const myObject = {
    foo: 2,
    bar: 4,
    fum: 6,
    quux: 8,
    spam: 10
}

for (let val in myObject) {
    result2 += myObject[val];
}

console.log(result2);