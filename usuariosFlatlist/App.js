import React, { useContext } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, FlatList } from "react-native";
import AddUser from "./Components/addUser";
import Users from "./Components/Users";
import { UserContextProvaider, UserContext } from "./Context/userContext";

export default function App() {
      return (
            <UserContextProvaider>
                  <View style={styles.container}>
                        <View style={styles.content_title}>
                              <Text>Basa De Datos Ususarios</Text>
                        </View>
                        <View style={styles.content_input}>
                              <AddUser />
                        </View>
                        <View style={styles.content_flatList}>
                              <Users />
                        </View>
                        <View style={styles.footer}>
                              <Text>Design by FA</Text>
                        </View>

                        <StatusBar style="auto" />
                  </View>
            </UserContextProvaider>
      );
}
const styles = StyleSheet.create({
      container: {
            flex: 1,
            backgroundColor: "#DBEBF7",
            alignItems: "center",
            justifyContent: "center",
            padding: 10,
      },
      content_title: {
            flex: 0.5,
      },
      content_input: {
            flex: 5,
            width: "100%",
      },
      content_flatList: {
            flex: 15,
            width: "100%",
      },
      footer: {
            flex: 1,
      },
});
