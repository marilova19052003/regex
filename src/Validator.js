class Validator {
  validateUsername(username) {
    // Обновленное регулярное выражение
    const regex =
      /^(?!.*\d{4})(?!.*[_-]{2})(?!.*[_-]$)(?!^[_-])^[a-zA-Z][a-zA-Z0-9_-]*$/;
    return regex.test(username);
  }
}

export default Validator;
