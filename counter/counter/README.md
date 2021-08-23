# Basic React Increment-Decrement App with Enzyme and Jest

**1. Create a react app**

- `npx create-react-app <app-name>`

  or 

- `yarn create react-app <app-name>`

**2. Install Enzyme and Enzyme adapter**

- `yarn add --dev enzyme @wojtekmaj/enzyme-adapter-react-17`

  or 

- `npm install enzyme @wojtekmaj/enzyme-adapter-react-17`

**3. In App.test.js in react app, insert the following**

```javascript
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17'
import App from './App';

// Use the unofficial adapter
Enzyme.configure({ adapter : new EnzymeAdapter() })
```

**4. Remove 'data-test' properties for testing in production**

`yarn add --dev babel-plugin-react-remove-properties`