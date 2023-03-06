function findUniq(arr) {
  const res = [...arr].filter((el) => typeof el == "number").sort();
  if (res.length < 3) return "Данные не верны!";
  if (res[0] == res[1]) return res[res.length - 1];
  return res[0];
}

module.exports = findUniq;
