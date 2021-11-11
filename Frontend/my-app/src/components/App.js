import React from'react'
import ReactDOM from 'react-dom'
import LoginButton from './ButtonComp/LoginButton'


const reactContentRoot = document.getElementById("root")


const App = () => {
    const myItem = "Joel"
  
    return (
      <div>
        <LoginButton></LoginButton>
      </div>
    )
  
  }


ReactDOM.render(<App />, reactContentRoot)

export default App;