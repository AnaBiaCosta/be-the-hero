import React, { useState } from 'react'
import { api } from '../../services/api'
import { FiLogIn }  from 'react-icons/fi'
import { Link, useHistory } from 'react-router-dom'
import { PageWrapper, Wrapper, Form, Title, Button } from './Logon.style'
import heroesImg from '../../assets/heroes.png'
import brand from '../../assets/logo.svg'

const Logon = () => {
  const [id, setId] = useState('')
  const history = useHistory()

  const handleLogin = async (e) => {
    e.preventDefault()

    try {
      const response = await api.post('sessions', { id })
      localStorage.setItem('ongId', id)
      localStorage.setItem('ongName', response.data.name)
      history.push('/profile')
    } catch (error) {
      alert('Falha no login, tente novamente')
    }
  }

  return (
    <PageWrapper>
      <Wrapper>
        <img src={brand} alt="Be The Hero" />
        <Form onSubmit={handleLogin}>
          <Title>Faça seu logon</Title>
          <input 
            placeholder="Sua ID"
            value={id}
            onChange={e => setId(e.target.value)}
          />
          <Button type="submit">Entrar</Button>
          <Link to="/register">
            <FiLogIn size={16} color="#E02041" />
            Não tenho cadastro
          </Link>
        </Form>
      </Wrapper>
      <img src={heroesImg} alt="Heroes" />
    </PageWrapper>
  )
}

export { Logon }