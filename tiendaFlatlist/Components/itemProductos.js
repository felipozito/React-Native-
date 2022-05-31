import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import Boton from "./boton";

import { ProductosContext } from "../Context/ProductContent";

const ItemProducto = (props) => {
      const {
            setNombre,
            setCategoria,
            setCodigo,
            setPrecioCompra,
            setPrecioVenta,
            nombre,
            categoria,
            codigo,
            precioCompra,
            precioVenta,
            nuevo,
            setNuevo,
            productos,
            setProductos,
      } = useContext(ProductosContext);
      return (
            <View style={[styles.content_item]}>
                  <Text style={styles.content_id}>{props.object.codigo}</Text>
                  <View style={styles.content_text}>
                        <Text style={styles.nombre}>{props.object.nombre}</Text>
                        <Text style={styles.ci}>{props.object.categoria}</Text>
                  </View>
                  <Text style={styles.cantidad}>{props.object.precio} $</Text>
                  <Boton
                        title="M"
                        onPress={() => {
                              setNombre(props.object.nombre);
                              setCategoria(props.object.categoria);
                              setPrecioCompra(props.object.precioCompra);
                              setPrecioVenta(props.object.precioVenta);
                              setCodigo(props.object.codigo);
                              setNuevo(false);
                        }}
                        type={"2"}
                  />
                  <Boton
                        title="x"
                        onPress={() => {
                              setProductos(productos.filter((product) => product.codigo !== props.object.codigo));
                        }}
                        type={"3"}
                  />
            </View>
      );
};

export default ItemProducto;

const styles = StyleSheet.create({
      content_item: {
            backgroundColor: "#Dee9fd",
            margin: 4,
            flexDirection: "row",
            alignItems: "center",
            borderRadius: 50,
            overflow: "hidden",
            borderWidth: 1,
            height: 60,
      },
      content_id: {
            flex: 1,
            backgroundColor: "#A1D1F5",
            textAlign: "center",
            textAlignVertical: "center",
            height: "100%",
            paddingHorizontal: 10,
            paddingTop: 10,
            fontWeight: "bold",
      },
      content_text: {
            flex: 7,
            padding: 10,
      },
      nombre: {
            fontSize: 16,
            fontWeight: "bold",
      },
      ci: {
            fontStyle: "italic",
      },
      cantidad: {
            fontSize: 20,
            fontWeight: "bold",
            paddingHorizontal: 10,
            fontStyle: "italic",
      },
});
