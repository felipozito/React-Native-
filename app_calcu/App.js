import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput } from "react-native";
import Button from "./Components/Button";
import Teclado from "./Components/keyboard";
import { useState } from "react";

export default function App() {
      const [num1, setNum1] = useState("0");
      const [num2, setNum2] = useState("0");
      const [operador, setOperador] = useState("");
      const [result, setResult] = useState("Resultado es :");

      const sumar = () => {
            setResult("la suma es : " + (parseInt(num1) + parseInt(num2)));
            setOperador("+");
      };
      const resta = () => {
            setResult("la resta es : " + (parseInt(num1) - parseInt(num2)));
            setOperador("-");
      };
      const multiplicacion = () => {
            setResult("la multiplicacion es : " + parseInt(num1) * parseInt(num2));
            setOperador("x");
      };
      const division = () => {
            setResult("la resta es : " + parseInt(num1) / parseInt(num2));
            setOperador("/");
      };
      const limpiar = () => {
            setNum1("0");
            setNum2("0");
            setResult("El Resultado es:");
            setOperador(" ");
      };

      return (
            <View style={styles.container}>
                  <View style={styles.numeros}>
                        <TextInput value={num1} onChangeText={setNum1} style={styles.txtinput} keyboardType="numeric"></TextInput>
                        <Text style={styles.result}>{operador}</Text>
                        <TextInput value={num2} onChangeText={setNum2} style={styles.txtinput} keyboardType="numeric"></TextInput>
                  </View>
                  <View style={styles.content_btn}>
                        <Button text={"+"} onPress={sumar}></Button>
                        <Button text={"-"} onPress={resta}></Button>
                        <Button text={"x"} onPress={multiplicacion}></Button>
                        <Button text={"/"} onPress={division}></Button>
                  </View>
                  <Button text={"limpiar"} onPress={limpiar} type="clean"></Button>
                  <Text style={styles.result}>{result}</Text>
                  <Teclado></Teclado>
                  <StatusBar style="auto" />
            </View>
      );
}

const styles = StyleSheet.create({
      container: {
            flex: 1,
            backgroundColor: "#6E4545",
            alignItems: "center",
            justifyContent: "center",
      },
      numeros: {
            flexDirection: "row",
            justifyContent: "center",
            textAlign: "center",
      },
      txtinput: {
            backgroundColor: "#867979",
            width: 80,
            height: 80,
            color: "#fff",
            justifyContent: "center",
            textAlign: "center",
            margin: 2,
            fontSize: 40,
            borderRadius: 50,
      },
      content_btn: {
            flexDirection: "row",
      },
      result: {
            margin: 20,
            fontSize: 40,
            fontWeight: "bold",
      },
});
