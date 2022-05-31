import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { loadFirebaseConfiguration } from "./Utils/firebaseConfig";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./Screens/Home";
import IngresarNotas from "./Screens/IngresarNota";
import IngresarPersonas from "./Screens/IngresarPersonas";
import ListaPersonas from "./Screens/ListaPersonas";
import ListaNotas from "./Screens/ListaNotas";
import { AppContextProvaider } from "./Context/AppContext";

const Stack = createNativeStackNavigator();

export default function App() {
      loadFirebaseConfiguration();
      return (
            <AppContextProvaider>
                  <NavigationContainer>
                        <Stack.Navigator>
                              <Stack.Screen name="Home" component={Home} />
                              <Stack.Screen name="ListaPersonas" component={ListaPersonas} />
                              <Stack.Screen name="IngresarPersonas" component={IngresarPersonas} />
                              <Stack.Screen name="ListaNotas" component={ListaNotas} />
                              <Stack.Screen name="IngresarNotas" component={IngresarNotas} />
                        </Stack.Navigator>
                        <StatusBar style="auto" />
                  </NavigationContainer>
            </AppContextProvaider>
      );
}

// const styles = StyleSheet.create({
//       container: {
//             flex: 1,
//             backgroundColor: "#fff",
//             alignItems: "center",
//             justifyContent: "center",
//       },
// });
