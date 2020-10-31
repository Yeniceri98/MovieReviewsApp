import React from 'react'
import { StyleSheet, Text, View, Button, TextInput } from 'react-native'
import { globalStyles } from '../styles/Global';
import { Formik } from 'formik'; 
import * as yup from 'yup';
import FlatButton from '../shared/FlatButton';
import FlatButton2 from '../shared/FlatButton2';


/*
    _____ Yup Validation _____  
    Error mesajlarını JSX kısmındaki <TextInput> ların altındaki kısımda tanımladık ----->  <Text style={globalStyles.errorText}>{props.errors.title}</Text> )
    props.errors.title  ----->  Error mesajını yazdıracak
    props.touched.title  ----->  Bu kısmı eklemezsek text input'a yazmaya başlamadan da bize hatayı gösterir. Fakat burayı ekledik ve submit butonuna basana kadar hata mesajı gözükmez. Eğer hatalı giriş yaptıysak submit butonuna bastıktan sonra görürüz
    props.touched.title && props.errors.title  ----->  Bu şekilde ikisini beraber kullanırsak en güzel sonucu verir
    <TextInput> componentine "onBlur" property'sini ekledik ve böylelikle text inputları arasında geçiş yaparken hata yaptıysa bize error mesajını direk gösterdi
*/
const reviewSchema = yup.object().shape({
    title: yup.string().required("Title is required!").min(2),    // title'ın string, girilmesi şart (required) ve en az 2 karakterden oluşması gerektiği koşullarını ekledik. required kısmında yaptığımız gibi içlerine mesaj yazabiliriz
    body: yup.string().required("Body is required!").min(16),
    rating: yup.number().required("Rating must be between 1 and 10").test(val => {
        return val < 11 && val > 0;
    })
})

export default function ReviewForm({ addReview, closeModal }) {    // Home'dan gelen prop'ları burada aldık ve aşağıdaki Button kısmında kullandık. Birinde submit işlemini yapacak, diğerinde Home kısmına geri dönecek
    return (
        <View style={globalStyles.container}>
            <Formik 
                initialValues={{ title: "", body: "", rating: "" }}
                onSubmit={(values, actions) => {
                    addReview(values);      // Home'dan gelen addReviews
                    actions.resetForm();    // Submit butonuna bastığımız zaman text inputlara yazdığımız şeyler resetlenecek
                }}
                validationSchema={reviewSchema}    // Yup'u burada ekleyip yukarıda tanımladık
            >
                {(props) => (
                    <View>
                        <TextInput 
                            style={globalStyles.input}
                            placeholder="Review title"
                            onChangeText={props.handleChange("title")}
                            value={props.values.title}
                            onBlur={props.handleBlur("title")}    // Burası sayesinde ilgili text input'a veri girip başka bir text input'a tıklayınca hatalı giriş yaptıysak direkt gösterecek. Burası olmadan önce Submit butonuna basana kadar hatayı göstermiyordu
                        />
                        <Text style={globalStyles.errorText}>{props.touched.title && props.errors.title}</Text>   

                        <TextInput
                            multiline minHeight={60}
                            style={globalStyles.input}
                            placeholder="Review body"
                            onChangeText={props.handleChange("body")}
                            value={props.values.body}
                            onBlur={props.handleBlur("body")}
                        />
                        <Text style={globalStyles.errorText}>{props.touched.body && props.errors.body}</Text>
                        
                        <TextInput
                            keyboardType="numeric" 
                            style={globalStyles.input}
                            placeholder="Review rating (1-10)"
                            onChangeText={props.handleChange("rating")}
                            value={props.values.rating}
                            onBlur={props.handleBlur("rating")}
                        />
                        <Text style={globalStyles.errorText}>{props.touched.rating && props.errors.rating}</Text>

                        <FlatButton text="Submit" onPress={props.handleSubmit} />  
                        <FlatButton2 text="Turn back to Home page" onPress={closeModal} />  
                    </View>
                )}
            </Formik>
        </View>
    )
}


/*
    _____ CUSTOM BUTTON COMPONENT _____
    shared klasörünün içinde FlatButton.js ve FlatButton2.js adında 2 adet dosya oluşturarak custom buttonlar oluşturduk
    
    <FlatButton text="Submit" onPress={props.handleSubmit} />
    Burada "text" ve "onPress" proplarını FlatButton.js'e yolluyoruz
*/