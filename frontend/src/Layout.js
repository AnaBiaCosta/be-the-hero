import React from 'react'
import reset from 'styled-reset'
import styled, { createGlobalStyle } from 'styled-components'

export const breakpoints = {
  xsmall: '@media (min-width: 360px)',
  small: '@media (min-width: 768px)',
  medium: '@media (min-width: 998px)',
  large: '@media (min-width: 1280px)',
}

export const GlobalStyle = createGlobalStyle`
  ${reset}
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap');

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 14px;
    color: #1F2127;
    background-color: #F0F0F5;
    -webkit-font-smoothing: antialiased;
  }

  input, button, textarea {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 18px;
    box-sizing: border-box;
  }

  button {
    cursor: pointer;
  }

  form input {
    width: 100%;
    height: 60px;
    color: #333;
    border: 1px solid #DCDCE6;
    border-radius: 8px;
    padding: 0 24px;
  }

  form textarea {
    width: 100%;
    min-height: 140px; 
    height: 120px;
    color: #333;
    border: 1px solid #DCDCE6;
    border-radius: 8px;
    padding: 16px 24px;
    line-height: 24px;
    resize: vertical;
  }
`

const Main = styled.main`
  min-height: 100vh;
`

const Layout = ({ children }) => {
  return (
    <Main>
      <GlobalStyle />
      {children}
    </Main>
  )
}

export { Layout }
