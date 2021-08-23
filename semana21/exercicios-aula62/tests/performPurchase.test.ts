import { performPurchase } from "../src/functions/performPurchase"
import { User } from "../src/model/User"


    test("Testing user has a balance greater then the buy", () => {
        const user: User = {
            name: "Pedrin",
            balance: 100
        }

        const result = performPurchase(user, 50)

        expect(result).toEqual({
            name: "Pedrin",
            balance: 50
        })
    })


    test("Testing user has a balance equal to the buy", () => {

        const user: User = {
            name: "Pedrin",
            balance: 100
        }

        const result = performPurchase(user, 100)

        expect(result).toEqual({
            name: "Pedrin",
            balance: 0
        })
    })

    test("Testing user has a balance smaller then the buy", () => {

        const user: User = {
            name: "Pedrin",
            balance: 100
        }

        const result = performPurchase(user, 200)

        expect(result).not.toBeDefined()
    })