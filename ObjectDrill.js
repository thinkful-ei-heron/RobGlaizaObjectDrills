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

//#3 Arrays in Objects
const meal = {
    meals:['breakfast', 'second breakfast', 'elevenses', 'lunch', 'afternoon tea', 'dinner', 'supper']
};

console.log(meal.meals[3]);


//#4 Arrays of objects

let obj = [
    {
    name: 'Rob',
    jobTitle: 'Software Engineer'
}, {
    name: 'Will',
    jobTitle2: 'Teacher'
}, {
    name: 'John',
    jobTitle: 'Programmer'
}
];

//let superObj = {obj1, obj2, obj3};
let arr = [];

for (let i in obj) {
    arr.push(obj[i]);
}

console.log(...obj);


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

//#6 cracking the code
const code = {
  a: 2,
  b: 3,
  c: 4,
  d: 5
};

function decodeWords(str) {
  let newArr = [];
  let arrStr = str.split(' ');

  for(let i = 0; i < arrStr.length; i++){
    newArr.push(decode(arrStr[i]));
  }

  return newArr.join(' ');
}

decodeWords('craft block argon meter bells brown croon droop');

function decode(word){
  let firstLetter = word[0];
  let pos = code[firstLetter];
  return word[pos - 1];
}

//#7 Factory functions with LOTR
function createCharacter(name, nickName, race, origin, attack, defense, weapon) {
    return {
      name,
      nickName,
      race,
      origin,
      attack,
      defense,
      describe() {
        console.log(`${this.name} is a ${this.race} from ${this.origin}`);
      },
      evaluateFight(character) {
        let yourDamage = character.attack - this.defense;
        let opponentDamage = this.attack - character.defense;
  
        if(character.defense > this.attack) {
          console.log(`Your oppenent takes 0 damage and you receive ${yourDamage} damage.`);
        }else if (this.defense > character.attack){
          console.log(`Your opponent takes ${opponentDamage} damage and you receive 0 damage.`);
        }else {
          console.log(`Your opponent takes ${opponentDamage} damage and you receive ${yourDamage}.`);
        }
      },
      weapon
    }
  }
  
  //Array characters -> called in evaluateFight
  let characters = [
  createCharacter('Gandalf the White','gandalf', 'Wizard', 'Middle Earth', 10, 6, 'wizard staff'), 
  createCharacter('Bilbo Baggins', 'bilbo', 'Hobbit', 'The Shire', 2, 1, 'the Ring'),
  createCharacter('Frodo Baggins', 'frodo', 'Hobbit', 'The Shire', 3, 2, 'String and Borrow Blade'),
  createCharacter('Aragorn son of Arathorn', 'aragorn', 'Man', 'Dunnedain', 6, 8, 'Anduril'),
  createCharacter('Legolas', 'legolas', 'Elf', 'Woodland Realm', 8, 5, 'Handhafang')
  ];
  
  //New Character
  const newCharacter = characters.push(createCharacter('Arwin Unomill', 'Arwin', 'Half-Elf', 'Rivendell', 7, 3));
  console.log(newCharacter);

  //Using find()
  let search = characters.find(function(item) {
    if (item.nickName === 'aragorn'){
       //console.log(item.describe());
       return item.describe(); //calling describe method of aragorn
    }
  });
  //console.log(search);
  
  //Using filter Hobbit
  let filterHobbit = characters.filter(function(item) {
    if (item.race === 'Hobbit'){
       //console.log(item);
       return item; 
    }
  });
  //console.log(...filterHobbit);
  
  //Using filter Attack
  let filterAttack = characters.filter(function(item) {
    if (item.attack > 5 ){
       return item; 
    }
  });
  //console.log(...filterAttack);
  
  characters.map( item => item.describe = function() {
    console.log(`${item.name} is a ${item.race} from ${item.origin} who uses a ${item.weapon}.`);
  });
  
console.log(characters[0].describe());

//Bonus A

const HEROES = [
  { id: 1, name: 'Captain America', squad: 'Avengers' },
  { id: 2, name: 'Iron Man', squad: 'Avengers' },
  { id: 3, name: 'Spiderman', squad: 'Avengers' },
  { id: 4, name: 'Superman', squad: 'Justice League' },
  { id: 5, name: 'Wonder Woman', squad: 'Justice League' },
  { id: 6, name: 'Aquaman', squad: 'Justice League' },
  { id: 7, name: 'Hulk', squad: 'Avengers' },
];

function findOne(arr, query) {
let result = '';
let obj;

  for (let i = 0; i < arr.length; i++) {
    obj = arr[i];
    for (let item in query) {
        if (obj[item] === query[item]) {
          result = obj;
        } else {
          result = null;
          break;
        }
    }
    if (result !== null) {
      return obj;
    } 
  }
  return null;
}

findOne(HEROES, {id: 2, name:'Aquaman'});
