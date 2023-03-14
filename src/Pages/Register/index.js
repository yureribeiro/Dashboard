import React, { useState, useEffect } from 'react'
import { DivContainer, Header, Container, Form } from '../Login/style'
import LOGO from '../../images/LOGO.png'
import { validateEmail, validatePassword } from '../../Utils/verificate'
import { NavLink, useNavigate } from 'react-router-dom'
import api from '../../api'

const Register = () => {
  const [user, setUser] = useState()
  const [loading, setLoading] = useState()
  const [form, setForm] = useState([])
  const navigate = useNavigate()


  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value })
  }
  console.log(form)
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setLoading(true)
      await api.post('users', form)
      setUser(form)
      alert('conta cadastrada com sucesso!')
      navigate('/')
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
          <NavLink to='/'>Entrar</NavLink>
        </Header>

        <Container >
          <img src={LOGO} />
          <Form>
            <p>Nome:</p>
            <input
              name='name'
              type='text'
              onChange={handleChange}
              placeholder='Seu nome...'
            />
            <p>Email:</p>
            <input
              name='email'
              type='email'
              onChange={handleChange}
              placeholder='exemplo@exemplo.com'
            />
            <p>Senha:</p>
            <input
              name='password'
              type='password'
              onChange={handleChange}
              placeholder='Digite seu senha...'
            />
            <div>
              <button
                type='submit'
                onClick={handleSubmit}
                disabled={loading === true || !validateInput()}>
                Registrar
              </button>
            </div>
            <small>
              Já possui uma conta?
              <NavLink to='/'>Entrar</NavLink>
            </small>
          </Form>
        </Container>
      </DivContainer>
    </>
  )
}

export default Register
