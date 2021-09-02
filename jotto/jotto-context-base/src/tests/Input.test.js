import React from 'react'
import { shallow } from 'enzyme'

import { findDataTestAttr, checkProps} from '../../test_utils/test.utils'

import Input from '../components/input/input.component'

// default props
const defaultProps = {
    success : true,
    secretWord : "Sample"
}

// wrapper component
const setup = (props) => {
    const setupProps = {...defaultProps, ...props}
    return shallow(<Input {...setupProps} />)
}

//mock the set state function in useState
// const mockSetCurrentGuess = jest.fn()
// jest.mock('react', () => ({
//     ...jest.requireActual('react'),
//     useState : (initialState) => [initialState, mockSetCurrentGuess]
// }))

// jest.mock('react', () => ({
//     ...jest.requireActual('react'),
// }))



describe("render Input component", () => {

    let wrapper;
    beforeEach(()=> {
        wrapper = setup()
    })

    describe("Check props", () => {
        // test for props
        test("render component with expected props", () => {
            checkProps(Input, defaultProps)
        })
    })

    describe("success is true", () =>{
        test("render 'input-component' without errors", ()=>{
            const comp = findDataTestAttr(wrapper, "input-component")
            expect(comp.length).toBe(1)
        })
        test("input-box does not show", () => {
            const inputBox = findDataTestAttr(wrapper, "input-box")
            expect(inputBox.exists()).toBe(false)
        })
        test("submit-button does not show", () => {
            const submitButton = findDataTestAttr(wrapper, "submit-button")
            expect(submitButton.exists()).toBe(false)
        })
    })
    describe("success is false", () =>{
        let setupProps = {
            success: false,
            secretWord : "Sample"
        }
        let wrapper;
        beforeEach(()=> { 
            wrapper = setup(setupProps)
        })
        test("render 'input-component' without errors", ()=>{
            const comp = findDataTestAttr(wrapper, "input-component")
            expect(comp.length).toBe(1)
        })
        test("input-box does shows", () => {
            const inputBox = findDataTestAttr(wrapper, "input-box")
            expect(inputBox.exists()).toBe(true)
        })
        test("submit-button does shows", () => {
            const submitButton = findDataTestAttr(wrapper, "submit-button")
            expect(submitButton.exists()).toBe(true)
        })
    })
})

// test for input-field and submit button -> useState method
describe("render Input child instances and its useState tests", () =>{
    let setupProps = {
        success: false,
        secretWord : "Sample"
    }

    let mockSetCurrentGuess = jest.fn()
    let wrapper
    let originalUseState

    beforeEach(()=> {
        mockSetCurrentGuess.mockClear()
        originalUseState = React.useState
        React.useState = jest.fn(() => ["", mockSetCurrentGuess])
        wrapper = setup(setupProps)
    })

    afterEach(()=>{
        React.useState = originalUseState
    })
    describe("input-field", () =>{

        test("render 'input-box' without errors", ()=>{
            const comp = findDataTestAttr(wrapper, "input-box")
            expect(comp.length).toBe(1)
        })

        test("state updates whenever input field changes / onChange", () => {
            //mocks the set state function in useState hook by jest function -> Alternative
            // const mockSetCurrentGuess = jest.fn()
            // React.useState = jest.fn(() => ["", mockSetCurrentGuess])
            
            // const inputBox = findDataTestAttr(setup(), "input-box")
            const inputBox = findDataTestAttr(wrapper, "input-box")
            const mockEvent = {target : { value : "train"}}
            inputBox.simulate("change", mockEvent)
    
            expect(mockSetCurrentGuess).toHaveBeenCalledWith('train')
    
            
            // This test will work if the wrapper is root
            // const inputBox = findDataTestAttr(wrapper, "input-box")
            // inputBox.instance().handleChange = jest.fn()
    
            // const mockEvent = {target : { value : "train"}}
    
            // inputBox.simulate("change", mockEvent)
            // expect(inputBox.instance().handleChange ).toHaveBeenCalledWith('train')
        })
    })

    describe("submit-button", () => {

        test("render 'submit-button' without errors", ()=>{
            const comp = findDataTestAttr(wrapper, "submit-button")
            expect(comp.length).toBe(1)
        })

        test("state updates whenever button was clicked / onClick", () => {
            //mocks the set state function in useState hook by jest function -> Alternative
    
            const button = findDataTestAttr(wrapper, "submit-button")
            const mockEvent = {target: {value: ""}}
    
            button.simulate("click", mockEvent)
    
            expect(mockSetCurrentGuess).toHaveBeenCalledWith("")
        })
    })
})


//Update guessedWords global State
//Check against secret word and update success global state