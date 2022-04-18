import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { AboutStack} from './MyStack';
import MyTab from './MyTab';

const MyDrawer = () => {

    const Drawer = createDrawerNavigator();
    return (
        
        <Drawer.Navigator >
            <Drawer.Screen name="My Tab" component={MyTab} />
            <Drawer.Screen name="About" component={AboutStack} />
        </Drawer.Navigator>
    
    )
}

export default MyDrawer