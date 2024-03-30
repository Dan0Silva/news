import React, { useEffect, useState } from 'react'

import api, { getPosts } from '../../servic/api'

import * as S from './styles'
import Header from '../../componens/Header'
import Post from '../../componens/Post'

interface PostData {
  id: string
  owner_id: string
  parent_id: string | null
  slug: string
  title: string
  status: string
  source_url: string
  created_at: string // Assuming ISO 8601 date-time format
  updated_at: string // Assuming ISO 8601 date-time format
  published_at: string // Assuming ISO 8601 date-time format
  deleted_at: string | null
  tabcoins: number
  tabcoins_credit: number
  tabcoins_debit: number
  owner_username: string
  children_deep_count: number
}

export default () => {
  const [list, setList] = useState<any>([])

  // const getPosts = async () => {
  //   try {
  //     const response: AxiosResponse<PostData[]> = await api.get(
  //       '/contents?page=1&per_page=10&strategy=relevant',
  //     )
  //     setList(response.data)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  // const renderList = () => {
  //   const renderingList = list.map((item) => <Post />)
  //   return renderingList
  // }

  // useEffect(() => {
  //   getPosts()

  // })

  setList(getPosts())

  return (
    <S.MainContainer>
      <Header />
      <S.PostListContainer contentContainerStyle={{ paddingHorizontal: 12 }}>
        {/* {renderList()} */}
      </S.PostListContainer>
    </S.MainContainer>
  )
}
