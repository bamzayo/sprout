import React from "react";
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  Platform,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Profile = ({ navigation, route }) => {
  const { email, name } = route.params;
  const goBack = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.main}>
      <TouchableOpacity onPress={goBack} style={styles.back}>
        <View style={styles.backIconContainer}>
          <Ionicons name="chevron-back-outline" size={30} color="white" />
        </View>
        <Text style={styles.profile}>Your Profile</Text>
      </TouchableOpacity>
      <View style={styles.back}>
        <View style={styles.backIconContainer}>
          <Text style={{ fontSize: 24, fontWeight: "500", color: "#fff" }}>
            {name.slice(0, 1).toLocaleUpperCase()}
          </Text>
        </View>
        <View>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.email}>{email}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    padding: 18,
    paddingTop: Platform.OS === "ios" ? 0 : 30,
  },
  back: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 50,
    marginTop: 20,
  },
  backIconContainer: {
    justifyContent: "center",
    alignItems: "center",
    // display: "flex",
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#cf1383",
  },
  profile: {
    marginLeft: 8,
    color: "#cf1383",
    fontSize: 22,
    fontWeight: "700",
  },
  email: {
    fontWeight: "300",
    fontSize: 10,
    marginLeft: 8,
    color: "#333",
  },
  name: {
    fontWeight: "500",
    marginLeft: 8,
    fontSize: 16,
    color: "#000",
  },

  text: {
    color: "red",
    fontWeight: "700",
    fontSize: 28,
  },
});

export default Profile;
