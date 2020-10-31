import React from 'react'
import { StyleSheet, Text, View, Button, Image } from 'react-native'
import { globalStyles } from '../styles/Global';
import Photo from '../assets/Photo.jpeg';
import { ScrollView } from 'react-native-gesture-handler';


export default function About({ navigation }) {
    return (
        
        <View style={globalStyles.container}>
            <ScrollView>
                <Text style={globalStyles.titleText}>Who Am I?</Text>
                <Image source={Photo} style={styles.image}/>
                <Text style={globalStyles.paragraph}>I'm a 4th grade computer enginnering student at Uskudar University. I'm currently interested in developing mobile apps by using React Native.</Text>
            </ScrollView>
            
            
            
            
            
            
            {/* <View>
                <Button 
                    title="Go Back Review Details"
                    onPress={() => navigation.goBack()}
                />
            </View> */}
        </View>
    )
}


const styles = StyleSheet.create({
    image: {
        width: 300,
        height: 500,
        marginBottom: 20,
        marginTop: 20,
        borderRadius: 50
    }
})
