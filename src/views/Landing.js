import React from "react";
import {
  Text,
  StyleSheet,
  View,
  Image,
  ImageBackground,
  StatusBar,
} from "react-native";
import image from "../../assets/background.png";
import icon from "../../assets/icon.png";
import Button from "../components/Button";

const Landing = ({ navigation }) => {
  const handleLogin = () => {
    navigation.navigate("setup");
  };
  const handleSignUp = () => {
    navigation.navigate("setup");
  };

  return (
    <ImageBackground
      source={image}
      resizeMode="cover"
      style={[styles.image, styles.absoluteFillObject]}
    >
      <View style={styles.container}>
        <Image resizeMode="cover" style={styles.icon} source={icon} />
        <Text style={styles.text}>Welcome</Text>
        <Button
          onPress={handleSignUp}
          style={{ backgroundColor: "#fff" }}
          textStyle={{ color: "#cf1383" }}
          title="Sign Up"
        />
        <Button onPress={handleLogin} title="Log In" />
      </View>
      <View style={styles.overlay} />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "#000",
    opacity: 0.2,
  },
  image: {
    flex: 1,

    justifyContent: "space-evenly",
    alignItems: "center",
  },
  icon: {
    width: 200,
    height: 200,
    zIndex: 1,
  },

  container: {
    width: "75%",
    height: "100%",
    paddingVertical: "30%",
    alignItems: "center",
    justifyContent: "space-evenly",

    zIndex: 1,
  },
  text: {
    color: "#cf1383",
    fontWeight: "700",
    fontSize: 45,
  },
});

export default Landing;
