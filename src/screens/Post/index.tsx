import React from 'react'
import { View, Text } from 'react-native'

interface Props {
  route?: any
}

export default ({ route }: Props) => {
  const { postData } = route.params

  console.log('dados:', postData)

  return (
    <View>
      <Text>ola mundo</Text>
      <Text>hhehe</Text>
    </View>
  )
}
