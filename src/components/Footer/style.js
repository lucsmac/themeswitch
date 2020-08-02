import styled from 'styled-components'

export const FooterWrapper = styled.footer`
  width: 100%;
  padding: 1rem;

  display: flex;
  justify-content: center;

  background: ${props => props.theme.colors.primary};
  color: #FFF;

font-family: monospace;
font-weight: 500;
`