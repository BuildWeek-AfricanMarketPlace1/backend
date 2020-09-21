module.exports = {
  isValid,
};

function isValid(user) {
  return true
  // return Boolean(user.email && user.password && typeof user.password === "string");
}
