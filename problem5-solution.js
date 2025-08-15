function resultReport(marks) {
  if (!Array.isArray(marks)) {
    return "Invalid";
  }
  if (marks.length === 0) {
    return { finalScore: 0, pass: 0, fail: 0 };
  }
  let averageMark = 0;
  let passSubject = 0;
  let failSubject = 0;
  let output = {};

  for (let i = 0; i < marks.length; i++) {
    averageMark = averageMark + marks[i] / marks.length;
    if (marks[i] >= 40) {
      passSubject++;
    } else {
      failSubject++;
    }
  }

  output.finalScore = Math.round(averageMark);
  output.pass = passSubject;
  output.fail = failSubject;

  return output;
}

console.log(resultReport([98, 87, 67, 91, 92, 33, 87]));
