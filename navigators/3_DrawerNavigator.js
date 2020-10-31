import React from 'react';
import { StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeStackNavigator from './HomeStackNavigator';
import AboutStackNavigator from './AboutStackNavigator';

  
const Drawer = createDrawerNavigator();     // Drawer Navigator

export default function DrawerNavigator() {
    const dimensions = useWindowDimensions();    // Alttaki drawerType kısmında kullanacağız. En yukarıda da import ettik. NOT: Ekstra property bilgisidir, kullanılması şart değil. Cihaz boyutu 768'den büyükse "permanent" küçükse "slide" draweType'ını kullanacak

    return (
        <Drawer.Navigator
            initialRouteName="Home"
            drawerType={dimensions.width >= 768 ? "permanent" : "slide"} 
            drawerStyle={{
                backgroundColor: "lavender",
                width: 220    // Açılan navigasyonun boyutu
            }}
        >
            <Drawer.Screen name="Home" component={HomeStackNavigator} />
            <Drawer.Screen name="About" component={AboutStackNavigator} />
        </Drawer.Navigator>
    )
}


/*
    https://reactnavigation.org/docs/drawer-based-navigation/
    <DrawerNavigator> componentinin içindeki tüm property'lere yukarıdaki siteden ulaşabiliriz
*/
