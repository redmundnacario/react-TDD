/**
 * @method getLetterMatchCount
 * @param {string} guessedWord - Guessed word.
 * @param {string} secretWord - Secret word.
 * @returns {number} - Number of letters matched between guessed word and secret word.
 */
export function getLetterMatchCount(guessWord, secretWord) {

    const secretWordSplit = secretWord.split("")
    const guessWordSet = new Set(guessWord)

    return secretWordSplit.filter((letter) => {
        return guessWordSet.has(letter)}
        ).length
}
