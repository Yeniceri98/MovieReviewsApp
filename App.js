import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/Home';
import About from './screens/About';
import ReviwDetails from './screens/ReviewDetails';
import { AppLoading } from 'expo';    // Dummy component
import {
    useFonts,
    Amaranth_400Regular,
    Amaranth_400Regular_Italic,
    Amaranth_700Bold,
    Amaranth_700Bold_Italic,
} from '@expo-google-fonts/amaranth';     // Font için useFonts Hook'unu kullandık
import { NavigationContainer } from '@react-navigation/native';
import BottomTabs from './navigators/2_BottomTabs';                   // Bottom Tabs
import DrawerNavigator from './navigators/3_DrawerNavigator';         // Drawer Navigator
import HomeStackNavigator from './navigators/HomeStackNavigator';     // Stack Navigator
import AboutStackNavigator from './navigators/AboutStackNavigator';   // Stack Navigator


export default function App() {
    let [fontsLoaded] = useFonts({
        Amaranth_400Regular,
        Amaranth_400Regular_Italic,
        Amaranth_700Bold,
        Amaranth_700Bold_Italic,
    })

    if (!fontsLoaded) {
        return <AppLoading />    // Font yüklenene kadar <AppLoading /> adında dummy component'i çalıştıracak. Bunu yukarıda import ettik. Font yüklenince aşağıdaki return kısmı çalışacak
    }

    return (
        <NavigationContainer>
            <DrawerNavigator />
        </NavigationContainer>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 40,
        fontFamily: "Amaranth_400Regular",
        fontSize: 24
    }
})


/*
    __________ ÖZEL FONT KULLANIMI __________
    https://docs.expo.io/guides/using-custom-fonts/?redirected sitesinde özel font eklemeyi ayrıntılı şekilde anlatıyor
    https://fonts.google.com/ sitesinde birçok farklı font var bunlardan birini seçip aşağıdaki linkte o font ailesini bulup projeye dahil ederiz
    https://github.com/expo/google-fonts/blob/master/GALLERY.md#readme sitesinde tüm fontlara ait galeri var. O fontlardan kullanmak istediğimize tıklayıp projeye nasıl dahil edeceğimizi görebiliriz
    Amaranth font'unu seçtiğim için önce console'a expo install @expo-google-fonts/amaranth expo-font komutunu yazıp font'u projeye dahil edip en yukarıda da import ettim
*/
/*
    __________ GLOBAL STYLES __________
    Özel font indirmesini yaptıktan sonra istediğimiz component'te (Home, About, ReviewDetails) kullanabiliriz
    Bunu yaparken her bir component için aynı şeyi sürekli kopyala-yapıştır yapmak yerine "Global Style" yöntemini kullanabiliriz
    Bunun için "styles" adında bir klasör oluşturup içine "Global.js" adlı bir dosya ekledik
    "Global.js" dosyasının içinde style tanımlaması yapıp, kullanmak istediğimiz tüm component'lerde import ettik
    Bu şekilde style içerisinde değişiklik yapmak istediğimizde sadece "Global.js" dosyasında yapmamız yeterli olacak. Diğer türlü her bir dosyada ayrı ayrı değişiklik yapmamız gerekecekti
*/ 
/*
    __________ NAVIGATORS (ROUTER GİBİ DÜŞÜN) __________
    https://reactnavigation.org/docs/getting-started
    Öncelikle aşağıdaki komutları yazarak projeye navigasyonu dahil etmemiz gerekir:
    npm install @react-navigation/native  ----->  Navigasyonun eklenmesi
    expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view  ----->  Installing dependencies into an Expo managed project 
    
    NOT: En bilinen navigasyon yöntemleri: https://dev.to/paulobunga/navigating-react-native-app-with-react-navigation-5-4hn8
    1)Stack Navigator
    2)BottomTabs (Provides bottom tabbed navigation)
    3)Drawer Navigator (As the name suggests, it provides a navigation drawer navigator)

    npm install @react-navigation/stack  ----->  Stack Navigaton
    npm install @react-navigation/bottom-tabs  ----->  Bottom Tabs
    npm install @react-navigation/drawer  ----->  Drawer Navigation

    NOT:
    Stack Navigator: https://reactnavigation.org/docs/stack-navigator/
    Home'dan ReviewDetails sayfasına geçiş için HomeStackNavigator'ü oluşturduk
    About sayfası için ayrı bir AboutStackNavigator oluşturduk
    Home'dan direkt About'a "Stack Navigator" ile geçiş sağlayamayacağımız için aşağıda yazan "Drawer Navigator" kullandık
    NOT: navigators > Navigation.Logic'de anlattığımın resmi var

    Bottom Tabs: https://reactnavigation.org/docs/bottom-tab-navigator/
    "2_BottomTabs" dosyası, Bottom Tabs'ın kullanılmasıyla çalışıyor
    Eğer BottomTabs yöntemini kullanacaksak, sayfadaki butonla diğer sayfaya geçme kısımlarını kaldırmamız daha doğru olur

    Drawer Navigator: https://reactnavigation.org/docs/drawer-based-navigation/
    "3_DrawerNavigator" dosyası, Drawer Navigator'ün kullanılmasıyla oluşuyor
    Drawer Navigator'ü Home ile About sayfaları arasında geçiş yaparken kullandık  
*/
/*
    __________ HEADER'DA MENÜ SİMGESİYLE AÇILIR PENCERE OLUŞTURMAK __________
    shared > Header.js dosyasına göz at
*/
/*
    __________ CARD COMPONENT __________
    https://reactnativeelements.com/docs/card/

    shared > Card.js dosyasında card componenti oluşturduk
    Card componentini Home.js ve ReviewDetails.js dosyalarında kullandık
*/
/*
    __________ IMAGES __________
    assets klasörünün içine 5 adet kalp png'si attım
    Home.js'teki useState kısmına "adminRating" adında bir prop daha oluşturup her bir film için rating verdim
    Global.js dosyasında rating sayısına göre (1-5) hangi resmi görüntüleyeceğimizi belirttim
    ReviewDetails.js dosyasında Home.js'te oluşturduğum "adminRating" propunu da route.params kısmında destructor ettim
    Global.js'teki "images" kısmını import ettikten sonra <Image source={images.ratings[adminRating]} /> şeklinde propjeye dahil ettim
*/
/*
    __________ FORMIK and YUP __________
    https://formik.org/docs/guides/react-native  ----->  Formik
    https://medium.com/fotontech/react-native-formik-yup-%EF%B8%8F-18465e020ea0  ----->  Formik and Yup Setup/Usage
    npm install formik --save
    npm add yup

    Formik form oluştururken kullanılır
    Yup form oluşturulduktan sonraki validation (doğrulama) işlemi için kullanılır

    Formik:
    screens klasörü içinde ReviewForm adında dosya oluşturup işlemleri burada yaptık
    Sonrasında ReviewForm'u Home'da import edeceğiz çünkü Home ekranımızdaki modal kısmında görüntülenecek

    Yup:
    screens > ReviewForm'un içinde kullandık
*/
