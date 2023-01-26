import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, Modal, TouchableOpacity, Image, ScrollView,BackHandler,Alert } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import {useRoute} from '@react-navigation/native';
import {useNavigation} from '@react-navigation/native';

// import { Surface } from '@react-native-material/core';

export default function BarcodeScanner() {
    useEffect(() => {
        const backAction = () => {
          BackHandler.removeEventListener(navigation.navigate("Delivery"))
          return true;
        };
    
        const backHandler = BackHandler.addEventListener(
          "hardwareBackPress",
          backAction
        );
    
        return () => backHandler.remove();
      }, []);
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(true);
    const [text, setText] = useState("")
    const [vis, setvis] = useState(false)
    // const [mod2, setmod2] = useState(false)

    const {params :{sid,sname,saddress,sslink}} = useRoute();
    const navigation=useNavigation();


    const askForCameraPermission = () => {
        (async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })()
    }

    useEffect(() => {
        askForCameraPermission();
        
    }, []);

    
    const handleBarCodeScanned = ({ type, data }) => {
        setScanned(true);
        setText(data)
        if(setScanned(false)){}
        if( (text==sslink) )
        {
            
            
             navigation.navigate("DeliveryStatus",{text:text,sid:sid,saddress:saddress}); 
            //  setScanned(false)
             setvis(false)
               
        }
        if(scanned==false){
        if(scanned==false && (text!=sslink) && text!="" ){
            setvis(true)
             // navigation.navigate("Error")
             // setvis(true)
             
             
             
             
             
             
         }
        }
        console.log('Type: ' + type + '\nData: ' + data)
    };

    
    // if (hasPermission === null) {
    //     return (
    //         <View style={styles.container}>
    //             <Text>Requesting for camera permission</Text>
    //         </View>)
    // }
    // if (hasPermission === false) {
    //     return (
    //         <View style={styles.container}>
    //             <Text style={{ margin: 10 }}>No access to camera</Text>
    //             <Button title={'Allow Camera'} onPress={() => askForCameraPermission()} />
    //         </View>)
    // }

// {
//     if(text==sslink)
//     {
//         navigation.navigate("DeliveryStatus",{text:text});     
//     }
//     // else if(!(text==sslink)){
//     //     navigation.navigate("Error",{text:text})
//     // }
// }

// const image=()=>{
//     setvis(true)
    

// }
// if(scanned)
// {
  
//     if((text==sslink) && text!="")
//     {
        
        
//          navigation.navigate("DeliveryStatus",{text:text,sid:sid,saddress:saddress}); 
//         //  setScanned(false)
//         //  setvis(false)
           
//     }
    
    
// }
//     // if(scanned)
//     {
        
