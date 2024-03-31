import React, { useEffect, useState } from 'react'

import api from '../../services/api'

import * as S from './styles'
import Header from '../../componens/Header'
import Post from '../../componens/Post'
import { AxiosResponse } from 'axios'

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

const getPosts = async () => {
  try {
    const res: AxiosResponse<PostData[]> = await api.get('/contents?page=1&per_page=10&strategy=relevant')
    if (res) {
      return res.data
    } else {
      return []
    }
  } catch (error) {
    console.log("Erro ao buscar posts: ", error)
  }
}

export default () => {
  const [list, setList] = useState<PostData[]>([])

  useEffect(() => {
    getPosts().then(data => {
      if (data !== undefined) {
        setList(data as PostData[])
      } 
    }) 
  }, [list])

  return (
    <S.MainContainer>
      <Header />
      <S.PostListContainer contentContainerStyle={{ paddingHorizontal: 12 }}>
        {/* {renderList()} */}
      </S.PostListContainer>
    </S.MainContainer>
  )
}
