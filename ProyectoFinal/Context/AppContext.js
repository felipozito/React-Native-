import React, { useState, createContext } from "react";

export const AppContext = createContext();

export const AppContextProvaider = (props) => {
      const [nombre, setNombre] = useState("dasd");
      const [apellido, setApellido] = useState();
      const [cedula, setCedula] = useState();
      const [nombreMateria, setNombreMateria] = useState("");
      const [materia, setMateria] = useState("");
      const [nota, setNota] = useState("");

      return (
            <AppContext.Provider
                  value={
                        (nombre,
                        apellido,
                        cedula,
                        nombreMateria,
                        materia,
                        nota,
                        setNombre,
                        setApellido,
                        setMateria,
                        setCedula,
                        setNombreMateria,
                        setNota)
                  }
            >
                  {props.children}
            </AppContext.Provider>
      );
};
