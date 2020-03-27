import styled from 'styled-components'

export const PageWrapper = styled.div`
  width: 100%;
  max-width: 1120px;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Wrapper = styled.section`
  width: 100%;
  padding: 96px;
  background-color: #F0F0F5;
  box-shadow: 0 0 100px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Container = styled.div`
  width: 100%;
  max-width: 380px;

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
  margin: 64px 0 32px;
  font-size: 32px;
  font-weight: 700;

`

export const Description = styled.p`
  font-size: 18px;
  color: #737380;
  line-height: 32px;
`

export const Form = styled.form`
  width: 100%;
  max-width: 450px;

  input {
    margin-top: 8px;
  }
`

export const FormWrapper = styled.div`
  display: flex;

  input + input {
    margin-left: 8px;
  }
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