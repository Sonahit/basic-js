const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  return (
    Array.isArray(members) &&
    members
      .reduce((acc, m) => {
        if (typeof m !== "string") {
          return acc;
        }
        return [...acc, m.trim().charAt(0).toUpperCase()];
      }, [])
      .sort()
      .join("")
  );
};
