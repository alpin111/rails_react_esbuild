import React, { useState } from 'react';

import HelloWorld from './helloworld';


function App() {
  const [count, setCount] = useState(0); // count / setCount aren't part of the react API and can be anything

  return (
    <>
    <HelloWorld />
    <h2>this is a react useState hook:</h2>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </>
  );
}


export default App;