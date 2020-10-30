const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(memb) {


  let teamName = '';

  if (!Array.isArray(memb)) {
    return false;
  }

  for (let item of memb) {

    if (typeof item != "string") {
      continue;
    }

    item = item.trim();

    teamName += item[0];
  }

  return teamName.toUpperCase().split('').sort().join('');
}