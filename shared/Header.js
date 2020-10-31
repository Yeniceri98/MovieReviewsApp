import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';    // https://icons.expo.fyi/


export default function Header({ navigation, title }) {    // navigation ve title prop'larını, HomeStackNavigator ve AboutStackNavigator'den aldık
    const openMenu = () => {
        navigation.openDrawer();   // Aşağıdaki <SimpleLineIcons> aracılığıyla oluşturulan menü simgesine tıklayınca Drawer'ı açar. Burada navigation'ı kullanabilmek için HomeStackNavigator ve AboutStackNavigator'den prop aldık
    }

    return (
        <ImageBackground style={styles.header} source={require('../assets/game_bg.png')}>   
            <SimpleLineIcons name="menu" size={24} color="black" onPress={openMenu} style={styles.icon} />
            <View style={styles.headerTitle}>
                <Image 
                    source={require('../assets/heart_logo.png')} 
                    style={styles.headerImage}    
                />
                <Text style={styles.headerText}>{title}</Text>   
            </View>
        </ImageBackground>   // Home ve About sayfalarının header kısmında arka plan resmi oluşturabilmek için <View> yerine <ImageBackground> componentini kullandık
    )
}

const styles = StyleSheet.create({
    header: {
        width: "100%",
        height: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
    icon: {
        position: "absolute",   
        left: 16    // menü simgesi solda yer alacak
    },
    headerTitle: {
        flexDirection: "row",    // headerImage'ımız ile başlığımız yanyana gelir
    },
    headerText: {
        fontWeight: "bold",
        fontSize: 24,
        color: "black",
        letterSpacing: 1,
    },
    headerImage: {
        width: 26,
        height: 26,
        marginRight: 8,
        marginTop: 5,
    }
})


/*
    Bu dosyada Home ve About sayfalarındaki header'a ait düzenlemeler yaptık (HomeStackNavigator.js ve AboutStackNavigator.js dosyalarında import ettik)
    header'ın sol köşesinde bir menü simgesi oluşturduk ve o simgeye tıklayınca drawer navigator çalışıyor
    header'a image ve background image ekledik
*/