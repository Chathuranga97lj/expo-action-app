import React from 'react'
import About from '../screens/About'
import Task from '../screens/Task'
import Home from '../screens/Home'
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

const screenOptionStyle ={
  headerStyle: {
    backgroundColor: 'purple'  
  },
  headerTintColor: 'white',
  headerTitleStyle: {
    fontWeight: 'bold'
  }
}

const AboutStack = () => {
  return(
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="About" component={About} />
    </Stack.Navigator>
  )
}

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}> 

        <Stack.Screen name = "Home" component={Home}/>
        <Stack.Screen name = "Task" component={Task} options={({route}) => ({title:route.params.task})}/>
        
    </Stack.Navigator>
  )
}

export {HomeStack, AboutStack}