import React, { useContext, useState } from "react";
import Button from "./Button";
import { StyleSheet, View, Text, FlatList } from "react-native";
import { DataContext } from "../Context/dataContext.js";

const keyboard = () => {
      const { num1, ecuacion } = useContext(DataContext);

      const productos = [
            {
                  char: "ac",
                  id: "001",
            },
            {
                  char: "%",
                  id: "002",
            },
            {
                  char: "^2",
                  id: "003",
            },
            {
                  char: "/",
                  id: "004",
            },
            {
                  char: "7",
                  id: "005",
            },
            {
                  char: "8",
                  id: "006",
            },
            {
                  char: "9",
                  id: "007",
            },
            {
                  char: "x",
                  id: "008",
            },
            {
                  char: "4",
                  id: "009",
            },
            {
                  char: "5",
                  id: "010",
            },
            {
                  char: "6",
                  id: "011",
            },
            {
                  char: "-",
                  id: "012",
            },
            {
                  char: "1",
                  id: "013",
            },
            {
                  char: "2",
                  id: "014",
            },
            {
                  char: "3",
                  id: "015",
            },
            {
                  char: "+",
                  id: "016",
            },
            {
                  char: "ac",
                  id: "017",
            },
            {
                  char: "0",
                  id: "018",
            },
            {
                  char: ".",
                  id: "019",
            },
            {
                  char: "=",
                  id: "20",
            },
      ];

      return (
            <View style={styles.content}>
                  <View style={styles.screen}>
                        <Text style={styles.text_second}>{ecuacion}</Text>
                        <Text style={styles.text_main}>{num1}</Text>
                  </View>
                  <View style={styles.keyboard}>
                        <FlatList
                              style={styles.content_button}
                              data={productos}
                              keyExtractor={(item) => item.id}
                              renderItem={({ item }) => <Button text={item.char}></Button>}
                              numColumns={4}
                        ></FlatList>
                  </View>
            </View>
      );
};

const styles = StyleSheet.create({
      content: {
            flex: 0.8,
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
      },
      keyboard: {
            width: "100%",
            flexDirection: "row",
            backgroundColor: "#2A1A1A",
            paddingLeft: 30,
      },
      screen: {
            width: "100%",
            height: 80,
            justifyContent: "flex-end",
            alignItems: "flex-end",
            borderRadius: 10,
            borderWidth: 2,
            borderColor: "#2A1414",
      },
      text_main: {
            fontSize: 50,
      },
      text_Second: {
            fontSize: 30,
      },
});
export default keyboard;
