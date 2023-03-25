import React, { useContext } from 'react'
import { Container, User } from './style'
import LOGO from '../../images/LOGO.png'
import { userContext } from '../../Utils/UserContext'

const Header = () => {
  const { user } = useContext(userContext)

  return (
    <>
      <Container>
        <img src={LOGO} />
        <User>Bem vindo, {user.name}!</User>
      </Container>
    </>
  )
}

export default Header