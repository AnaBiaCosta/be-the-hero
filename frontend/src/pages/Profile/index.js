import React, { useEffect, useState } from 'react'
import { api } from '../../services/api'
import { Link, useHistory } from 'react-router-dom'
import { 
  PageWrapper,
  Header,
  UserInfo,
  Logout,
  PageTitle,
  List,
  ListItem,
  Property,
  Value,
  ButtonDelete
} from './Profile.style'
import brand from '../../assets/logo.svg'
import { FiPower, FiTrash2 } from 'react-icons/fi'

const Profile = () => {
  const ongId = localStorage.getItem('ongId')
  const ongName = localStorage.getItem('ongName')
  const [incidents, setIncidents] = useState([])
  const history = useHistory()

  useEffect(() => {
    api.get('profile', {
      headers: {
        Authorization: ongId
      }
    }).then(response => {
      setIncidents(response.data)
    })
  }, [ongId])

  const handleDeleteIncident = async (id) => {
    try {
      await api.delete(`incidents/${id}`, {
        headers: {
          Authorization: ongId
        }
      })

      setIncidents(incidents.filter(incident => incident.id !== id))
    } catch (error) {
      alert('Erro ao deletar caso, tente novamente')
    }
  }

  const handleLogout = () => {
    localStorage.clear()
    history.push('/')
  }

  return (
    <PageWrapper>
      <Header>
        <img src={brand} alt="Be The Hero"/>
        <UserInfo>Bem vinda, {ongName}</UserInfo>
        <Link to="/incident/new">Cadastrar novo caso</Link>
        <Logout onClick={handleLogout}>
          <FiPower size={18} color="#E02041" />
        </Logout>
      </Header>

      <PageTitle>Casos Cadastrados</PageTitle>
      <List>
        {incidents.map(incident => (
          <ListItem key={incident.id}>
          <Property>Caso</Property>
          <Value>{incident.title}</Value>

          <Property>Descrição</Property>
          <Value>{incident.description}</Value>

          <Property>VALOR</Property>
          <Value>
            {Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL'}).format(incident.value)}
          </Value>

          <ButtonDelete onClick={() => handleDeleteIncident(incident.id)}>
            <FiTrash2 size={20} color="#A8A8B3"/>
          </ButtonDelete>
        </ListItem>
        ))}
      </List>
    </PageWrapper>
  )
}

export { Profile }
