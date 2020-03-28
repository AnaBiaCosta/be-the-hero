import React, { useState } from 'react'
import { api } from '../../services/api'
import { FiArrowLeft }  from 'react-icons/fi'
import { Link, useHistory } from 'react-router-dom'
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
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [value, setValue] = useState('')
  const ongId = localStorage.getItem('ongId')
  const history = useHistory

  const handleNewIncident = async (e) => {
    e.preventDefault()

    const data = {
      title, 
      description,
      value
    }

    try {
      await api.post('incidents', data, {
        headers: {
          Authorization : ongId
        }
      })
      history.push('/profile')
    } catch (error) {
      alert('Erro ao cadastrar caso, tente novamente')
    }
  }

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

        <Form onSubmit={handleNewIncident}>
          <input 
            placeholder="Título do caso"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
          <textarea 
            placeholder="Descrição"
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
          <input 
            placeholder="Valor em reais"
            value={value}
            onChange={e => setValue(e.target.value)}
          />
          <Button type="submit">Cadastrar</Button>
        </Form>
      </Wrapper>
    </PageWrapper>
  )
}

export { NewIncident }
