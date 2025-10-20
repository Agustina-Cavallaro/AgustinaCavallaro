import React from "react";
import { Component } from "react";
import { Text } from "react-native";
import DynamicForm from "../components/DynamicForm";
import { View } from "react-native-web";

class Home extends Component {

    constructor(props){
        super(props)
    }

    render(){
        console.log(this.props);
        
        return(
            <View> 
                <Text> Home </Text>

                <DynamicForm props={this.props}/>
            </View>
        )
    }
}

export default Home