import {
    ActivityIndicator,
    Keyboard,
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
  import { LOGIN_SCREEN } from "../constants";
  
  // TODO: Change to your user name	
  const API = "https://pcmob5-blog-api.chiawee.repl.co";	
  const API_LOGIN = "/auth";
  
  export default function SIGNUPScreen() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigation = useNavigation();
    const [errorText, setErrorText] = useState("");
    const [loading, setLoading] = useState(false);
  
    async function login() {	
      setLoading(true)
      Keyboard.dismiss();	
      try {	
        const response = await axios.post(API + API_LOGIN, {	
          username,	
          password,	
        });	
        await AsyncStorage.setItem("token", response.data.access_token);	
        setErrorText("")
        setLoading(false)
        navigation.navigate(PROFILE_SCREEN);	
      } catch (error) {
        setLoading(false)
        console.log(error.response);	
        setErrorText(error.response.data.description);	
      }
      setLoading(false)
    }
  
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Register new account</Text>
  
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
  
        <TextInput
          style={styles.inputView}
          placeholder="Password Confirm"
          secureTextEntry={true}
          value={password}
        //   onChangeText={(pw) => setPassword(pw)}
        />

        <TouchableOpacity style={styles.button} onPress={async () => {
          await login();
        }}>
          {loading ? (
              <ActivityIndicator style={styles.buttonText} />
          ) : (
              <Text style={styles.buttonText}>Register</Text>
          )}
        </TouchableOpacity>
        
        <Text style={styles.errorText}>{errorText}</Text>
  
        <TouchableOpacity>
        <Text style={styles.signupText} onPress={() =>  {
          navigation.navigate(LOGIN_SCREEN);
        }}>
          Already have an account? Log in here.</Text>
        </TouchableOpacity>
      </View>
    );
  }
  
  
  const styles = StyleSheet.create({
    errorText: {
      marginTop: 15,
      fontSize: 15,
      color: "red"
      },
    signupText: {
      marginTop: 10,
      fontSize: 15,
      color: "grey"
      },
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
      padding: 15,
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