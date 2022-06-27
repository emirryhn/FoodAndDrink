import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { appColor } from "../layouts/styling";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={{ margin: 20 }}>
        <View>
          <Text>Select menu:</Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    height: "100%",
    flex: 1,
    backgroundColor: appColor.White,
    marginTop: StatusBar.currentHeight,
  },
});
export default HomeScreen;
