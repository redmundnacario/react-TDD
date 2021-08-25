import { shallow } from 'enzyme'

import GuessedWords from './components/guessedWords/GuessedWords.component'

import { findDataTestAttr, checkProps } from '../test/test.utils' 

const defaultProps = {
    guessedWords: [
        {
            guessedWord: "train",
            matchedLettersCount: 3
        }
    ]
}

const setup = (props) => {
    const setupProps = {...defaultProps, ...props}
    return shallow(<GuessedWords {...setupProps}/>)
}


// test props in component
test("render GuessWords Component with props", () => {
    // const props = {success: true}
    checkProps(GuessedWords,  defaultProps)
})

describe("renders GuessWords Component with no input",  () => {
    //set before action
    let wrapper
    beforeEach(() =>
        wrapper = setup({guessedWords: []})
    )
    //test render component
    test("render GuessWords Component", () => {
        const comp = findDataTestAttr(wrapper, "component-guessed-words")
        expect(comp.length).toBe(1)
    })

    //test render component with instruction
    test("render GuessedWords Component with instruction", () =>{
        const instruction = findDataTestAttr(wrapper, "guess-instructions")
        expect(instruction.text().length).not.toBe(0)
    })
})

describe("renders GuessedWords Component with input", () => {
    let wrapper
    const guessedWords = [
        { guessedWord: 'train', matchedLettersCount: 3 },
        { guessedWord: 'agile', matchedLettersCount: 1 },
        { guessedWord: 'party', matchedLettersCount: 5 },
    ];
    beforeEach(()=>{
        wrapper = setup({guessedWords})
    })

    //test render component
    test("render GuessWords Component", () => {
        const comp = findDataTestAttr(wrapper, "component-guessed-words")
        expect(comp.length).toBe(1)
    })

    //test guessed-words child content
    test("render guessWords content", () => {
        const comp = findDataTestAttr(wrapper, "guessed-words")
        expect(comp.length).toBe(1)
    })

    //test length of quessed-word child content
    test("render guessWord content with correct number", () => {
        const comp = findDataTestAttr(wrapper, "guessed-word")
        expect(comp.length).toBe(guessedWords.length)
    })
})