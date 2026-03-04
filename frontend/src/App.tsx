import { useState } from 'react'
import './App.css'

export function MeuComponente(){
  return (
    <p>Oi</p>
  )
}

function App() {
  //const [count, setCount] = useState(0)

  return (
    <div>
      <p>a</p>
      <MeuComponente />
    </div>
  )
}

export default App
