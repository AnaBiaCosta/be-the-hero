import React from 'react'
import { FiLogIn }  from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { PageWrapper, Wrapper, Form, Title, Button } from './Logon.style'
import heroesImg from '../../assets/heroes.png'
import brand from '../../assets/logo.svg'

const Logon = () => {
  return (
    <PageWrapper>
      <Wrapper>
        <img src={brand} alt="Be The Hero" />
        <Form>
          <Title>Faça seu logon</Title>
          <input placeholder="Sua ID" />
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