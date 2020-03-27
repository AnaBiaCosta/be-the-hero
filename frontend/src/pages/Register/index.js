import React from 'react'
import { FiArrowLeft }  from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { 
  PageWrapper, 
  Wrapper, 
  Container, 
  Form, 
  Title, 
  Description, 
  FormWrapper,
  Button
} from './Register.style'
import brand from '../../assets/logo.svg'

const Register = () => {
  return(
    <PageWrapper>
      <Wrapper>
        <Container>
          <img src={brand} alt="Be The Hero" />
          <Title>Cadastro</Title>
          <Description>
            Faça seu cadastro, entre na plataforma e ajude pessoas 
            a encontrarem os casos da sua ONG.
          </Description>
          <Link to="/">
            <FiArrowLeft size={16} color="#E02041" />
            Não tenho cadastro
          </Link>
        </Container>

        <Form>
          <input placeholder="Nome da ONG" />
          <input type="email" placeholder="E-mail" />
          <input placeholder="Whatsapp" />

          <FormWrapper>
            <input placeholder="Cidade" />
            <input placeholder="UF" style={{ width: 80 }}/>
          </FormWrapper>

          <Button type="submit">Cadastrar</Button>
        </Form>

      </Wrapper>
    </PageWrapper>
  )
}

export { Register }
