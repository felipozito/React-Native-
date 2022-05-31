import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";

const Button = (props) => {
      return (
            <TouchableOpacity onPress={props.onPress} style={[styles.btn_content]}>
                  <Text style={styles.btn_text}>{props.nombre}</Text>
            </TouchableOpacity>
      );
};

export default Button;

const styles = StyleSheet.create({
      btn_content: {
            borderRadius: 20,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: 10,
      },
      danger: {
            backgroundColor: "red",
      },
      succes: {
            backgroundColor: "green",
      },
      primary: {
            backgroundColor: "blue",
      },

      btn_text: {
            color: "white",
      },
});
