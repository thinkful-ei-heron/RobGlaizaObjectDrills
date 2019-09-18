'use strict';

// //Make student reports
// function makeStudentsReport(data) {
//     let arr = [];  
//     for (let i in data) {
//       arr.push(`${data[i].name}: ${data[i].grade}`);
//     }
//     return arr;
  
//   }

//   const testData = [
//     { name: 'Jane Doe', grade: 'A' },
//     { name: 'John Dough', grade: 'B' },
//     { name: 'Jill Do', grade: 'A' },
//   ];

//  makeStudentsReports(testData);

//Enroll in summer school
/* const studentData = [
  {
    name: 'Tim',
    status: 'Current student',
    course: 'Biology',
  },
  {
    name: 'Sue',
    status: 'Withdrawn',
    course: 'Mathematics',
  },
  {
    name: 'Liz',
    status: 'On leave',
    course: 'Computer science',
  },
];

function enrollInSummerSchool(students) {
  let arr = [];

  for (let i in students) {
    arr.push({
       name: students[i].name,
       status: 'In Summer school',
       course: students[i].course
      });
  }
  //console.log(arr);
  return arr;
} 

enrollInSummerSchool(studentData);*/



function findById(items, idNum) {
    // your code here
  }

// Find by id
// you can pass in `scratchData` to test out `findByid`
// your function
const scratchData = [
    { id: 22, foo: 'bar' },
    { id: 28, foo: 'bizz' },
    { id: 19, foo: 'bazz' },
  ];
  
  function findById(items, idNum) {
  return items.find(i => i.id === idNum);
  
  
  }

  findById(scratchData, 28);