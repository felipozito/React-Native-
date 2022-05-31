import { StatusBar } from "expo-status-bar";
import { FlatList, StyleSheet, Text, View } from "react-native";

export default function App() {
      const productos = [
            { nombre: "Doritos", categorio: "Snaks", precioCompra: 0.4, precio: 0.5, id: 1 },
            { nombre: "Galac", categorio: "Golosina", precioCompra: 0.2, precio: 0.25, id: 2 },
            { nombre: "Coca-Cola", categorio: "Bebida", precioCompra: 2.2, precio: 2.5, id: 3 },
            { nombre: "chicles", categorio: "Golosina", precioCompra: 0.1, precio: 0.15, id: 4 },
            { nombre: "Tesalia", categorio: "Bebida", precioCompra: 0.3, precio: 0.5, id: 5 },
      ];
      return (
            <View style={styles.container}>
                  <Text style={styles.title}>Productos Mi Tienda</Text>
                  <View style={styles.flatlist}>
                        <FlatList
                              data={productos}
                              keyExtractor={(item) => item.id}
                              renderItem={({ item }) => (
                                    <View style={styles.content_item}>
                                          <Text style={styles.content_text}>
                                                {item.nombre} ({item.categorio})
                                          </Text>
                                          <Text style={{ paddingLeft: 20 }}>USD: {item.precio} $</Text>
                                    </View>
                              )}
                        ></FlatList>
                  </View>
                  <StatusBar style="auto" />
            </View>
      );
}

const styles = StyleSheet.create({
      container: {
            flex: 1,
            backgroundColor: "#BFD1E5",
            alignItems: "center",
            justifyContent: "space-evenly",
            width: "100%",
      },
      title: {
            marginVertical: 10,
            fontSize: 50,
            fontWeight: "bold",
            flex: 0.5,
            textAlign: "center",
      },
      flatlist: {
            flex: 2.5,
            width: "90%",
      },
      content_item: {
            backgroundColor: "#7DB2EC",
            width: "100%",
            marginVertical: 10,
            paddingBottom: 10,
            borderRadius: 10,
            borderWidth: 2,
      },
      content_text: {
            paddingTop: 10,
            paddingLeft: 20,
            fontSize: 20,
            fontWeight: "bold",
            color: "#fff",
      },
});
