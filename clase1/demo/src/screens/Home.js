import React from "react";
import {Text} from "react-native"
import { View } from "react-native-web";
import BotonSaludar from "../components/BotonSaludar";
import Contador from "../components/Contador";
import { StyleSheet } from "react-native";

function Home() {
    return(
        <View style={styles.container}>
            <View style={styles.zona}> 
                <Text> Hola mundo </Text>
                <BotonSaludar/> 
                <Contador/>
            </View>
            
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
    }
})

export default Home; 