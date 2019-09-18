'use strict';

//Make student reports
function makeStudentsReport(data) {
    let arr = [];  
    for (let i in data) {
      arr.push(`${data[i].name}: ${data[i].grade}`);
    }
    return arr;
  
  }

  const testData = [
    { name: 'Jane Doe', grade: 'A' },
    { name: 'John Dough', grade: 'B' },
    { name: 'Jill Do', grade: 'A' },
  ];

 makeStudentsReports(testData);