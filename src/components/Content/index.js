import React from 'react'
import { ContentContainer, Title, Paragraph, Video, MediumSizeText } from './style'

const Content = () => {
  return (
    <ContentContainer>
      <Title>Tema dark/light com style-components</Title>
      <Paragraph>Styled-components vieram para mudar a forma como construimos nossa estrutura front-end. Com eles conseguimos construir um css a partir de arquivos .js, o que nos permite realizar algumas mágicas bem interessantes. A criação dessa interface é um grande exemplo das facilidades que essa ferramenta traz para nossas vidas. Em sua construção foi utilizada, além de React com styled-components, apenas a biblioteca react-switch para criar o botão toggle.</Paragraph>
      <MediumSizeText>O passo a passo é possível acompanhar no vídeo do Diego, da RocketSeat:</MediumSizeText>

      <Video title="Tema light/dark com React, Styled Components e TypeScript | Code/Drops #16" width="700" height="395" src="https://www.youtube.com/embed/ngVU74daJ8Y" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></Video>
    </ContentContainer>
  )
}

export default Content
