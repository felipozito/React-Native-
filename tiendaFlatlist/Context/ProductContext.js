import React, { useState, createContext } from "react";

export const ProductosContext = createContext();

export function ProductosContextProvaider(props) {
      const [codigo, setCodigo] = useState();
      const [nombre, setNombre] = useState();
      const [categoria, setCategoria] = useState();
      const [precioCompra, setPrecioCompra] = useState();
      const [precioVenta, setPrecioVenta] = useState();
      const [productos, setProductos] = useState([
            {
                  codigo: "1",
                  nombre: "Cachitos",
                  categoria: "Snacks",
                  precioCompra: "0.5",
                  precioVenta: "0.6",
            },
            {
                  codigo: "2",
                  nombre: "Rufles",
                  categoria: "Snacks",
                  precioCompra: "0.5",
                  precioVenta: "0.6",
            },
      ]);
      const [nuevo, setNuevo] = useState(true);
      return (
            <ProductosContext.Provider
                  value={{
                        nombre,
                        setNombre,
                        codigo,
                        setCodigo,
                        categoria,
                        setCategoria,
                        precioCompra,
                        precioVenta,
                        setPrecioCompra,
                        setPrecioVenta,
                        productos,
                        setProductos,
                        nuevo,
                        setNuevo,
                  }}
            >
                  {props.children}
            </ProductosContext.Provider>
      );
}
