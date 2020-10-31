import { StyleSheet } from 'react-native';


export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 36
    },
    titleText: {
        fontFamily: "Amaranth_400Regular",    
        fontSize: 36,
        color: "#333",
        textAlign: "center"
    },
    paragraph: {
        fontFamily: "Amaranth_400Regular", 
        fontSize: 24,
        color: "#333",
    },
    input: {
        borderWidth: 1,
        borderColor: "skyblue",
        padding: 10,
        fontSize: 24,
        borderRadius: 6
    },
    errorText: {
        color: "crimson",
        fontWeight: "bold",
        marginBottom: 10,
        marginTop: 5,
        textAlign: "center"
    }
})

export const globalImages = {        
    ratings: {
        "1": require('../assets/rating-1.png'),
        "2": require('../assets/rating-2.png'),
        "3": require('../assets/rating-3.png'),
        "4": require('../assets/rating-4.png'),
        "5": require('../assets/rating-5.png'),
    }
}