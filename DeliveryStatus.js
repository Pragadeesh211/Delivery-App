import { AppBar, BackdropSubheader, Button, Divider, IconButton, Surface } from '@react-native-material/core';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import {View, StyleSheet, Text, SafeAreaView, TouchableOpacity, NavigationContainer, ScrollView, FlatList,TextInput,BackHandler,Alert } from 'react-native';
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
// import { details } from './Deliverydetails.json';
import { RadioButton } from 'react-native-paper';
import { useRoute } from '@react-navigation/native';
import { useNavigation } from "@react-navigation/native";
import { Stack, ActivityIndicator } from "@react-native-material/core";
//npm install native-base
//expo install react-native-svg@12.1.1
//expo install react-native-safe-area-context@3.3.2


export default function Deliverystatus() {
    useEffect(() => {
        const backAction = () => {
          Alert.alert("Hold on!", "Are you sure you want to go back?", [
            {
              text: "Cancel",
              onPress: () => null,
              style: "cancel"
            },
            { text: "YES", onPress: () => BackHandler.removeEventListener(navigation.navigate("Delivery")) }
          ]);
          return true;
        };
    
        const backHandler = BackHandler.addEventListener(
          "hardwareBackPress",
          backAction
        );
    
        return () => backHandler.remove();
      }, []);
      const [load, setload] = useState(false);
    useEffect(()=>{
        setload(true)
        setTimeout(()=>{
            setload(false)
        },1000)
    },[])

    const [value, setValue] = useState('Delivered');
    const { params: { text, sid, saddress } } = useRoute();
    const navigation = useNavigation();
    const [enablecomment, setEnableComment] = useState(true);

    // const [shopname, setShopName] = useState([])
    // useEffect(() => {
    //   setShopName(details)

    // }, [])

    // const click = () => {
    //   alert("Are you Sure?")
    // }
    return (
        <View style={styles.container}>
        
            { load?
            <Stack fill center spacing={4}>
            <ActivityIndicator size="large" color="white" />
        </Stack>:
        <SafeAreaView style={styles.container}>

            <ScrollView showsVerticalScrollIndicator={false}>

                <SafeAreaView style={styles.innerParentContainer}>



                    <SafeAreaView  >

                        <SafeAreaView style={styles.infotext}>
                            <SafeAreaView style={{ backgroundColor: "#16a085", width: 380, marginLeft: 17 }}>
                                <Surface
                                    elevation={4}
                                    category="medium"
                                    style={styles.surface1}>
                                    <Surface
                                        elevation={4}
                                        category="medium"
                                        style={styles.textsurface}>
                                        {/* text starts */}
                                        <SafeAreaView style={{ marginTop: 60 }}>
                                            <SafeAreaView style={{ marginLeft: -200, marginTop: -75, flexDirection: "column" ,marginBottom:10}}>
                                                <SafeAreaView>
                                                    <Text style={{ fontWeight: "bold", fontSize: 18, marginLeft: 193 }} >  Shop Name </Text>
                                                </SafeAreaView>
                                                <SafeAreaView style={{
                                                    backgroundColor: "#dddddd", height: 40, width: 300,
                                                    marginLeft: 200
                                                }}>
                                                    <Text style={{ marginTop: 10 }}> {sid}   </Text>
                                                </SafeAreaView>

                                            </SafeAreaView>
                                            <SafeAreaView style={{ flexDirection: "column",marginBottom: 10 }}>
                                                <SafeAreaView>
                                                    <Text style={{ fontWeight: "bold", fontSize: 18, marginLeft: -5 }}>  Phone Number </Text>
                                                </SafeAreaView>
                                                <SafeAreaView style={{
                                                    backgroundColor: "#dddddd", height: 40, width: 300,
                                                    marginLeft: 1
                                                }}>
                                                    <Text style={{ marginTop: 10 }}> {saddress}</Text>
                                                </SafeAreaView>

                                            </SafeAreaView>
                                            <SafeAreaView style={{ flexDirection: "column" }}>
                                                <SafeAreaView>
                                                    <Text style={{ fontWeight: "bold", fontSize: 18, marginLeft: 0 }}> Barcode ID </Text>
                                                </SafeAreaView>
                                                <SafeAreaView style={{
                                                    backgroundColor: "#dddddd", height: 40, width: 300,
                                                    marginLeft: 1
                                                }}>
                                                    <Text style={{ marginTop: 10 }}> {text}</Text>
                                                </SafeAreaView>
                                                <SafeAreaView style={{marginVertical :-4}}>
                                                <Divider style={{ marginTop: 15 ,margin: 1, borderWidth : 0.2}} leadingInset={1} />
                                                    <Text style={{marginTop:8, fontWeight :'400'}}> Success  ✅</Text>
                                                    
                                                </SafeAreaView>

                                            </SafeAreaView>

                                        </SafeAreaView>


                                    </Surface>


                                </Surface>
                            </SafeAreaView>



                            <Surface
                                elevation={4}
                                category="medium"
                                style={styles.surface}>
                                <SafeAreaView >

                                    <Surface
                                        elevation={4}
                                        category="medium"
                                        style={styles.radiosurface} >

                                        <SafeAreaView style={styles.radiobutton}>

                                            <RadioButton
                                                value="Delivered"
                                                status={value === 'Delivered' ? 'checked' : 'unchecked'}
                                                onPress={() => {
                                                    setValue('Delivered')
                                                    setEnableComment(true)
                                                }} />
                                            <Button variant="outlined" title="Delivered" color="black"

                                                value="Delivered"
                                                status={value === 'Delivered' ? 'checked' : 'unchecked'}
                                                onPress={() => {
                                                    setValue('Delivered')
                                                    setEnableComment(true)
                                                }}
                                                style={{
                                                    fontSize: 20,
                                                    fontStyle: "italic",
                                                    marginTop: 1,
                                                    marginLeft: -35,
                                                    width: 220,
                                                    marginVertical: 1
                                                }}  >
                                            </Button>

                                        </SafeAreaView>
                                    </Surface>
                                    <Surface
                                        elevation={4}
                                        category="medium"
                                        style={styles.radiosurface}>

                                        <SafeAreaView style={styles.radiobutton}>

                                            <RadioButton
                                                value="Unable to deliver"
                                                status={value === 'Unable to deliver' ? 'checked' : 'unchecked'}
                                                onPress={() => {
                                                    setValue('Unable to deliver')
                                                    setEnableComment(false)
                                                }}
                                            />
                                            <Button variant="outlined" title="   Unable to deliver" color="black"

                                                value="Unable to deliver"
                                                status={value === 'Unable to deliver' ? 'checked' : 'unchecked'}
                                                onPress={() => {
                                                    setValue('Unable to deliver')
                                                    setEnableComment(false)
                                                }}
                                                style={{
                                                    fontSize: 15,
                                                    fontStyle: "italic",
                                                    marginTop: 1,
                                                    marginLeft: -35,
                                                    width: 220,
                                                    marginVertical: 1
                                                }}  >
                                            </Button>
                                        </SafeAreaView>
                                    </Surface>

                                    <Surface
                                        elevation={4}
                                        category="medium"
                                        style={styles.radiosurface}>

                                        <SafeAreaView style={styles.radiobutton}>

                                            <RadioButton
                                                value="Return"
                                                status={value === 'Return' ? 'checked' : 'unchecked'}
                                                onPress={() => {
                                                    setValue('Return')
                                                    setEnableComment(false)
                                                }}
                                            />
                                            <Button variant="outlined" title="Return" color="black"

                                                value="Return"
                                                status={value === 'Return' ? 'checked' : 'unchecked'}
                                                onPress={() => {
                                                    setValue('Return')
                                                    setEnableComment(false)
                                                }}
                                                style={{
                                                    fontSize: 20,
                                                    fontStyle: "italic",
                                                    marginTop: 1,
                                                    marginLeft: -35,
                                                    width: 220,
                                                    marginVertical: 1
                                                }}  >
                                            </Button>
                                        </SafeAreaView>
                                    </Surface>

                                    <Surface

                                        elevation={4}
                                        category="medium"
                                        style={styles.radiosurface}>

                                        <SafeAreaView style={styles.radiobutton}>

                                            <RadioButton
                                                value="Damage"
                                                status={value === 'Damage' ? 'checked' : 'unchecked'}
                                                onPress={() => {
                                                    setValue('Damage')
                                                    setEnableComment(false)
                                                }}
                                            />
                                            <Button variant="outlined" title="Damage" color="black"

                                                value="Damage"
                                                status={value === 'Damage' ? 'checked' : 'unchecked'}
                                                onPress={() => {
                                                    setValue('Damage')
                                                    setEnableComment(false)
                                                }}
                                                style={{
                                                    fontSize: 20,
                                                    fontStyle: "italic",
                                                    marginTop: 1,
                                                    marginLeft: -35,
                                                    width: 220,
                                                    marginVertical: 1
                                                }}  >
                                            </Button>
                                        </SafeAreaView>
                                    </Surface>


                                </SafeAreaView>


                            </Surface>

                        </SafeAreaView>
                        <SafeAreaView  style ={{marginTop : 10}}  >
                            {enablecomment ? <Text></Text> :
                               <SafeAreaView style ={{ width : 380, marginLeft : 20,backgroundColor : "white",
                                                        height : 60, borderRadius : 10
                                                        }}>
                                <TextInput  placeholder='Comment' style={{ margin: 5, 
                                    height: 50, 
                                    backgroundColor: "white",
                                    borderRadius : 5,    
                                }}>
                               </TextInput> 
                               </SafeAreaView>
                                    }
                        </SafeAreaView>


                    </SafeAreaView>
                </SafeAreaView>
            </ScrollView>
            <SafeAreaView style={styles.buttoncontainer}>
                <Button variant="outlined" title="Submit" color="#d4ac2d" style={styles.button} onPress={() => { navigation.navigate("Submitted") }} />
            </SafeAreaView>
        </SafeAreaView>
}
</View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#72CFBC',
        alignItems: 'center',
        

        paddingTop: 30
    },
    headcontainer: {
        borderRadius: 20,
        backgroundColor: "white",
        margin: 8,
        height: 100,
        width: 400,
        alignItems: 'center',
        paddingTop: 50,



    },

    button: {
        width: 380,
        margin: 3,
        marginBottom: 5
    },
    radiobutton: {

        flexDirection: "row",
        backgroundColor: "white",
        borderRadius: 5,
        width: 222,
        height: 35

    },
    radiosurface: {
        margin: 7,

    },
    radiobuttontext: {

        fontSize: 15

    },

    textcontainer: {
        borderRadius: 10,
        width: 375,
        // alignItems: 'center',
        padding: 10,
        // justifyContent: "center",
        height: 100,
        fontWeight: "bold",
        fontSize: 14,
        marginTop: 10,


    },
    buttoncontainer: {
        backgroundColor: "white",
        width: 395,
        height: 50,
        padding: 5,
        margin: 10,
        marginTop: 10
    },
    insidetextcontainer: {
        margin: 10,
        backgroundColor: 'white',
        alignItems: 'center',
        borderRadius: 10,
        borderColor: 'black',
        height: 200


    },
    infotext: {
        paddingTop: -5
    },
    surface: {
        justifyContent: "center",
        alignItems: "center",
        width: 380,
        height: 200,
        margin: 17,
        backgroundColor: "#16a085",



    },
    surface1: {
        justifyContent: "center",
        alignItems: "center",
        width: 360,
        height: 300,
        margin: 17,
        backgroundColor: "#72CFBC",
        marginRight: 80,
        marginVertical: 8,
        marginLeft: 10

    },
    textsurface: {
        justifyContent: "center",
        alignItems: "center",
        width: 340,
        height: 280,
        margin: 17,
        backgroundColor: "white",
        marginRight: 18,
        marginVertical: 8


    },
    headtext: {
        flex: 1,
        fontSize: 15,
        backgroundColor: '#abb8ba',
        fontWeight: 'bold',
        padding: 10,

        textAlign: 'left',
        flexDirection: 'row',
        margin: 1,
        width: 200,


    },
    innerParentContainer: {
        backgroundColor: '#72CFBC',
       


    }

});