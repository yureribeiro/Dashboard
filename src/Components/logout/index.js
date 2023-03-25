import React, { useContext } from 'react'
import { userContext } from '../../Utils/UserContext'
import { useNavigate } from 'react-router-dom'
import { Buttonlogout } from './style'
import LogoutImg from '../../images/logout.svg'

const Logout = () => {
  const { user, setUser } = useContext(userContext)
  const navigate = useNavigate()

  const logoff = async () => {
    localStorage.removeItem(user)
    await setUser(null)
    navigate('/')
  }

  return (
    <Buttonlogout onClick={logoff}>
      <img src={LogoutImg} />
    </Buttonlogout>
  )
}

export default Logout


