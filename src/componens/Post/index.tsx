import React from 'react'
import * as S from './styles'

export default () => {
  const text =
    '[Tutorial]: Como crial um blog utilizando Github Pages + Obsidian + Quartz'

  const subtext = '4 comentários · danilocarsan · 1 dia atrás'

  return (
    <S.MainContainer>
      <S.Title numberOfLines={2}>{text}</S.Title>
      <S.Subtitle>{subtext}</S.Subtitle>
    </S.MainContainer>
  )
}
