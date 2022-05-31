import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import AddProductos from "./Components/AddProductos";
import Productos from "./Components/Productos";
import { ProductosContextProvaider } from "./Context/ProductosContext";

export default function App() {
      return (
            <ProductosContextProvaider>
                  <View style={styles.container}>
                        <View style={styles.content_title}>
                              <Text>TIENDA REPASO</Text>
                        </View>
                        <View style={styles.content_input}>
                              <ScrollView>
                                    <AddProductos />
                              </ScrollView>
                        </View>
                        <View style={styles.content_flatList}>
                              <Productos />
                        </View>
                        <View style={styles.footer}>
                              <Text>Design by FelipeAsimbaya</Text>
                        </View>

                        <StatusBar style="auto" />
                  </View>
            </ProductosContextProvaider>
      );
}

const styles = StyleSheet.create({
      container: {
            flex: 1,
            backgroundColor: "#DBEBF7",
            alignItems: "center",
            justifyContent: "center",
      },
      content_title: {
            flex: 2,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#418FDD",
            width: "100%",
            paddingTop: 12,
      },
      content_input: {
            flex: 8,
            width: "100%",
            padding: 10,
      },
      content_flatList: {
            flex: 8,
            width: "100%",
            padding: 10,
      },
      footer: {
            width: "100%",
            backgroundColor: "#418FDD",
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
      },
      scroll: {
            width: "100%",
            flex: 1,
      },
});
