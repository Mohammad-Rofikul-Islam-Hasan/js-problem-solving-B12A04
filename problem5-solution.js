function resultReport(marks) {
  if (!Array.isArray(marks)) {
    return "Invalid";
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

console.log(resultReport(100));
