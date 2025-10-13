import React  from "react";
import {View, Text, Image} from "react-native";

function Image() {
    return <Image style= {styles.image}
                  source= {require("../../assets/zonaMedia.jpeg")}
                  resizeMode= "contain" />
}

const styles= StyleSheet.create({
    image:{
        height: 400,
    },
})
export default Image