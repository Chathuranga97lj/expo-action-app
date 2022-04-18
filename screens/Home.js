import { View, Text, FlatList, TouchableOpacity, TextInput, StyleSheet, Button } from 'react-native'
import React, {useState} from 'react'
import { global } from '../styles/global'
import { addTask } from '../store/taskAction'
import { useSelector } from 'react-redux'

const Home = ({navigation}) => {

  const tasks = useSelector(state => state.tasks)

  const [text, setText] = useState('')
  const changeHandler = (val) => {
    setText(val)
  }

  return (
    <View style={global.container} >

      <TextInput
        style={styles.input}
        placeholder='Add new task'
        onChangeText={changeHandler}
      />
      <Button title='Add Task' color='blue' onPress={() => addTask(text)} />  

      <FlatList
        data={tasks}
        renderItem={({item}) => (
          <TouchableOpacity style={global.item}  onPress={() => navigation.navigate("Task", item)}>
            <Text>{item.task}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    margin: 10,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: 'grey'
  }
})

export default Home