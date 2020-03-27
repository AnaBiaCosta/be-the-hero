import styled from 'styled-components'

export const PageWrapper = styled.div`
  width: 100%;
  max-width: 1180px;
  padding: 0 30px;
  margin: 32px auto;
`
export const Header = styled.header`
  display: flex;
  align-items: center;

  img {
    height: 64px;
  }

 a {
    width: 260px;
    margin-left: auto;
    margin-top: 0;
    height: 60px;
    background-color: #E02041;
    border: none;
    border-radius: 8px;
    color: #FFF;
    font-weight: 700;
    display: inline-block;
    text-align: center;
    font-size: 18px;
    line-height: 60px;
    text-decoration: none;
    transition: filter 0.2s;

    :hover {
      filter: brightness(90%);
    }
  }
`
export const UserInfo = styled.span`
  font-size: 20px;
  margin-left: 24px;
`

export const Logout = styled.button`
  height: 60px;
  width: 60px;
  border-radius: 4px;
  border: 1px solid #DCDCE6;
  background-color: transparent;
  margin-left: 16px;
  transition: border-color 0.2s;

  :hover {
    border-color: #999;
  }
`
export const PageTitle = styled.h1`
  margin-top: 80px;
  margin-bottom: 24px;
  font-size: 32px;
  font-weight: 700;
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 24px;
`

export const ListItem = styled.li`
  background-color: #FFF;
  padding: 24px;
  border-radius: 8px;
  position: relative;
`

export const Property = styled.strong`
  display: block;
  font-weight: 700;
  margin-bottom: 16px;
  color: #41414D;
  text-transform: uppercase;
`

export const Value = styled.p`
  color: #737380;
  line-height: 21px;
  font-size: 16px;

  + strong {
    margin-top: 32px;
  }
`

export const ButtonDelete = styled.button`
  display: flex;
  align-items: center;
  position: absolute;
  background-color: transparent;
  right: 24px;
  top: 24px;
  border: 0;

  :hover {
    opacity: 0.8;
  }
`




