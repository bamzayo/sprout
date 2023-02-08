import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  Image,
  Keyboard,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from "react-native";
import icon from "../../assets/icon.png";
import TextInput from "../components/TextInput";
import Button from "../components/Button";

const SetUp = ({ navigation }) => {
  const [name, onChangeName] = useState("");
  const [email, onChangeEmail] = useState("");
  const [emailError, setEmailError] = useState(null);
  const [nameError, setNameError] = useState(null);

  const handleSignUp = () => {
    if (name.length < 1 && email.length < 1) {
      setNameError("Name is required!");
      setEmailError("Email is required!");
      return;
    } else if (name.length < 1) {
      setNameError("Name is required!");
      return;
    } else if (email.length < 1) {
      setEmailError("Email is required!");
      return;
    } else if (name.length < 3) {
      setNameError("Invalid Name!");
      return;
    } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      setEmailError(" Invalid Email!");
      return;
    }
    navigation.navigate("profile", { name: name, email: email });
  };

  const handleOnChangedName = (text) => {
    setNameError(null);
    onChangeName(text);
  };
  const handleOnChangedEmail = (text) => {
    setEmailError(null);
    onChangeEmail(text);
  };

  return (
    <ScrollView contentContainerStyle={styles.main}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.container}>
            <Image resizeMode="cover" style={styles.icon} source={icon} />
            <Text style={styles.text}>Set Up Profile</Text>
            <TextInput
              error={nameError}
              onChangeText={handleOnChangedName}
              value={name}
              placeholder="Name"
            />
            <TextInput
              onChangeText={handleOnChangedEmail}
              value={email}
              placeholder="Email"
              error={emailError}
            />
            <Button
              onPress={handleSignUp}
              style={{ paddingVertical: 7, width: "67%" }}
              textStyle={{ fontSize: 14, fontWeight: "500" }}
              title="LOGIN"
              type="lock"
            />
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: 100,
    height: 100,
    marginBottom: 30,
  },

  main: {
    flex: 1,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },

  container: {
    width: "100%",
    paddingHorizontal: "10%",
    height: "100%",
    justifyContent: "center",
    margin: "auto",
    alignItems: "center",
  },

  text: {
    color: "#cf1383",
    fontWeight: "700",
    fontSize: 32,
    marginBottom: 30,
  },
});

export default SetUp;
