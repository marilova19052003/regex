import Validator from "../Validator";

describe("Validator", () => {
  let validator;

  beforeEach(() => {
    validator = new Validator();
  });

  test("valid username", () => {
    expect(validator.validateUsername("user_name123")).toBe(true);
    expect(validator.validateUsername("user-name")).toBe(true);
  });

  test("invalid username", () => {
    expect(validator.validateUsername("user--name")).toBe(false);
    expect(validator.validateUsername("123user")).toBe(false);
    expect(validator.validateUsername("user1234")).toBe(false);
    expect(validator.validateUsername("user_")).toBe(false);
    expect(validator.validateUsername("_user")).toBe(false);
  });
});
