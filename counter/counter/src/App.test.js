import Enzyme, { shallow, mount } from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17'
import App from './App';

Enzyme.configure( { adapter : new EnzymeAdapter() })

// get the shallow render of App component
const setup = () => shallow(<App/>)
// get the mount render of App component
const setupMnt = () => mount(<App/>)

// find the component with data-test attribute
const findDataTestAttr = (wrapper, data_test_str) => {
  return wrapper.find(`[data-test='${data_test_str}']`)
}

test('renders without an error', () => {
  const componentApp = findDataTestAttr( setup(), 'component-app')
  expect(componentApp.length).toBe(1)
})


test("renders the increment button", () => {
  const componentApp = findDataTestAttr( setupMnt(), "button-increment")
  expect(componentApp.length).toBe(1)
})

test("renders the decrement button", () => {
  const componentApp = findDataTestAttr(setupMnt(), "button-decrement")
  expect(componentApp.length).toBe(1)
})

test("renders display", () => {
  const componentApp = findDataTestAttr(setup(), "display")
  expect(componentApp.text()).toBe("0")
})

test("renders the increment behaviour", () => {
  const wrapper = setupMnt()
  // find the button
  const button = findDataTestAttr( wrapper, "button-increment")
  // expect(button.length).toBe(1)
  // click the button
  button.simulate('click')
  // button.prop('onClick')()
  console.log(button.length)
 
  // find the display
  const count = findDataTestAttr(wrapper, "display")
  
  // assert the increment value
  expect(count.text()).toBe("1")
})

test("renders the decrement behaviour with initial zero value", () => {
  const wrapper = setupMnt()
  // find the button
  const button = findDataTestAttr( wrapper, "button-decrement")
  // expect(button.length).toBe(1)
  // click the button
  button.simulate('click')
 
  // find the display
  const count = findDataTestAttr(wrapper, "display")
  
  // assert the increment value
  expect(count.text()).toBe("0")
})

test("renders the warning when value reaches Zero", () => {
  const wrapper = setupMnt()

  const warning = findDataTestAttr(wrapper, "warning-sign")
  expect(warning.length).toBe(1)
})

test("renders the warning OFF when value reaches greater than Zero", () => {
  const wrapper = setupMnt()
  // find the button
  const button = findDataTestAttr( wrapper, "button-increment")
  
  // click the button
  button.simulate('click')

  const warning = findDataTestAttr(wrapper, "warning-sign")
  expect(warning.length).toBe(0)
})