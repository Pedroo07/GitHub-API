import Search from './components/Search.tsx'
import classes from "./App.module.css"
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
    <div className={classes.app}>
    <h1>GitHub Finder</h1>
    <Search loadUser={loadUser}/>
    </div>
  )
}

export default App
