import { View, Text, StyleSheet, TextInput, Alert } from "react-native";
import React, { useContext, useEffect } from "react";
import { ProductosContext } from "../Context/ProductContent";
import Boton from "./boton";

const addProducto = (props) => {
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
      const agregar = () => {
            if (nuevo) {
                  if (codigo == null || nombre == null || categoria == null || precioCompra == null) {
                        Alert.alert("Todos los campos son requeridos");
                  } else {
                        const product = {
                              codigo: codigo,
                              nombre: nombre,
                              categoria: categoria,
                              precioCompra: precioCompra,
                              precioVenta: precioVenta,
                        };
                        setProductos([...productos, product]);
                        limpiar();
                  }
            } else {
                  const productomod = productos.map((item) => {
                        if (item.codigo === codigo) {
                              item.nombre = nombre;
                              item.categoria = categoria;
                              item.precioCompra = precioCompra;
                              return item;
                        } else {
                              return item;
                        }
                  });
                  setProductos(productomod);
            }
      };

      const limpiar = () => {
            setNombre(null);
            setCategoria(null);
            setPrecioCompra(null);
            setPrecioVenta(null);
            setCodigo(null);
            setNuevo(true);
      };
      function price() {
            let n1 = parseFloat(precioCompra);
            let n2 = parseFloat(precioCompra) * 0.2;
            let price = (n1 + n2).toString();
            setPrecioVenta(price);
            return precioVenta;
      }
      let aux = false;
      return (
            <View>
                  <Text style={{ fontSize: 20, textAlign: "center" }}>Productos</Text>
                  <View style={styles.content_input}>
                        <TextInput
                              style={styles.input}
                              placeholder="CODIGO"
                              onChangeText={setCodigo}
                              value={codigo}
                              editable={nuevo}
                              keyboardType="numeric"
                        ></TextInput>
                        <TextInput style={styles.input} placeholder="NOMBRE" onChangeText={setNombre} value={nombre}></TextInput>
                        <TextInput style={styles.input} placeholder="CATEGORIA" onChangeText={setCategoria} value={categoria}></TextInput>
                        <TextInput
                              style={styles.input}
                              placeholder="PRECIO DE COMPRA"
                              onChangeText={(item) => {
                                    let char = item;
                                    setPrecioCompra(char);
                              }}
                              value={precioCompra}
                              keyboardType="numeric"
                        ></TextInput>
                        <TextInput
                              style={styles.input}
                              placeholder="PRECIO DE VENTA"
                              editable={false}
                              value={price()}
                              onChangeText={setPrecioVenta}
                        ></TextInput>
                  </View>
                  <View style={styles.content_btn}>
                        <Boton title={nuevo ? "Agregar" : "Modificar"} onPress={agregar} type={"1"} />
                        <Boton title={"Nuevo"} onPress={limpiar} type={"1"} />
                        <Text style={styles.result}>{"Producto: " + productos.length}</Text>
                  </View>
            </View>
      );
};

export default addProducto;

const styles = StyleSheet.create({
      content_btn: {
            flexDirection: "row",
            justifyContent: "space-evenly",
      },
      input: {
            borderWidth: 2,
            borderRadius: 10,
            margin: 1,
            paddingHorizontal: 10,
            paddingVertical: 16,
            marginVertical: 4,
      },
      result: {
            fontWeight: "bold",
            fontSize: 20,
            textAlignVertical: "center",
      },
});
