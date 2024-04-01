import styled from 'styled-components/native'
import { Ionicons } from '@expo/vector-icons'

export const MainContainer = styled.View`
  background-color: rgb(12, 14, 14);
  height: 110px;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding-top: 36px;
  padding-left: 20px;
  padding-right: 20px;
  flex-direction: row;
`

export const Title = styled.Text`
  font-size: 32px;
  font-weight: 600;
  color: white;
`

export const Icon = styled(Ionicons)`
  margin-top: 3px;
  margin-left: auto;
`
