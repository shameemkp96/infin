// import React,{Component} from "react";
// import { 
//     Text,
//     View,
//     TextInput,
//     Image,
//     TouchableHighlight,
//     KeyboardAvoidingView

//  } from "react-native";
//  import { StyleSheet } from "react-native";
// //  import { Controller, useForm } from "react-hook-form";

 
// export default class demo extends Component(){

//         constructor(props){
//             super(props)
//             this.state={
//                 username: "",
//                 password: ""
//             }
//         }

    
//     render(){
        

//      return(
//          <KeyboardAvoidingView>
//          <View style={styles.MainContainer}>
//              <Image source={require('./assets/logo1.jpg')}
//              style={styles.icon}></Image>
//              <Text style={styles.MainText}>Welcome Back,</Text>
//              <Text style={styles.subText}>Sign in to continue</Text>
//              <Text style={styles.mailtext} >Email</Text>
//              <TextInput placeholder='Enter your mail id' placeholderTextColor='black' keyboardType='email-address' 
//              style={styles.MailInput} onChangeText={(value)=>this.setState({username:value})}></TextInput>
//              <Text style={styles.passText} >Password</Text>
//              <TextInput placeholder='Enter your password' placeholderTextColor='black' secureTextEntry={true} autoCapitalize='none' returnKeyType='done' textContentType='password' 
//              style={styles.passInput} onChangeText={(value)=>this.setState({password:value})}></TextInput>

//              <TouchableHighlight style={styles.TouchableHighlightl}
//              onPress={()=>navigation.navigate('onSubmit')}>
//                  <Text style={styles.TouchableText}>Login</Text>
//              </TouchableHighlight>
//              <Text>{"username ==> "+this.state.username}</Text>
//              <Text>{"password ==> "+this.state.password}</Text>
//          </View>
//          </KeyboardAvoidingView>
//      )
//  }
// }

//  const styles = StyleSheet.create({
//      MainContainer:{
//          height:'100%',
//          width:'100%',
//          backgroundColor:'#fff',
//          justifyContent:'center',
//          alignItems:'center'
//      },
//      icon:{
//          height:"15%",
//          width:"10%",
//          position:'absolute',
//          top:40,
//          left:50,
//          paddingTop:10,
//      },
//      MainText:{
//          fontSize:30,
//          fontWeight:'bold',
//          color:'black',
//          position:'absolute',
//          top:160,
//          left:50
//      },
//      subText:{
//          fontSize:20,
//          position:'absolute',
//          top:200,
//          left:50,
//          color:'black'
//      },
//      mailtext:{
//         fontSize:20,
//         color:'black',
//         marginRight:250,
//         fontWeight:'bold',
//      },
//      MailInput:{
//          height:"10%",
//          width:'80%',
//          borderColor:'black',
//          position:'absolute',
//          top:280,
//      },
//      passText:{
//         fontSize:20,
//         color:'black',
//         marginRight:250,
//         fontWeight:'bold',
//         marginTop:90,
//         left:20
//      },
//      passInput:{
//         height:"10%",
//         width:'80%',
//         borderColor:'black',

//      },
//      TouchableHighlightl:{
//         backgroundColor:'#5f3ca7',
//         width:'80%',
//         height:'8%',
//         borderRadius:5,
//         position:'absolute',
//         top:580
//      },
//      TouchableText:{
//          fontSize:20,
//          fontWeight:'bold',
//          color:"#fff",
//          left:120,
//          top:15
//      }
//  })
