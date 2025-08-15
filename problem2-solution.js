function onlyCharacter(str) {
  if (typeof str !== "string") {
    return "Invalid";
  }
  const result = str.toUpperCase().split(" ").join("");
  return result;
}

console.log(onlyCharacter("Serv er : : Do wn"));
