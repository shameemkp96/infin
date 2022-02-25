import axios from "axios";
import React,{Component, useEffect, useState} from "react";
import { 
    StyleSheet,
    Text,
    View,
    Image,
    FlatList 
} from "react-native";


const subjects = [
    {
        id:'1',
        title:' Biology'
    },
    {
        id:'2',
        title:' Physics'
    },
    {
        id:'3',
        title:' Chemistry'
    }
]

function Home(){
    const [data, setData] = useState([]);
    console.log("Data:",data);

    useEffect(() =>{
    fetch('https://reqres.in/api/users?page=1')
    .then((response) => 
    response.json())

    .then((json) => 
    setData(json))

    // console.log("response: ",data)
    .catch((error) =>console.log("Error: ",error))

    }
    );

    

    const renderItem = ({item}) =>(
        <View style={{width:'100%',backgroundColor:'#fff', padding:10, elevation:4, marginBottom:10}}>
            <Text style={{fontSize:24,fontWeight:'bold',color:'black'}}>{item.id}</Text>
            <Text style={{fontSize:24,fontWeight:'bold',color:'white'}}>{item.email}</Text>
            <Text style={{fontSize:24,fontWeight:'bold',color:'white'}}>{item.last_name}</Text>

        </View>
    )
    

    return(
        <View style={{height:'100%',  width:'100%',backgroundColor:'black'}}>
            <FlatList
            renderItem={renderItem}
            data={data}></FlatList>
        </View>
    )

}

export default Home;