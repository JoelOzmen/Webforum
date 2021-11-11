import React from'react'
import ReactDOM from 'react-dom'

const reactContentRoot = document.getElementById("root")


const App = () => {
    const myItem = "Joel"
  
    return (
      <ul>
          <li>{myItem}</li>
          <li>item2</li>
          <li>item3</li>
      </ul>
    )
  
  }


ReactDOM.render(<App />, reactContentRoot)

export default App;