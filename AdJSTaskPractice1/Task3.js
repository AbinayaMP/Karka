const students=[
    {name:'Alice' ,score:85},
    {name:'Bob',score:92},
    {name:'Charlie',score:78}
]
 function score(studentList, studentName) {
  let score = null;
  studentList.map(student => {
    if (student.name === studentName) {
      score = student.score;
    }
  });

  return score;
}
console.log(score(students, 'Bob'));