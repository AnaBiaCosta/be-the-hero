import styled from 'styled-components'

export const PageWrapper = styled.div`
  width: 100%;
  max-width: 1120px;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Wrapper = styled.section`
  width: 100%;
  max-width: 350px;
  margin-right: 30px;
`

export const Form = styled.form`
  margin-top: 100px;

  a{
    display: flex;
    align-items: center;
    margin-top: 40px;
    color: #41414D;
    font-size: 18px;
    text-decoration: none;
    font-weight: bold;
    cursor: pointer;
    transition: opacity 0.2s;

    :hover {
      opacity: 0.8;
    }

    svg {
      margin-right: 8px;
    }
  }
`

export const Title = styled.h1`
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 32px;
`

export const Button = styled.button`
  width: 100%;
  height: 60px;
  background-color: #E02041;
  border: none;
  border-radius: 8px;
  color: #FFF;
  font-weight: 700;
  margin-top: 16px;
  display: inline-block;
  text-align: center;
  font-size: 18px;
  line-height: 60px;
  transition: filter 0.2s;

  :hover {
    filter: brightness(90%);
  }
`
