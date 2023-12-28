import Search from './components/Search.tsx'
import './App.css'
import { UserProps } from './types/user.ts'
import { useState } from 'react'

const App = () => {
  const [user, setUser] = useState <UserProps | null>(null)

    const loadUser = async(userName: string) => {

    const res = await fetch(`https://api.github.com/users/${userName}`)

    const data = res.json()
    
    console.log(data)
  }
  return (
    <>
     <h1>GitHub Finder</h1>
     <div><Search loadUser={loadUser}/></div>
    </>
  )
}

export default App
