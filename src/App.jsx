import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FileExplorer from './pages/FileExplorer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>File Explorer</h1>
      <FileExplorer />
    </>
  )
}

export default App