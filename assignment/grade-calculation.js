const students = [
  { name: "Alice", score: 95, attendance: true },
  { name: "Bob", score: 82, attendance: true },
  { name: "Charlie", score: 0, attendance: false },
  { name: "David", score: 74, attendance: true },
  { name: "Eve", score: 58, attendance: true },
  { name: "Mario", score: 35, attendance: true },
];

function getGrade(score) {
  if (score > 100) {
    return "Invalid score";
  } else if (score >= 80) {
    return "A";
  } else if (score >= 70) {
    return "B";
  } else if (score >= 60) {
    return "C";
  } else if (score >= 50) {
    return "D";
  } else if (score >= 40) {
    return "E";
  } else {
    return "F";
  }
}

// for (let i = 0; i < students.length; i++) {
//   let student = students[i];

//   if (!student.attendance) {
//     console.log(`${student.name} did not attend and cannot be graded`);
//   } else {
//     // console.log(student.score)
    let grade = getGrade(student.score);
//     console.log(`${student.name} scored ${student.score} and received grade ${grade}`);
//   }
// }


let totalScore = 0;
let count = 0;

students.forEach((student) => {
  if (student.attendance) {
    totalScore += student.score;
    count++;
    console.log(`${student.name} scored ${student.score} and received grade ${getGrade(student.score)}`);
  }
});

//We calculated the accumulated score of the students and the number of students that attended, now we can calculate the average score of the students
let averageScore = count > 0 ? totalScore / count : 0;
console.log(`The average score of the students is ${averageScore}`);
