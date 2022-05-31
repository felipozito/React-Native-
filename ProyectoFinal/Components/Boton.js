import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

const Boton = (props) => {
      return (
            <TouchableOpacity onPress={props.onPress} style={styles.container_btn}>
                  <Text style={styles.text}>{props.title}</Text>
            </TouchableOpacity>
      );
};

export default Boton;

const styles = StyleSheet.create({
      container_btn: {
            backgroundColor: "#5497E3",
            alignItems: "center",
            justifyContent: "center",
            width: 100,
            height: 40,
            margin: 10,
            borderRadius: 20,
      },
      text: {
            fontWeight: "bold",
            color: "white",
      },
});
