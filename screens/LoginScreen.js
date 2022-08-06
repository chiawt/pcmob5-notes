import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";	
import axios from "axios";	
import AsyncStorage from "@react-native-async-storage/async-storage";	
import { PROFILE_SCREEN } from "../constants";	

// TODO: Change to your user name	
const API = "https://pcmob5-blog-api.chiawee.repl.co";	
const API_LOGIN = "/auth";

export default function LoginScreen() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login to your account</Text>

      <TextInput
        style={styles.inputView}
        placeholder="Email"
        value={username}
        onChangeText={(username) => setUsername(username)}
      />

      <TextInput
        style={styles.inputView}
        placeholder="Password"
        secureTextEntry={true}
        value={password}
        onChangeText={(pw) => setPassword(pw)}
      />

      <TouchableOpacity style={styles.button} onPress={() => {}}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

export const LOGIN_SCREEN = "LOGIN_SCREEN";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 100,
    padding: 25,
  },
  title: {
    fontWeight: "bold",
    fontSize: 40,
    marginBottom: 50,
  },
  inputView: {
    backgroundColor: "#F1F0F5",
    borderRadius: 5,
    marginBottom: 30,
    padding: 20,
  },
  button: {
    backgroundColor: "black",
    borderRadius: 15,
    width: "100%",
  },
  buttonText: {
    textAlign: "center",
    fontWeight: "400",
    fontSize: 17,
    padding: 20,
    color: "white",
  },
});