import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./Screen/Home";
import Productos from "./Screen/Productos";
import Contacts from "./Screen/Contacts";

export default function App() {
      const Stack = createNativeStackNavigator();
      const Tab = createBottomTabNavigator();
      return (
            <NavigationContainer>
                  <Stack.Navigator>
                        <Stack.Screen name="Home" component={Home} />
                        <Stack.Screen name="Productos" component={Productos} />
                        <Stack.Screen name="Contactos" component={Contacts} />
                  </Stack.Navigator>
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
