import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

const Boton = (props) => {
      return (
            <TouchableOpacity
                  onPress={props.onPress}
                  style={props.type == "1" ? styles.btn1 : props.type == "2" ? styles.btn2 : styles.btn3}
                  type={props.type}
            >
                  <Text style={styles.btn_text}>{props.title}</Text>
            </TouchableOpacity>
      );
};

export default Boton;
const styles = StyleSheet.create({
      btn1: {
            backgroundColor: "#56A2F7",
            borderRadius: 50,
            padding: 8,
            width: 100,
            paddingVertical: 15,
      },
      btn2: {
            backgroundColor: "#4DDD41",
            width: 50,
            height: 50,
            borderRadius: 50,
            justifyContent: "center",
      },
      btn3: {
            backgroundColor: "#DD4141",
            width: 50,
            height: 50,
            borderRadius: 50,
            justifyContent: "center",
            marginHorizontal: 10,
      },
      btn_text: {
            fontSize: 16,
            fontWeight: "bold",
            textAlign: "center",
      },
});
