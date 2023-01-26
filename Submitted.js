import React, { useEffect, useState } from "react";
import { Stack, ActivityIndicator } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { View,Text } from "react-native";

export default function Submitted() {
    const [load, setload] = useState(false);
    useEffect(()=>{
        setload(true)
        setTimeout(()=>{
            setload(false)
        },1000)
    },[])

    return (
        <View style={{
            flex:1,
            alignItems:"center",
            justifyContent:"center",
            backgroundColor:"#72CFBC"
        }}>
            {
            load?
            
                <Stack fill center spacing={4}>
                <ActivityIndicator size="large" color="white" />
            </Stack>
            :
            <View style={{
                marginTop: 20,
                height: 50,
                borderRadius: 40,
                marginLeft: 1,
                width: 325,
                borderWidth: 2,
                backgroundColor: "white",
                alignItems:"center",
                justifyContent:"center"
            }}>
             <Text style={{
                fontWeight:"bold",
                fontSize:20
             }}>✅ Submitted</Text>
             </View>
        }
        </View>
    );
}