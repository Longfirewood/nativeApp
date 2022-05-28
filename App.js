import { StyleSheet, Text, SafeAreaView, View, Button } from "react-native";

import React from "react";
import Header from "./components/Header";
import MainStack from "./routes/MainStack";

export default function App() {
  return (
    <View>
      {/* <Header /> */}

      <MainStack />
      {/* <View>
        <MainPage />
        <Connect />
      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({});
