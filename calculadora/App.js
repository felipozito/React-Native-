import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import Keyboard from "./Components/keyboard";
import { DataContextProvaider, DataContext } from "./Context/dataContext.js";

export default function App() {
      return (
            <DataContextProvaider>
                  <View style={styles.container}>
                        <View style={styles.title}>
                              <Text>CALCULADORA</Text>
                        </View>
                        <Keyboard></Keyboard>
                        <StatusBar style="auto" />
                  </View>
            </DataContextProvaider>
      );
}

const styles = StyleSheet.create({
      container: {
            flex: 1,
            backgroundColor: "#fff",
            alignItems: "center",
            justifyContent: "center",
      },
      title: {
            flex: 0.2,
            width: "100%",
            backgroundColor: "#EE7676",
      },
});
