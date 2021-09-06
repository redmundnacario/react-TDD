import { getLetterMatchCount } from './index'

describe("functional tests with getLetterMatchCount()", ()=> {
    test("shouldn't match any letter and return 0", () => {
        const guessWord = "hello"
        const secretWord = "train"
        const count = getLetterMatchCount(guessWord, secretWord)
        expect(count).toBe(0)

    })
    test("should count any match letter", () => {
        const guessWord = "prompt"
        const secretWord = "train"
        const count = getLetterMatchCount(guessWord, secretWord)
        expect(count).toBe(2)
    })
    test("shouldn't duplicate count of matched letters", () => {
        const guessWord = "trumpet"
        const secretWord = "train"
        const count = getLetterMatchCount(guessWord, secretWord)
        expect(count).toBe(2)
    })
})