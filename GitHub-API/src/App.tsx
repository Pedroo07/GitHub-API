import Search from './components/Search.tsx'
import classes from "./App.module.css"
import { UserProps } from './types/user.ts'
import { useState } from 'react'
import User from './components/User.tsx'

const App = () => {
  const [user, setUser] = useState<UserProps | null>(null)

  const loadUser = async (userName: string) => {

    const res = await fetch(`https://api.github.com/users/${userName}`)

    const data =  await res.json()

    const { avatar_url, login, location, followers, following} = data

    const userData: UserProps = {
      avatar_url,
      login,
      location,
      followers,
      following,
    }
    setUser(userData)
  }
  return (


    <div className={classes.app}>
      <h1>GitHub Finder</h1>
      <Search loadUser={loadUser} />
      {user && <User {...user} />}
    </div>

  )
}

export default App
