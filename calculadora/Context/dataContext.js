import React, { createContext, useState, useContext } from "react";

export const DataContext = createContext();

export function DataContextProvaider(props) {
      const [num1, setNum1] = useState("");
      const [num2, setNum2] = useState("");
      const [operacion, setOperacion] = useState("");
      const [result, setResult] = useState("");
      const [ecuacion, setEcuacion] = useState("");

      return (
            <DataContext.Provider value={{ num1, setNum1, num2, setNum2, operacion, setOperacion, result, setResult, ecuacion, setEcuacion }}>
                  {props.children}
            </DataContext.Provider>
      );
}

// export function useDataContext() {
//       const context = useContext(DataContext);

//       return context;
// }
