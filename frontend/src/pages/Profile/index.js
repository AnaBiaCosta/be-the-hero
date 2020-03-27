import React from 'react'
import { Link } from 'react-router-dom'
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
  return (
    <PageWrapper>
      <Header>
        <img src={brand} alt="Be The Hero"/>
        <UserInfo>Bem vinda, APAD</UserInfo>
        <Link to="/incident/new">Cadastrar novo caso</Link>
        <Logout>
          <FiPower size={18} color="#E02041" />
        </Logout>
      </Header>

      <PageTitle>Casos Cadastrados</PageTitle>
      <List>
        <ListItem>
          <Property>Caso</Property>
          <Value>Caso teste</Value>

          <Property>Descrição</Property>
          <Value>Descrição teste</Value>

          <Property>VALOR</Property>
          <Value>R$ 120,00</Value>

          <ButtonDelete>
            <FiTrash2 size={20} color="#A8A8B3"/>
          </ButtonDelete>
        </ListItem>
      </List>
    </PageWrapper>
  )
}

export { Profile }
