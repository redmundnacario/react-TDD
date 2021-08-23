import { useState } from 'react';

import Button from './components/button/button.components'
import Warning from './components/warning/warning.component'

function App() {

  const [count, setCount] = useState(0)

  const handleAddClick = () => {
    setCount(count + 1)
  }
  const handleMinusClick = () => {
    if (count < 1) {
      setCount(0)
    } else {
      setCount(count - 1)
    }
  }

  return (
    <div className="App" data-test="component-app">
      <h1>The current value is <span data-test="display">{count}</span></h1>
      {
        count < 1 && <Warning/>
      }
      
      <Button 
        onClick = {handleAddClick}
        dataTestName = "button-increment" 
        text="Increment by 1"></Button>
      <Button 
        onClick = {handleMinusClick}
        dataTestName = "button-decrement" 
        text="Decrement by 1"></Button>
    </div>
  );
}

export default App;
