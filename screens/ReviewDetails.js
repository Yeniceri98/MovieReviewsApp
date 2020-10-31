import React from 'react'
import { StyleSheet, Text, View, Button, Image } from 'react-native'
import { globalStyles, globalImages } from '../styles/Global';    // globalImages kısmında ratingler vardı. Onları aşağı kısımda {globalImages.ratings[adminRating]} derken kullandık
import Card from '../shared/Card';
import { ScrollView } from 'react-native-gesture-handler';


export default function ReviewDetails({ route, navigation }) {   // Home.js'teki bilgileri route prop'u aracılığıyla çekeceğiz
    const { title, body, rating, adminRating } = route.params;   // Home.js'te oluşturduğumuz objenin içinden kullanmak istediğimiz property'leri burada destructuring yöntemiyle tanımladık ve aşağıda kullandık

    return (
        <View style={globalStyles.container}>
            <ScrollView>
                <Card>
                    <Text style={globalStyles.paragraph}>Name: {title}{"\n"}</Text>
                    <Text style={globalStyles.paragraph}>Info: {body}{"\n"}</Text>
                    <Text style={globalStyles.paragraph}>IMDb Rating: {rating} / 10{"\n"}</Text>
                    <View style={styles.rating}>
                        <Text style={globalStyles.paragraph}>Admin's Rating (1-5){"\n"}</Text>
                        <Image source={globalImages.ratings[adminRating]} />   
                    </View>
                </Card>
            </ScrollView>
            
            
            
            
            
            
            
            {/* <View>
                <Button
                    title="Go to About Page" 
                    onPress={() => navigation.navigate("About")}
                />
                <Button 
                    title="Go Back Home Page"
                    onPress={() => navigation.goBack()}
                />
            </View> */}
        </View>

    )
}


const styles = StyleSheet.create({
    rating: {
        justifyContent: 'center',
        alignItems: "center",
        paddingTop: 15,
        marginTop: 5,
        borderTopWidth: 1,
        borderTopColor: 'skyblue'
    }
})


/*
    NOT: Destructuring yöntemini kullanmak istemezsek aşağıdaki şekilde her biri için ayrı ayrı yapabiliriz:
    const title = route.params;
    <Text>Name:{route.params.title}</Text>
*/

