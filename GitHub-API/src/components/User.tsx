import { UserProps } from '../types/user.ts'
import {MdLocationPin} from 'react-icons/md'

const User = ({avatar_url,location,login,following,followers}: UserProps) => {
  return (
    <div>
        <img src={avatar_url} alt={login} />
        <h2>{login}</h2>
        {location && <p>
            <MdLocationPin/>
            <span>{location}</span>
        </p>}
        
        <div>
            <p>Seguidores:</p>
            <p>{followers}</p>
        </div>
        <div>
            <p>Seguindo:</p>
            <p>{following}</p>
        </div>
    </div>
  )
}

export default User