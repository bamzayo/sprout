import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";

function ScreenContainer({ style, color = "#ffffff", children }) {
  return (
    <SafeAreaView style={[styles(color).statusBarBackground, style || {}]}>
      {children}
    </SafeAreaView>
  );
}

const styles = (color) =>
  StyleSheet.create({
    statusBarBackground: {
      flex: 1,
      backgroundColor: color,
      // paddingTop: 40,
    },
  });

export default ScreenContainer;
