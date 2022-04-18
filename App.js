import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import MyDrawer from './routes/MyDrawer';



export default function App() {
  return (
    <NavigationContainer>
      <MyDrawer/>
    </NavigationContainer>
  );
}



