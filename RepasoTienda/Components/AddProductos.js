import { View, Text, TextInput, StyleSheet, Alert } from "react-native";
import { ProductosContext } from "../Context/ProductosContext";
import React, { useContext } from "react";
import Boton from "./Boton";

const AddProductos = () => {
      const {
            productos,
            setProductos,
            setNuevo,
            nuevo,
            categoria,
            setCategoria,
            codigo,
            setCodigo,
            nombre,
            setNombre,
            precioVenta,
            setPrecioVenta,
            precioCompra,
            setPrecioCompra,
      } = useContext(ProductosContext);
      let result;
      const Agregar = () => {
            if (categoria == null || nombre == null || codigo == null || precioCompra == null) {
                  Alert.alert("Todos los campos son Requeridos");
            } else {
                  if (nuevo) {
                        // setPrecioVenta(result);
                        const newProduct = {
                              codigo: codigo,
                              nombre: nombre,
                              categoria: categoria,
                              precioCompra: precioCompra,
                              precioVenta: result,
                        };
                        setProductos([...productos, newProduct]);
                  } else {
                        const editProduct = productos.map((product) => {
                              if (product.codigo == codigo) {
                                    product.nombre = nombre;
                                    product.categoria = categoria;
                                    product.precioCompra = precioCompra;
                                    product.precioVenta = result;
                                    return product;
                              } else {
                                    return product;
                              }
                        });
                        setProductos(editProduct);
                  }
                  Limpiar();
            }
      };
      const Limpiar = () => {
            setCategoria(null);
            setCodigo(null);
            setNombre(null);
            setPrecioVenta(null);
            setPrecioCompra(null);
            setNuevo(true);
      };
      const price = () => {
            if (precioCompra != null) {
                  result = (parseFloat(precioCompra) + parseFloat(precioCompra) * 0.2).toString();
            } else {
                  result = null;
            }
            return result;
      };
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
                        <TextInput style={styles.input} placeholder="PRODUCTO" onChangeText={setNombre} value={nombre}></TextInput>
                        <TextInput style={styles.input} placeholder="CATEGORIA" onChangeText={setCategoria} value={categoria}></TextInput>
                        <TextInput
                              style={styles.input}
                              placeholder="PRECION DE COMPRA"
                              onChangeText={setPrecioCompra}
                              value={precioCompra}
                              keyboardType="numeric"
                        ></TextInput>
                        <TextInput style={styles.input} placeholder="PRECIO DE VENTA" value={price()} editable={false}></TextInput>
                  </View>
                  <View style={styles.content_btn}>
                        <Boton title={nuevo ? "Agregar" : "Modificar"} type={"1"} onPress={Agregar} />
                        <Boton title={"Nuevo"} type={"1"} onPress={Limpiar} />
                        <Text style={styles.result}>{"Producto: " + productos.length}</Text>
                  </View>
            </View>
      );
};

export default AddProductos;
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
