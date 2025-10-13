import React from "react";
import {Text} from "react-native"
import { View } from "react-native";
import { StyleSheet } from "react-native";
import { Image } from "react-native";

function Card(props) {
    return(
        <View style={styles.container}>
            <Text> nombre del producto : {props.data.title} </Text>
            <Text> precii del producto : {props.data.price} </Text>
            <Text> descripcion del producto : {props.data.description} </Text>
            <Text> categoria del producto : {props.data.category} </Text>
             <Image style= {styles.image}
                        source={{ uri: props.data.image }}
                        resizeMode= "contain" />
        </View>
    )
}

const styles= StyleSheet.create({
    container:{
        textAlign: "center", 
        padding: 10
    }, 
    zona:{
        padding:4, 
        backgroundColor: "#ccc",
        marginBottom: 10, 
        borderRadius:4,
        fontWeight:"bold"
    },
      image:{
        height: 400,
        width: "100%"
    },
})

export default Card; 