// import React, { Component, useState } from "react";
// import {
//     StyleSheet,
//     Text,
//     View,
//     TextInput,
//     Image,
//     TouchableHighlight,
//     KeyboardAvoidingView

// } from "react-native";
// import { useState } from "react";

// const [email, setEmail]=useState



// function Login() {
//     return (
//         <KeyboardAvoidingView>
//             <View style={styles.MainContainer}>
//                 <Image source={require('./assets/logo1.jpg')}
//                     style={styles.icon}></Image>
//                 <Text style={styles.MainText}>Welcome Back,</Text>
//                 <Text style={styles.subText}>Sign in to continue</Text>
                
//                 <TextInput placeholder='Enter your mail id' placeholderTextColor='black' keyboardType='email-address'
//                     style={styles.MailInput} ></TextInput>
                
//                 <TextInput placeholder='Enter your password' placeholderTextColor='black' secureTextEntry={true} autoCapitalize='none' returnKeyType='done' textContentType='password'
//                     style={styles.passInput}></TextInput>

//                 <TouchableHighlight style={styles.TouchableHighlightl}
//                     onPress={() => navigation.navigate('Home')}  >
//                     <Text style={styles.TouchableText}>Login</Text>
//                 </TouchableHighlight>
                
//             </View>
//         </KeyboardAvoidingView>
//     )
// }

// const styles = StyleSheet.create({
//     MainContainer: {
//         height: '100%',
//         width: '100%',
//         backgroundColor: '#fff',
//         justifyContent: 'center',
//         alignItems: 'center'
//     },
//     icon: {
//         height: "15%",
//         width: "10%",
//         position: 'absolute',
//         top: 40,
//         left: 50,
//         paddingTop: 10,
//     },
//     MainText: {
//         fontSize: 30,
//         fontWeight: 'bold',
//         color: 'black',
//         position: 'absolute',
//         top: 160,
//         left: 50
//     },
//     subText: {
//         fontSize: 20,
//         position: 'absolute',
//         top: 200,
//         left: 50,
//         color: 'black'
//     },
//     mailtext: {
//         fontSize: 20,
//         color: 'black',
//         marginRight: 250,
//         fontWeight: 'bold',
//     },
//     MailInput: {
//         height: "10%",
//         width: '80%',
//         borderColor: 'black',
//         position: 'absolute',
//         top: 280,
//     },
//     passText: {
//         fontSize: 20,
//         color: 'black',
//         marginRight: 250,
//         fontWeight: 'bold',
//         marginTop: 90,
//         left: 20
//     },
//     passInput: {
//         height: "10%",
//         width: '80%',
//         borderColor: 'black',

//     },
//     TouchableHighlightl: {
//         backgroundColor: '#5f3ca7',
//         width: '80%',
//         height: '8%',
//         borderRadius: 5,
//         position: 'absolute',
//         top: 580
//     },
//     TouchableText: {
//         fontSize: 20,
//         fontWeight: 'bold',
//         color: "#fff",
//         left: 120,
//         top: 15
//     }
// })

// export default Login;

import React, {useState} from 'react';
import { Text, View, StyleSheet, TextInput, Alert, Button } from 'react-native';
import { Component } from 'react';

const App = () => {
  const [name, setname] = useState('')
  const [secret, setsecret] = useState('')
  var Value = name;
  var secret_Value = secret;
  return (
    <View style={styles.container}>
      <TextInput 
        style={styles.input}
        placeholder='Name'
        value={Value}
        onChangeText={(Value) => {
          setname(Value)
          
        }}
      />
      <TextInput 
        style={styles.input}
        placeholder='Password'
        value={secret_Value}
        onChangeText={(secret_Value) => {
          setsecret(secret_Value)
          
        }}
      />
      <Button title='submit' onPress={() => {
        if (Value === 'Omar' && secret_Value === '123'){
        //   Alert.alert('Done')
          navigation.navigate("Home")
        }
      }}/>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D3BFA1',
    alignItems: 'center',
    justifyContent: 'center'
  },
  input: {
    borderBottomWidth: 1,
    width: '50%',
    marginVertical: 5
  },
});