import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import MainPage from "../components/MainPage";
import Connect from "../components/Connect";
import { Button } from "react-native";

const Stack = createStackNavigator();

export default function Navigate() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="ConnectScreen"
          component={Connect}
          options={{
            title: "ConnectionScreen",
            headerStyle: { backgroundColor: 'red' }
          }}
        />
        <Stack.Screen
          name="Main"
          component={MainPage}
          options={{ title: "Main" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
