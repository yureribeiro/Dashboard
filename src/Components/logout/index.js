import React from 'react'
// import { userContext } from '../../Utils/UserContext'
import { useNavigate } from 'react-router-dom'
import { Buttonlogout } from './style'
import LogoutImg from '../../images/logout.svg'

const Logout = () => {
  // const { user, setUser } = userContext(userContext)
  const navigate = useNavigate()

  const logoff = async () => {
    // setUser(null)
    navigate('/')
  }

  return (
    <Buttonlogout onClick={logoff}>
      <img src={LogoutImg} />
    </Buttonlogout>
  )
}

export default Logout


