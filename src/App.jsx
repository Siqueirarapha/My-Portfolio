import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0)

  return (<>
  <h1>My Portfolio</h1>
  <p>Welcome to my portfolio website!</p>
  <p>Current count: {count}</p>
  <button onClick={() => setCount(count + 1)}>Increment</button>
  </>
    
  )
}

export default App
