import React, { useContext } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { DataContext } from "../Context/dataContext.js";

const Button = (props) => {
      const { num1, setNum1, num2, setNum2, setOperacion, operacion, setResult, result, ecuacion, setEcuacion } = useContext(DataContext);
      return (
            <TouchableOpacity
                  style={props.type === "clean" ? styles.btn_limpiar : styles.btn}
                  onPress={() => {
                        let simbol, n1, n2;
                        setNum1(num1 + props.text);
                        n1 = num1;
                        if (props.text === "+" || props.text === "-" || props.text === "x" || props.text === "/") {
                              setNum2(n1);
                              setOperacion(props.text);
                              simbol = operacion;
                              setEcuacion(num2 + simbol);
                              setNum1("");
                        }
                        if (props.text === "=") {
                              switch (simbol) {
                                    case "+":
                                          setResult(parseInt(num2) + parseInt(num1));
                                          setEcuacion(ecuacion + num1 + result);
                                          setNum1(result);
                                          break;
                                    case "-":
                                          setResult(parseInt(num2) - parseInt(num1));
                                          setEcuacion(ecuacion + num1 + result);
                                          setNum1(result);
                                          break;
                                    case "*":
                                          setResult(parseInt(num2) * parseInt(num1));
                                          setEcuacion(ecuacion + num1 + result);
                                          setNum1(result);
                                          break;
                                    case "/":
                                          setResult(parseInt(num2) / parseInt(num1));
                                          setEcuacion(ecuacion + num1 + result);
                                          setNum1(result);
                                          break;
                                    default:
                                          break;
                              }
                        }
                        if (props.text === "ac") {
                              setNum1("");
                              setNum1("");
                              setResult("");
                              setEcuacion("");
                              setOperacion("");
                        }
                  }}
                  type={props.type}
            >
                  <Text style={styles.btn_text}>{props.text}</Text>
            </TouchableOpacity>
      );
};
const styles = StyleSheet.create({
      btn: {
            height: 80,
            width: 80,
            borderRadius: 50,
            backgroundColor: "#2A1414",
            justifyContent: "center",
            alignItems: "center",
      },
      btn_limpiar: {
            height: 80,
            width: 160,
            borderRadius: 50,
            backgroundColor: "#2A1414",
            justifyContent: "center",
            alignItems: "center",
      },
      btn_text: {
            color: "#fff",
            fontSize: 40,
      },
});

export default Button;
