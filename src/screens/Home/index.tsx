import React, { useEffect, useState } from 'react'

import api from '../../services/api'

import * as S from './styles'
import Header from '../../componens/Header'
import PostListItem from '../../componens/PostListItem'

async function getPost() {
  const res = await api.get('/contents?page=1&per_page=10&strategy=relevant')
  if (res) {
    return res.data
  } else {
    return []
  }
}

function renderPosts(list: PostData[]) {
  const newList = list.map((post) => {
    return <PostListItem key={post.id} post={post} />
  })

  return newList
}

export default () => {
  const [list, setList] = useState<PostData[]>([])

  useEffect(() => {
    getPost().then(setList)
  }, [])

  return (
    <S.MainContainer>
      <Header />
      <S.PostListContainer contentContainerStyle={{ paddingHorizontal: 13 }}>
        {renderPosts(list)}
      </S.PostListContainer>
    </S.MainContainer>
  )
}
