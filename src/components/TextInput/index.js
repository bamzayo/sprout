import React from "react";
import { StyleSheet, Text, TextInput as RNTextInput, View } from "react-native";

const TextInput = ({ onChangeText, text, error, placeholder }) => {
  return (
    <View style={{ width: "100%", marginBottom: 30 }}>
      <RNTextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder={placeholder}
        label="Email"
      />

      <Text style={styles.error}>{error}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  error: {
    fontSize: 12,
    color: "#be0f62",
    marginTop: 6,
    fontWeight: "500",
    marginLeft: 5,
  },
  input: {
    borderColor: "#cf1383",
    height: 50,
    borderRadius: 4,
    width: "100%",
    margin: 4,
    borderWidth: 1,
    padding: 10,
  },
});

export default TextInput;
