import React from 'react'
import moment from 'moment'
import api from '../../services/api'

import { useNavigation } from '@react-navigation/native'
import { StackTypes } from '../../routes'

import * as S from './styles'
import { Button } from 'react-native'

interface Props {
  post: PostData
}

async function goToPost(post: PostData) {
  const navigator = useNavigation<StackTypes>()

  // const res = await api.get(`/contents/${post.owner_username}/${post.slug}`)
  // console.log(res.data)

  navigator.navigate('post')
}

export default (props: Props) => {
  const { post } = props

  const timeFormatted = () => `${moment(post.published_at).fromNow()}`

  const text = post.title
  const subtext = `${post.owner_username} - ${
    post.children_deep_count
  } comments - ${timeFormatted()}`

  return (
    <S.MainContainer
      onPress={() => {
        goToPost(post)
      }}>
      <S.Title numberOfLines={2}>{text}</S.Title>
      <S.Subtitle>{subtext}</S.Subtitle>
    </S.MainContainer>
  )
}
