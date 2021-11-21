import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'

export const Container = styled.div`
  padding: 0 2rem;

`

export const Background = styled.body`
background: linear-gradient(to right, #33ccff 0%, #ff99cc 100%);
`

export const GlobalStyle = createGlobalStyle`
  body {
    background: linear-gradient(to right, #33ccff 0%, #ff99cc 100%);
  }

  html {
    height: 100%;
    width: 100%;
  }
`
export const MainText = styled.h1`
min-height: 100vh;
  padding: 4rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 30em;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: 700;
`

export const Card = styled.div`
  overflow: hidden;
  padding: 0 0 32px;
  margin: 48px auto 0;
  width: 1440px;
  font-family: Quicksand, arial, sans-serif;
  box-shadow: 0 0 80px rgba(0, 0, 0, .05), 0 0px 80px rgba(0, 0, 0, .08);
  border-radius: 5px;
  height: 764px;
  background-color: white;
  border-color: grey;
  justify-content: justify;
  text-align: center;
  position: absolute;
  margin-top: -1000px;
  margin-left: 190px
`

