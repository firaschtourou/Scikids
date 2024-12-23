import { useState } from 'react'
import { LoginAdmin } from './assets/LoginAdmin/LoginAdmin'
import { LoginTeacher } from './assets/LoginTeacher/LoginTeacher'
import { Dashboard } from './assets/AccountsAdmin/Dashboard'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/*<LoginAdmin/>
      <LoginTeacher/>*/}
      <Dashboard/>
    </>
  )
}

export default App
