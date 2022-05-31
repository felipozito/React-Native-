import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Button, Pressable } from "react-native";
import React, { useState } from "react";

export default function App() {
      const [show, setShow] = useState(styles.noShowText);
      const [peso, setPeso] = useState("ingrese en Kg");
      const [altura, setAltura] = useState("Ingrese en Cm");
      const [imc, setImc] = useState("");
      const [estado, setEstado] = useState("");
      let resp = 0;

      const funcion = () => {
            resp = (parseFloat(peso) / Math.pow(parseFloat(altura) / 100, 2)).toFixed(2);
            setImc(resp);
            console.log("IMC=" + imc);
            if (resp < 18.5) {
                  setEstado("Su peso es inferior al normal.");
            } else if (resp >= 18.5 && resp < 24.9) {
                  setEstado("Su peso es normal.");
            } else if (resp >= 24.9 && resp <= 29.9) {
                  setEstado("Su peso es superior al normal.");
            } else if (resp >= 30) {
                  setEstado("Tiene obesidad");
            }
            setShow(styles.showText);
      };
      const limpiar = () => {
            setPeso("Ingrese en Kg");
            setAltura("Ingrese en cm");
            setImc("");
            setEstado("");
            setShow(styles.noShowText);
      };

      return (
            <View style={styles.container}>
                  <Text style={styles.title}>Calculadora del índice de masa corporal (IMC) </Text>
                  <View style={styles.row}>
                        <Text style={styles.text}>PESO:</Text>
                        <TextInput style={styles.input} onChangeText={(item) => setPeso(item)} keyboardType="numeric" value={peso}></TextInput>
                  </View>
                  <View style={styles.row}>
                        <Text style={styles.text}>ALTURA:</Text>
                        <TextInput style={styles.input} onChangeText={(item) => setAltura(item)} keyboardType="numeric" value={altura}></TextInput>
                  </View>
                  <View style={styles.content_btn}>
                        <TouchableOpacity style={styles.btn} onPress={funcion}>
                              <Text style={styles.btn_text}>Calcular</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btn} onPress={limpiar}>
                              <Text style={styles.btn_text}>Limpiar</Text>
                        </TouchableOpacity>
                  </View>

                  <View style={show}>
                        <Text style={styles.result}>Su indice de masa coorporal es : {imc}</Text>
                        <Text style={styles.result}>{estado}</Text>
                  </View>

                  <StatusBar style="auto" />
            </View>
      );
}

const styles = StyleSheet.create({
      container: {
            flex: 1,
            backgroundColor: "#EDE2E2",
            alignItems: "center",
            justifyContent: "center",
            marginHorizontal: 20,
            marginTop: 40,
            marginBottom: 80,
            borderRadius: 20,
      },
      row: {
            margin: 0,
      },
      title: {
            fontSize: 30,
            fontWeight: "bold",
            marginVertical: 20,
            textAlign: "center",
      },
      text: {
            fontSize: 20,
            fontWeight: "bold",
            marginVertical: 10,
      },
      input: {
            width: 250,
            fontSize: 20,
            backgroundColor: "#fff",
            color: "#000000",
            borderWidth: 1,
            borderRadius: 10,
            marginVertical: 10,
            paddingHorizontal: 50,
            textAlign: "center",
            paddingVertical: 20,
      },
      content_btn: {
            flexDirection: "row",
      },
      btn: {
            fontSize: 20,
            backgroundColor: "#4C8ABD",
            borderRadius: 20,
            paddingHorizontal: 20,
            paddingVertical: 20,
            marginHorizontal: 20,
      },
      btn_text: {
            color: "#fff",
            fontWeight: "bold",
            fontSize: 20,
      },
      result: {
            fontSize: 20,
            fontWeight: "bold",
            marginBottom: 20,
      },
      showText: {
            display: "flex",
      },
      noShowText: {
            display: "none",
      },
});
