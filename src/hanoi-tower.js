const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  const turnsInSecond = turnsSpeed / 3600;
  const countTurns = Math.pow(2, disksNumber) - 1;
  return { 'turns': countTurns, 'seconds': Math.floor(countTurns / turnsInSecond) }
};

