function requiresBuild(raw) {
  const checkers = [
    "[%",
    "{%"
  ];
  let required = false;
  checkers.forEach(checker => {
    if (raw.includes(checker)) {
      required = true;
    }
  });
  return required;
}

module.exports = requiresBuild