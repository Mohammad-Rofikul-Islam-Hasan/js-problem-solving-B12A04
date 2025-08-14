function bestTeam(player1, player2) {
  if (typeof player1 && typeof player2 !== "object") {
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

console.log(
  bestTeam({ name: "Germany", foul: 10, cardY: 1, cardR: 1 }, "France")
);
