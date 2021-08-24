import {shallow, mount} from 'enzyme';
// import the component
import Congratulations from './components/congratulations/congratulations.component';
// test utils
import { checkProps, findDataTestAttr } from '../test/test.utils';

const defaultProps = {
    success : true
}
// setup component wrapper
const setup = (props) => {
    const setupProps = {...defaultProps, ...props}
    return shallow(<Congratulations {...setupProps}/>)
}

// Tests

test('renders component', () => {
    const congrats = findDataTestAttr(setup(), 'congratulations')
    expect(congrats.length).toBe(1)
})

// test congrats component to render if success is true
test('renders Congratulations when success is True', () => {
    const props = {success: true}
    const congrats = findDataTestAttr(setup(props), 'congrats-message')
    expect(congrats.text().length).not.toBe(0)
    
})
// test congrats component to NOT render if success is false
test('renders Congratulations when success is False', () => {
    const props = {success: false}
    const congrats = findDataTestAttr(setup(props), 'congrats-message')
    expect(congrats.text()).toBe('')
})

test("does not throw warning with expected props", () => {
    const props = {success: true}
    checkProps(Congratulations, props)
})