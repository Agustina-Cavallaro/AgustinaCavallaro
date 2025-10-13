import React, { Component } from "react";
import { Pressable, StyleSheet, Text } from "react-native";


class BotonSaludar extends Component{

    saludar(){
        console.log("me clickearon");
    }

    render(){
        return(
            <Pressable style={styles.boton} onPress={()=> this.saludar()}> 
                <Text style={styles.texto}> Clickeame </Text>
            </Pressable>
        )
    }
}

const styles= StyleSheet.create({
    boton: {
        backgroundColor: "grey",
        padding: 7,
        borderRadius: 4
    }, 
    texto:{
        color: "black", 
        fontWeight: "bold"
    }
})


export default BotonSaludar