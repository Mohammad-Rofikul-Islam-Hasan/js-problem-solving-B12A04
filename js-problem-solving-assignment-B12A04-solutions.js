function totalFine(fare) {
  if (typeof fare !== "number" || fare <= 0) {
    return "Invalid";
  }

  const fine = fare + (fare * 20) / 100 + 30;
  return fine;
}

function onlyCharacter(str) {
  if (typeof str !== "string") {
    return "Invalid";
  }
  const result = str.toUpperCase().split(" ").join("");
  return result;
}

function bestTeam(player1, player2) {
  if (typeof player1 !== "object" || typeof player2 !== "object") {
    return "Invalid";
  }

  const player1fareScore = player1.foul + player1.cardY + player1.cardR;
  const player2fareScore = player2.foul + player2.cardY + player2.cardR;

  if (player1fareScore < player2fareScore) {
    return player1.name;
  } else if (player1fareScore > player2fareScore) {
    return player2.name;
  } else if (player1fareScore === player2fareScore) {
    return "Tie";
  }
}

function isSame(arr1, arr2) {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    return "Invalid";
  }
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}

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
