import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";

const boton = (props) => {
      return (
            <View>
                  <TouchableOpacity style={styles.btn} onPress={props.onPress}>
                        <Text style={styles.btn_text}>{props.title}</Text>
                  </TouchableOpacity>
            </View>
      );
};

export default boton;

const styles = StyleSheet.create({
      btn: {
            backgroundColor: "#56A2F7",
            borderRadius: 50,
            padding: 8,
            width: 100,
      },
      btn_text: {
            fontSize: 16,
            fontWeight: "bold",
            textAlign: "center",
      },
});
