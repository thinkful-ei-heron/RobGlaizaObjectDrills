'use strict';
const obj = {
    foo: 'bar',
    answerToUniverse: 42,
    'olly olly': 'oxen free',
    sayHello: function() {
        return 'hello';
    }
};

//console.log(obj);

//Update Object
function updateObject(obj) {
    obj.foo = 'foo';
    obj.bar = 'bar';
    obj.izz = 'bizz';
    obj.bang = 'bang';
    return obj
}

console.log(obj);

//Self-reference

function personMaker() {
    var person = {
      firstName: 'Paul',
      lastName: 'Jones',
      // replace `null` with a function that uses self reference to return
      // full name
      fullName: function() {return `${this.firstName} ${this.lastName}`}
    };
    return person;
  }

  console.log(personMaker().fullName());