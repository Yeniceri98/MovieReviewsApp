import React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import About from '../screens/About';
import Header from '../shared/Header';


const Stack = createStackNavigator();    // Stack Navigator

export const AboutStackNavigator = ({ navigation }) => (    // Header.js oluşturulmadan önce burada navigation yoktu. Header.js'e prop atabilmek için burada navigation'a ihtiyacımız var. Aşağıda navigation={navigation} dedik
    <Stack.Navigator
        headerMode="screen" 
        screenOptions={{
            headerStyle: {
                backgroundColor: "skyblue"
            },
            headerTintColor: "black",
            headerTitleStyle: {
                fontWeight: "bold"
            },
            height: 60
        }}
    >  
        <Stack.Screen name="About" component={About} 
            options={{ headerTitle: () => <Header navigation={navigation} title="About" />}}   // Header.js dosyasına navigation ve title prop'larını yolluyoruz
        />
    </Stack.Navigator>
)

export default AboutStackNavigator;
