import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
const Button = ({ title, style, type, onPress, textStyle }) => {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      {type === "lock" && <MaterialIcons name="lock" size={12} color="#fff" />}
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    padding: 10,
    width: "100%",
    borderRadius: 21,
    backgroundColor: "#cf1383",
  },
  text: {
    marginLeft: 10,
    fontSize: 20,
    fontWeight: "700",
    color: "#fff",
  },
});
export default Button;
