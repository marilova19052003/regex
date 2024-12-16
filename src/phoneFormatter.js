function formatPhoneNumber(phone) {
  const cleaned = phone.replace(/\D/g, ""); // Удаляем все нецифровые символы

  // Обработка номера, начинающегося с 7
  if (cleaned.startsWith("7")) {
    return "+" + cleaned;
  }

  // Обработка номера, начинающегося с 86
  if (cleaned.startsWith("86")) {
    return "+" + cleaned; // Возвращаем номер без изменений
  }
  // Обработка номера, начинающегося с 8
  if (cleaned.startsWith("8")) {
    return "+7" + cleaned.slice(1);
  }

  // Возврат null для неподдерживаемых форматов
  return null;
}

export default formatPhoneNumber;
