import React, { useState } from 'react'
import { StyleSheet, Text, View, Button, FlatList, TouchableOpacity, Modal, Keyboard, TouchableWithoutFeedback } from 'react-native'
import { globalStyles } from '../styles/Global';    // Süslü parantez içinde aldık çünkü "export default" değil sadece "export"
import Card from '../shared/Card';
import { Ionicons } from '@expo/vector-icons';    // Altta modal'ı açıp kapatmak için 2 adet Ionicons kullandık  https://icons.expo.fyi/
import ReviewForm from '../screens/ReviewForm';


export default function Home({ navigation }) {
    const [modalOpen, setModalOpen] = useState(false);    // Modal için oluşturduk. true iken modal gözükecek, false iken gözükmeyecek. Bunu toggle şeklinde yapacağız

    const [reviews, setReviews] = useState([
        { key: 1, title: "The Lord of the Rings", rating: 8.8, adminRating: 4, body: "The Lord of the Rings is a film series of three epic fantasy adventure films directed by Peter Jackson, based on the novel written by J. R. R. Tolkien. The films are subtitled The Fellowship of the Ring (2001), The Two Towers (2002) and The Return of the King (2003). Produced and distributed by New Line Cinema with the co-production of WingNut Films, it is an international venture between New Zealand and the United States" },
        { key: 2, title: "The Prestige", rating: 8.5, adminRating: 5, body: "The Prestige is a 2006 science fiction thriller film directed by Christopher Nolan and written by Nolan and his brother Jonathan, based on the 1995 novel of the same name by Christopher Priest. It follows Robert Angier and Alfred Borden, rival stage magicians in London at the end of the 19th century. Obsessed with creating the best stage illusion, they engage in competitive one-upmanship, with fatal results" },
        { key: 3, title: "The Green Mile", rating: 8.6, adminRating: 5, body: "The Green Mile is a 1999 American fantasy crime tragedy drama film written and directed by Frank Darabont and based on Stephen King's 1996 novel of the same name. It stars Tom Hanks as a death row corrections officer during the Great Depression who witnesses supernatural events that occur after an enigmatic inmate (Michael Clarke Duncan) is brought to his facility. David Morse, Bonnie Hunt, Doug Hutchison and James Cromwell appear in supporting roles" },
        { key: 4, title: "Fight Club", rating: 8.8, adminRating: 3, body: "Fight Club is a 1999 American film directed by David Fincher and starring Brad Pitt, Edward Norton, and Helena Bonham Carter. It is based on the 1996 novel of the same name by Chuck Palahniuk. Norton plays the unnamed narrator, who is discontented with his white-collar job. He forms a 'fight club' with soap salesman Tyler Durden (Pitt), and becomes embroiled in a relationship with him and a destitute woman, Marla Singer (Bonham Carter)" },
        { key: 5, title: "Kutsal Damacana", rating: 5, adminRating: 1, body: "Kutsal Damacana is a 2007 Turkish comedy film, directed by Kamil Aydın, starring Şafak Sezer as a man who disguises himself as a priest to help remove a spell. The film, which went on nationwide general release across Turkey on December 21, 2007, was one of the highest-grossing Turkish films of 2007 and was followed by the sequels Kutsal Damacana 2: İtmen (2010) and Kutsal Damacana: Dracoola"}
    ])

    const addReview = (review) => {     // Aşağıda prop aracılığıyla ReviewForm dosyasına yollayacağız (<ReviewForm addReview={addReview} />)
        review.key = Math.random().toString();
        setReviews((currentReviews) => {
            return [review, ...currentReviews];    // İlk başta en üste yeni eklediğimizi alıyor (review) sonra spread operator ile önce bulunan review'ları yazdırıyor
        })
    }

    const closeModal = () => {    // Yine prop aracılığıyla ReviewForm dosyasına yollayacağız. Oradaki 2. butona tıklayınca modal kapanıp Home page gözükecek
        setModalOpen(false);
    }

    return (
        <View style={globalStyles.container}>
            
            <Modal visible={modalOpen} animationType="slide">
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>    
                    <View style={styles.modalContent}>        
                        <Ionicons 
                            name="ios-close" 
                            size={40} 
                            color="black" 
                            onPress={() => setModalOpen(false)}
                            style={{ ...styles.modalToggle, ...styles.modalClose }}    // 2 adet style'ı bu şekilde oluştururuz
                        />
                        <ReviewForm addReview={addReview} closeModal={closeModal} />    
                    </View>
                </TouchableWithoutFeedback>   
            </Modal>

            <Ionicons 
                name="ios-add" 
                size={40} 
                color="black"
                onPress={() => setModalOpen(true)} 
                style={styles.modalToggle}
            />

            <FlatList
                data={reviews}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate("ReviewDetails", item)}>
                        <Card>
                            <Text style={globalStyles.paragraph}>{item.title}</Text>
                        </Card>
                    </TouchableOpacity>
                )}
            />
            
            
            
            
        


            {/*  NOT: Yorum satırına aldım çünkü sayfalar arası veri geçişini <FlatList> ile çektiğimiz itemlere basarak sağlayacağız ve sayfa geçişini <TouchableOpacity> componentinde onPress kısmında halledeceğiz. Bu yüzden diğer sayfalarda da bu kısım yok
            <Text style={globalStyles.titleText}>Home Page</Text>
            <Button
                title="Go to Review Details Page"
                onPress={() => navigation.navigate("ReviewDetails")}
            />
            */}
        </View>
    )
}

const styles = StyleSheet.create({
    modalContent: {
        flex: 1
    },  
    modalToggle: {
        marginBottom: 5,
        padding: 5,
        alignSelf: "center",
    },
    modalClose: {
        marginTop: 20,
        marginBottom: 0,
    
    }
})


// NOT: Her bir component için alttaki gibi ayrı ayrı StyleSheet'ler oluşturmak yerine "Global.js" dosyasında Global StyleSheet oluşturduk. O yüzden bu kısmı yorum satırına aldım ve diğer component'larda burayı hiç tanımlamdım. Yukarıdaki StyleSheet tanıkmlaması ise "modal" için
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         padding: 24,
//     },
//     titleText: {
//         fontFamily: "Amaranth_400Regular",
//         fontSize: 24
//     }
// })


/*
    https://reactnavigation.org/docs/params

    <TouchableOpacity onPress={() => navigation.navigate("ReviewDetails", item)}>
    Kısmındaki "item" dediğimiz şey, useState ile oluşturduğumuz film bilgilerinin tamamını kapsar
    Öncesinde useState ile obje oluşturmasaydık, direkt ReviewDetails'ten sonra virgül koyup o kısımda da obje oluşturabilirdik
    Home page'de bu filmlerden herhangi birinine tıklayınca bizi ReviewDetails sayfasına yönlendirecek
    ReviewDetails'e girince de sol üstte otomatikman geri dönme tuşu olacak

*/
/*
    __________ MODAL __________
    + tuşu ekleyip + ya basınca modal'ı açıp film eklemeyi sağlayacağız
    x tuşu ekleyio x ya basınca modal'ı kapamasını sağlayacağız
    Bunun için yukarıda useState ile state oluşturduk

    <Modal visible={modalOpen} animationType="slide">
    animationType'ın diğer özelliklerine bakmak için ctrl + space'e tıkla
*/
/*
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    Ekleyerek modal'da bir şey yazarken form elemanlarının dışında bir yere bastığımız zaman klavyenin kapanmasını sağladık
*/

