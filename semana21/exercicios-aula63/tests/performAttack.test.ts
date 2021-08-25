import { Character } from "../src/model/Character"
import { performAttack } from "../src/functions/performAttack"

test("Should perform attack", () => {
    const validatorMock = jest.fn(() => {
        return true;
    });

    const attacker: Character = {
        name: "Goblin Slayer",
        life: 5000,
        defense: 500,
        strength: 1000,
    };

    const defender: Character = {
        name: "Goblin",
        life: 1500,
        defense: 400,
        strength: 800,
    };

    performAttack(attacker, defender, validatorMock as any);

    expect(defender.life).toEqual(900);
    expect(validatorMock).toHaveBeenCalled();
    expect(validatorMock).toHaveBeenCalledTimes(2);
    expect(validatorMock).toHaveReturnedTimes(2);
});

test("Should return invalid character error", () => {
    expect.assertions(4);
    const validatorMock = jest.fn(() => {
        return false;
    });

    const attacker: Character = {
        name: "Goblin Slayer",
        life: 1500,
        defense: 200,
        strength: 600,
    };

    const defender: Character = {
        name: "",
        life: 1500,
        defense: 400,
        strength: 800,
    };

    try {
        performAttack(attacker, defender, validatorMock as any);
    } catch (err) {
        expect(err.message).toBe("Invalid character");
        expect(validatorMock).toHaveBeenCalled();
        expect(validatorMock).toHaveBeenCalledTimes(1);
        expect(validatorMock).toHaveReturnedTimes(1);
    }
});