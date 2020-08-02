import styled from 'styled-components'

export const Container = styled.div`
  height: 60px;
  background: ${props => props.theme.colors.primary};
  color: #FFF;
  align-items: center;
  padding: 0 30px;
  
  display: flex;
  justify-content: space-between;
`