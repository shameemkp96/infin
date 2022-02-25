import React from "react";
import Login from "./Login";
// import demo from "./demo";
import Home from "./Home";


import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator()

function MyStack(){
  return(
    <Stack.Navigator>
      <Stack.Screen name='Login'
      component={Login}
      options={{headerShown:false}}></Stack.Screen>

      <Stack.Screen name='Home'
      component={Home}
      options={{headerShown:false}}></Stack.Screen>
    </Stack.Navigator>
  )
}


export default function App(){
  return(
    <NavigationContainer>
      <MyStack>

      </MyStack>
    </NavigationContainer>
  )
}