//         if((scanned==true) && (text!=sslink) && text!="" ){
//            setvis(true)
//             // navigation.navigate("Error")
//             // setvis(true)
            
            
            
            
            
            
//         }
//     }
    




    
    return (
        <View style={styles.container}>

            <View style={{
                marginTop: 10,
                
            }}>
                <View style={{ marginTop: 10 }}>
                <View style={styles.barcodebox}>
                        <BarCodeScanner
                            onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                            style={{ height: 400, width: 400 }} 
                            />
                    </View>
                    {vis?<View><Text style={{
                        color:"red",
                        fontWeight:"bold",
                        fontSize:20
                    }}>Error⚠
                    </Text>
                    <Text>Barcode Not Valid</Text>
                    </View>
                    :<Text></Text>}
                    {/* {vis?<Text>Error⚠</Text>:<Text></Text>} */}
                    {scanned && <Button title={'Scan'} onPress={() => {setScanned(false)
                    setvis(false)
                    
                    }} color='black' />}
                    
                    
                    {/* <View style={{
                height:50,
                width:100,
                marginTop:250,
                marginLeft:110
            }}>
              <Button title='scan' onPress={()=>{setvis(true)}} color="black"></Button>
            </View> */}
                </View>
            </View>
            <View style={{
                marginTop: 50,
                height: 380,
                borderRadius: 40,
                marginLeft: 1,
                width: 325,
                borderWidth: 2,
                backgroundColor: "#16a085",
                
            }}>

                <View>
                    <View style={{
                        alignItems: "center",
                        marginTop: 15,
                        height: 50,
                        borderRadius: 40,
                        marginLeft: 1,
                        width: 280,
                        borderWidth: 2,
                        backgroundColor: "white",
                        marginLeft: 20,
                        justifyContent: "center"
                    }}>
                        <Text style={{
                            fontWeight: "bold",
                            fontSize: 20
                        }}>Delivery Address</Text>
                    </View>

                </View>
                <ScrollView>
                <View style={{
                        alignItems: "center",
                        marginTop: 10,
                        height: 290,
                        borderRadius: 40,
                        width: 280,
                        borderWidth: 2,
                        backgroundColor: "white",
                        marginLeft: 20,
                        justifyContent: "center"
                    }}>
                        
                        <Text style={{alignItems : "center",
                                      fontWeight:"700",
                                      marginBottom: 20,
                                      fontSize: 18
  
                        }}> {(sid)} </Text>
                       
                        <Text style={{fontWeight:"400", 
                        marginVertical : 3,
                        margin :15,
                        marginBottom: 30,
                        fontSize: 14
                        }}>
                           {(sname+ "\n" +saddress)} </Text>
                </View>
                </ScrollView>
            </View>


            {/* <Modal
                visible={vis}
                transparent={true}
                animationType="fade"
            >


                <View style={{
                    alignItems: "center",
                    justifyContent: "center",
                    flex: 1,
                    height: 200,
                    backgroundColor: "lightblue"
                }}>
                    <View style={{
                        marginLeft: 250,
                        marginBottom: 50,
                        backgroundColor: "black"
                    }}>
                        <Button title='X' onPress={() => { setvis(false) }}
                            //#d4ac2d
                            color="black"
                        >
                        </Button>
                    </View>




                    <View style={styles.barcodebox}>
                        <BarCodeScanner
                            onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                            style={{ height: 400, width: 400 }} />
                    </View>
                    <Text style={styles.maintext}>{text}</Text>

                    {scanned && <Button title={'Scan again?'} onPress={() => setScanned(false)} color='black' />}
                    
                </View>

            </Modal> */}
            {/* <Modal
            visible={vis}
            animationType="fade"
            transparent={true}
            >
              <View style={{
                    alignItems: "center",
                    justifyContent: "center",
                    flex: 1,
                    height: 200,
                    backgroundColor: "white"
                }}>
                    <Text style={{
                        marginBottom:30,
                        fontWeight:"bold",
                        color:"red",
                        fontSize:20
                    }}>
                        Error⚠
                    </Text>
                    <View style={{
                        height:70,
                        width:300,
                        borderWidth:0.5,
                        justifyContent:"center",
                        
                    }}>
                    <View style={{
                        flexDirection:"row",
                        alignItems:"center",
                        marginLeft:50
                    }} 
                    >
                        <Text style={{
                            fontWeight:"bold"
                        }}>Barcode Type: </Text>
                        <Text style={{
                            color:"red",
                            fontWeight:"bold"
                        }}>Mismatch</Text>
                    </View>
                    <View style={{
                        flexDirection:"row",
                        marginLeft:50
                    }} 
                    >
                        <Text style={{
                            fontWeight:"bold"
                        }}>Barcode Data: </Text>
                        <Text style={{
                            color:"blue",
                            fontWeight:"bold"
                        }}>{text}</Text>
                    </View>
                    </View>
                        
                     {/* {scanned && <Button title={'Scan again?'} onPress={set} color='black' />} */}
                    {/* </View>   */}

            {/* </Modal>  */} 
          


        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#72CFBC',
        alignItems: 'center',
        // justifyContent: 'center',
    },
    maintext: {
        fontSize: 16,
        margin: 20,
    },
    barcodebox: {
        // alignItems: 'center',
        // justifyContent: 'center',
        height: 150,
        width: 350,
        overflow: 'hidden',
        // borderRadius: 30,
        marginLeft:-50
       
    }
});