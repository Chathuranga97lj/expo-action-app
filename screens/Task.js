import { View, Text, Button } from 'react-native'
import React from 'react'
import { global } from '../styles/global'

const Task = ({navigation, route}) => {

  const goToHome = () => {
    navigation.goBack();
  }

  return (
    <View style={global.container}>
      <Text>{route.params.task}</Text>
      <Button title="Go to Home" onPress={goToHome}/>
    </View>
  )
}

export default Task