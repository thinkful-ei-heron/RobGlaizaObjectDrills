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