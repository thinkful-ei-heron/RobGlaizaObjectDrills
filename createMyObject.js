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