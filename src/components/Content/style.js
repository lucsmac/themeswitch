import styled from 'styled-components'

export const ContentContainer = styled.div`
  max-width: 792px;
  margin: 0 auto;
  padding: 7.5rem 1rem;

  color: ${props => props.theme.colors.color}
`

export const Title = styled.h1`
  font-family: sans-serif;
  color: ${props => props.theme.colors.secundary};

  padding-bottom: 3rem;
`

export const MediumSizeText = styled.h2`
  font-family: sans-serif;
  font-weight: 500;
  color: ${props => props.theme.colors.secundary};

  padding-bottom: 1.5rem;
  padding-top: 2rem;

`

export const Paragraph = styled.p`
  font-family: monospace;
  
  & + p {
    margin-top: 2rem;
  }
`

export const Video = styled.iframe`
  display: flex;
  justify-content: center;

  margin: 50px auto;

  border: none;
`