import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';     // Bottom Navigator kullanıyoruz
import Home from '../screens/Home';
import ReviewDetails from '../screens/ReviewDetails';
import About from '../screens/About';


const Tabs = createBottomTabNavigator();

const Navigator2 = () => {
    return (
        <Tabs.Navigator>
            <Tabs.Screen name="Home" component={Home}/>
            <Tabs.Screen name="ReviewDetails" component={ReviewDetails}/>
            <Tabs.Screen name="About" component={About}/>
        </Tabs.Navigator>
    )
}

export default Navigator2;