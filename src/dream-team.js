const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (members === null || typeof members !== 'object') {
    return false;
  }
  let teamName = [];
  for (let i = 0; i < members.length; i++){
    if (typeof members[i] !== 'string') {
      continue;
    }
    let strWithoutWiteSpaces = members[i].trim()
    teamName.push(strWithoutWiteSpaces[0].toUpperCase());
  }
  teamName.sort();
  return teamName.join('');
};