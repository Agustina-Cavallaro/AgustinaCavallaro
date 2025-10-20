import React from "react";
import { Component } from "react";
import { Pressable, Text, View } from "react-native";
import { StyleSheet } from "react-native";
import { TextInput } from "react-native-web";


class Login extends Component {
    constructor(props){
        super(props)
          this.state={
            email: "",
            userName: "", 
            password: "", 
        }
    }

     onSubmit(){
        console.log(this.state);
        this.props.navigation.navigate("HomeMenu")
        
    }

    render(){
        return(
        <View style={styles.container}>
            <Pressable onPress={ ()=> this.props.navigation.navigate("Register")}>
                 <Text style={styles.linkText} >Ir a Register </Text>
            </Pressable>

             <Text style={styles.title}>Iniciar sesión</Text>

              <Pressable onPress={ ()=> this.props.navigation.navigate("HomeMenu")}>
                 <Text style={styles.texto2}> Entrar en la app </Text>
            </Pressable>
              <TextInput  style={styles.input}  keyboardType='email-address'  placeholder='email' onChangeText={ text => this.setState({email:text}) }value={this.state.email} />
              <TextInput   style={styles.input} keyboardType='default' placeholder='password'  secureTextEntry={true}  onChangeText={ text => this.setState({password:text}) }value={this.state.password}/> 
              <Pressable style={styles.button} onPress={() => this.onSubmit()}>
    
                    <Text>Login </Text>
 
            </Pressable>

              <View> 
                <Text> {this.state.email}</Text>
                <Text> {this.state.password}</Text>
            </View>


         </View>
        )
    }
    
}
const styles = StyleSheet.create({

  container: {
    paddingHorizontal: 10,
    marginTop: 20,
  },

  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },

  input: {
    height: 40, 
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderStyle: "solid",
    borderRadius: 6,
    marginVertical: 10,
  },


  button: {
    backgroundColor: "#28a745",
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "#28a745",
    alignItems: "center",
  },

  buttonText: {
    color: "#fff",
    textAlign: "center",
  },


  linkText: {
    color: "#007bff",
    marginBottom: 15,
  },


});

export default Login