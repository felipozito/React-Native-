import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import RootNav from "./Screen/RootNav";

export default function App() {
      return (
            <NavigationContainer>
                  <Text>Open up App.js to start working on your app!</Text>
                  <RootNav />
            </NavigationContainer>
      );
}

const styles = StyleSheet.create({
      container: {
            flex: 1,
            backgroundColor: "#fff",
            alignItems: "center",
            justifyContent: "center",
      },
});
