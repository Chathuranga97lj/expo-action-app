import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import { global } from '../styles/global'

const Home = ({navigation}) => {

  const [tasks, setTasks] = useState([
    {"task":"Computer Network", "done":true, "id":"1"},
    {"task":"Object Oriented Programming", "done":true, "id":"2"},
    {"task":"Web Development", "done":true, "id":"3"}
  ])


  return (
    <View>
      <FlatList
        data={tasks}
        renderItem={({item}) => (
          <TouchableOpacity style={global.container} onPress={() => navigation.navigate("Task", item)}>
            <Text>{item.task}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  )
}



export default Home