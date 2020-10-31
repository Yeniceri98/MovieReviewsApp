import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';     
import Home from '../screens/Home';
import ReviewDetails from '../screens/ReviewDetails';
import Header from '../shared/Header';


const Stack = createStackNavigator();    // Stack Navigator

export const HomeStackNavigator = ({ navigation }) => (    // Header.js oluşturulmadan önce burada navigation yoktu. Header.js'e prop atabilmek için burada navigation'a ihtiyacımız var. Aşağıda navigation={navigation} dedik
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
        <Stack.Screen name="Home" component={Home} 
            options={{ headerTitle: () => <Header navigation={navigation} title="Home" /> }}    // Header.js dosyasına navigation ve title prop'larını yolluyoruz
        />    
        <Stack.Screen name="ReviewDetails" component={ReviewDetails} />
    </Stack.Navigator>
)

export default HomeStackNavigator;


/*
    __________ CONFIGURING THE HEADER BAR __________
    https://reactnavigation.org/docs/headers/


    <Stack.Screen name="Home" component={Home} options={{ title: "My Home" }} /> 
    options={{ title: "My Home" }} kısmını eklemezsek ekranın üstünde Home gözükür. Ekleyince overridelar ve My Home gözükür


    <Stack.Navigator 
    screenOptions={{
        headerStyle: {
            backgroundColor: "navy"
        },
        headerTintColor: "white",
        headerTitleStyle: {
            fontWeight: "bold"
        }
    }}
    >  
    Burada global style tanımlaması yaptık. Başka Screen'lerde override'lamadığımız sürece (Home'daki gibi) tüm screen'lerde bu style ayarları olacak
    NOT: Daha sonra title kısmını komple kaldırdım çünkü oraya menü işareti koydum
*/