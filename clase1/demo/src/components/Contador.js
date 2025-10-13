import React from "react";
import { Component } from "react";
import { Text } from "react-native";
import { Pressable } from "react-native";
import { View } from "react-native";
import { StyleSheet } from "react-native";

class Contador extends Component{
    constructor(props){
        super(props)
        this.state = {
            contador: 0
        }
    }
    contador(){
       this.setState({
            contador: this.state.contador + 1
       })
    }
    render(){
        return(
            <View style={styles.container}>
                <Text>Cantidad de clicks: {this.state.contador}</Text>
                <Pressable style= {styles.boton}onPress={()=>this.contador()}>
                    <Text style= {styles.texto}>Click aqui para contar</Text>
                </Pressable>
            </View>
        )
    }
}

const styles= StyleSheet.create({
    boton: {
        backgroundColor: "rgba(0, 255, 0, 0.5)",
        padding: 7,
        marginBottom: 10,
        borderRadius:4
    }, 
    texto:{
        color: "black", 
    }, 
    container:{
        marginVertical: 5
    }
})
export default Contador
