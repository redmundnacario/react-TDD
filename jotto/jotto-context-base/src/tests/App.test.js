import {shallow, mount} from 'enzyme'

import { findDataTestAttr } from '../../test_utils/test.utils'

import App from '../App.js'



/**
 * Create wrapper with specified initial conditions
 * then submit a guess word of "train"
 * @function
 * 
 * @param {object} state - Initial conditions
 * @returns {Wrapper} - Enzyme wrapper of mounted App Component
 */
const setup = (state = {}) => {
    // TODO: apply state

    const wrapper = mount(<App />)

    // simulate inserting value to input box
    const inputBox = findDataTestAttr(wrapper, "input-box")
    inputBox.simulate("change", {target : { value: "train"}})

    // simulate button click
    const submitButton = findDataTestAttr(wrapper, "submit-button")
    submitButton.simulate("click", {preventDefault() {}})

    return wrapper
}

test.only('renders App without errors', () => {
    const app = findDataTestAttr(setup(), "app-component")
    expect(app).toHaveLength(1)
})



describe("no words guessed", () => {
    let wrapper;
    beforeEach(() => {
        wrapper = setup ( {
            secretWord: 'party',
            success: false,
            guessedWords: []
        })
    })
    test('creates GuessedWords table with one row', () => {
        const guessedWordRows = findDataTestAttr(wrapper, "guessed-word")
        expect(guessedWordRows).toHaveLength(1)
    })
})



describe("some words guessed", () => {
    let wrapper
    beforeEach(()=>{
        wrapper = setup({
            secretWord: 'party',
            success: false,
            guessedWords: [{ guessedWord: 'agile', matchedLettersCount: 1 }]
        })
    })
    test("adds 1 row to GuessedWords", () => {
        const guessedWordRows = findDataTestAttr(wrapper, "guessed-word")
        expect(guessedWordRows).toHaveLength(2)
    })
    //Congratulations should not show
    test("should not display congrats message", () => {
        const congrats = findDataTestAttr(wrapper, "congrats-message")
        expect(congrats.text()).toBe("Try to guess the word.")
    })
    // Should render input box
    test("should render InputBox Component children", () => {
        const inputBox = findDataTestAttr(wrapper, "input-box")
        expect(inputBox.exists()).toBe(true)
        
        const submitButton = findDataTestAttr(wrapper, "submit-button")
        expect(submitButton.exists()).toBe(true)
    })
})



describe("guessed the secret word", () => {
    let wrapper
    beforeEach(()=>{
        wrapper = setup({
            secretWord: 'party',
            success: false,
            guessedWords: [{ guessedWord: 'agile', matchedLettersCount: 1 }]
        })
        const inputBox = findDataTestAttr(wrapper, "input-box")
        inputBox.simulate("change",{target: {value: 'party'}})
        
        const submitButton = findDataTestAttr(wrapper, "submit-button")
        submitButton.simulate("click", {preventDefault() {}})
    })
    test("adds 1 row to GuessedWords", () => {
        const guessedWordRows = findDataTestAttr(wrapper, "guessed-word")
        expect(guessedWordRows).toHaveLength(3)
    })
    //Congratulations should not show
    test("should not display congrats message", () => {
        const congrats = findDataTestAttr(wrapper, "congrats-message")
        expect(congrats.text()).toBe("Congratulations!")
    })
    // Should render input box
    test("should render InputBox Component children", () => {
        const inputBox = findDataTestAttr(wrapper, "input-box")
        expect(inputBox.exists()).toBe(false)
        
        const submitButton = findDataTestAttr(wrapper, "submit-button")
        expect(submitButton.exists()).toBe(false)
    })
})