# Jotto App - test prop types

* If you are using Typescript, you can skip this
  
## Testing Proptypes

**1. Install 'prop-types' and 'check-prop-types'**
- `yarn add prop-types`
- `yarn add --dev check-prop-types`

**2. Import it**

```javascript
import PropTypes from 'prop-types';
import checkPropTypes from 'check-prop-types';
```

**3. Inside the component, set the prop types**

```javascript
<component-name>.propTypes = {
  success: PropTypes.bool.isRequired,
};
```

**4. Inside the test, check the prop types**

```javascript
export const checkProps = (component, conformingProps) => {
  const propError = checkPropTypes(
    component.propTypes,
    conformingProps,
    'prop',
    component.name);
  expect(propError).toBeUndefined();
}
```