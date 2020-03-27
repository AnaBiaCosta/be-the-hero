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
  Button
} from './NewIncident.style'
import brand from '../../assets/logo.svg'

const NewIncident = () => {
  return(
    <PageWrapper>
      <Wrapper>
        <Container>
          <img src={brand} alt="Be The Hero" />
          <Title>Cadastrar novo caso</Title>
          <Description>
            Descreva o caso detalhadamente para encontrar um herói 
            para resolver isso.
          </Description>
          <Link to="/profile">
            <FiArrowLeft size={16} color="#E02041" />
            Voltar para home
          </Link>
        </Container>

        <Form>
          <input placeholder="Título do caso" />
          <textarea placeholder="Descrição" />
          <input placeholder="Valor em reais" />
          <Button type="submit">Cadastrar</Button>
        </Form>
      </Wrapper>
    </PageWrapper>
  )
}

export { NewIncident }
