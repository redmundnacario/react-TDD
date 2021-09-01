import { shallow } from 'enzyme'

import { findDataTestAttr } from '../test/test.utils'

import Input from './components/input/input.component'


const defaultProps = {

}
const setup = (props) => {
    const setupProps = {...defaultProps, ...props}
    return shallow(<Input {...setupProps} />)
}

test("render without errors", ()=>{
    const comp = findDataTestAttr(setup(), "input-component")
    expect(comp.length).toBe(1)
})
