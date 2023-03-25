import React, { useState, useContext } from 'react'
import { DivContainer, Header, Container, Form } from './style'
import LOGO from '../../images/LOGO.png'
import { validateEmail, validatePassword } from '../../Utils/verificate'
import { NavLink, useNavigate } from 'react-router-dom'
import api from '../../api'
import { userContext } from '../../Utils/UserContext'

const Login = () => {
  const [loading, setLoading] = useState()
  const [form, setForm] = useState([])
  const navigate = useNavigate()
  const { user, setUser } = useContext(userContext)

  // pega os valores digitados nos inputs do formulario
  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value })
  }

  //verifica no banco de dados se o usuario existe
  const userExists = async () => {
    const users = await api.get('users', form)
    const findUser = users.data.find(user => user.email === form.email && user.password === form.password)

    if (findUser !== undefined) {
      const { id, name } = findUser
      setUser({ id, name }) //atualiza o contexto do usuario
      localStorage.setItem('user', JSON.stringify({ id, name }))

      navigate('/dashboard')
    } else {
      alert('Usuário não encontrado')
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setLoading(true)
      await userExists()
    }
    catch (error) {
      console.log('algo deu errado', error)
    }
    setLoading(false)
  }

  const validateInput = () => {
    return validateEmail(form.email) && validatePassword(form.password)
  }

  return (
    <>
      <DivContainer>
        <Header>
          <img src={LOGO} />
          <NavLink to='register'>Criar conta</NavLink>
        </Header>

        <Container >
          <img src={LOGO} />
          <Form>
            <p>Email:</p>
            <input
              name='email'
              type='email'
              value={user}
              onChange={handleChange}
              placeholder='Digite seu email...'
            />
            <p>Senha:</p>
            <input
              name='password'
              type='password'
              value={user}
              onChange={handleChange}
              placeholder='Digite seu senha...'
            />
            <div>
              <button
                type='submit'
                onClick={handleSubmit}
                disabled={loading === true || !validateInput()}>
                Entrar
              </button>
            </div>
            <small>
              não possui conta?
              <NavLink to='register'>Registrar-se</NavLink>
            </small>
          </Form>
        </Container>
      </DivContainer>
    </>
  )
}

export default Login
