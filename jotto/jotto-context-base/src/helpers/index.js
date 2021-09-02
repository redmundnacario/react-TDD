export function getLetterMatchCount(guessWord, secretWord) {

    const secretWordSplit = secretWord.split("")
    const guessWordSet = new Set(guessWord)

    return secretWordSplit.filter((letter) => {
        console.log(guessWord, letter, guessWordSet.has(letter))
        return guessWordSet.has(letter)}
        
        ).length
}
