import { validateCharacter } from "../src/functions/validateCharacter"

test("Should return false for empty name", () => {
    const result = validateCharacter({
      name: "",
      life: 1500,
      strength: 300,
      defense: 500,
    });

    expect(result).toBe(false);
  });

  test("Should return false for life equals 0", () => {
    const result = validateCharacter({
      name: "Pedrin",
      life: 0,
      strength: 300,
      defense: 500,
    });

    expect(result).toBe(false);
  });

  test("Should return false for strength equals 0", () => {
    const result = validateCharacter({
      name: "Pedrin",
      life: 1500,
      strength: 0,
      defense: 500,
    });

    expect(result).toBe(false);
  });

  test("Should return false for strength equals 0", () => {
    const result = validateCharacter({
      name: "Pedrin",
      life: 1500,
      strength: 300,
      defense: 0,
    });

    expect(result).toBe(false);
  });

 
  test("Should return false for negative value", () => {
    const result = validateCharacter({
      name: "Pedrin",
      life: 1500,
      strength: -300,
      defense: 500,
    });

    expect(result).toBe(false);
  });


  test("Should return true for all valid inputs", () => {
    const result = validateCharacter({
      name: "Scorpion",
      life: 1500,
      strength: 300,
      defense: 500,
    });

    expect(result).toBe(true);
  });

