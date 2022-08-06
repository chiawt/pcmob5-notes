import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { LOGIN_SCREEN } from "../constants";

export default function ProfileScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>profile</Text>
      <Text style={{ fontSize: 20, fontWeight: "700", marginBottom: 10 }}>
        your user name
      </Text>
      <View style={{ flex: 1 }} />
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate(LOGIN_SCREEN);
          AsyncStorage.removeItem("token");
        }}
      >
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

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
    marginBottom: 20,
  },
  outlinedButton: {
    borderRadius: 3,
    borderWidth: 1,
    width: 120,
  },
  outlinedButtonText: {
    textAlign: "center",
    fontWeight: "600",
    fontSize: 12,
    padding: 15,
    color: "black",
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