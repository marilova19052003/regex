import formatPhoneNumber from "../phoneFormatter";

describe("formatPhoneNumber", () => {
  test("formats Russian phone numbers", () => {
    expect(formatPhoneNumber("8 (927) 000-00-00")).toBe("+79270000000");
    expect(formatPhoneNumber("+7 960 000 00 00")).toBe("+79600000000");
  });

  test("formats Chinese phone numbers", () => {
    expect(formatPhoneNumber("+86 000 000 0000")).toBe("+860000000000");
  });

  test("returns null for invalid numbers", () => {
    expect(formatPhoneNumber("12345")).toBe(null);
  });
});
