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

test('renders App without errors', () => {
    const app = findDataTestAttr(setup(), "app-component")
    expect(app).toHaveLength(1)
})

// test ("render input-box", () => {
//     const wrapper = mount(<App />)
//     const comp = findDataTestAttr(wrapper, "input-component")
//     expect(comp.length).toBe(1)
// })

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

// describe("some words guessed", () => {

// })

// describe("guessed the secret word", () => {

// })