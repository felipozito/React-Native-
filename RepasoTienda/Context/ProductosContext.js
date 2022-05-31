import React, { createContext, useState } from "react";

export const ProductosContext = createContext();
export function ProductosContextProvaider(props) {
      const [nuevo, setNuevo] = useState(true);
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
      return (
            <ProductosContext.Provider
                  value={{
                        productos,
                        setProductos,
                        setNuevo,
                        nuevo,
                        codigo,
                        setCodigo,
                        nombre,
                        setNombre,
                        categoria,
                        setCategoria,
                        precioCompra,
                        setPrecioCompra,
                        precioVenta,
                        setPrecioVenta,
                  }}
            >
                  {props.children}
            </ProductosContext.Provider>
      );
}
