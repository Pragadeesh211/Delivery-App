import { AppBar, BackdropSubheader, Button, IconButton, Surface } from '@react-native-material/core';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, SafeAreaView, TouchableOpacity, ScrollView, TextInput,BackHandler } from 'react-native';
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
// import { details } from "./Deliverydetails.json";
import { useNavigation } from "@react-navigation/native";
// import { BarcodeScanner } from './BarcodeScanner';
// import Searchbar from './Searchbar';
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Remote debugger']);



export default function Delivery() {
  useEffect(() => {
    const backAction = () => {
      BackHandler.removeEventListener(navigation.navigate("Home"))
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, []);
  

  const navigation = useNavigation();

  const [shopname, setShopName] = useState([]);
  const [input, setInput] = useState("");
  const [shop, setshop] = useState([]);
  const [add, setadd] = useState([]);
  const [phn, setphn] = useState([]);
  const [bar, setbar] = useState([]);
  const [ticket, setticket] = useState([]);
  const [load, setload] = useState(true);


  const url = "http://192.168.1.18:6363/getAllDelivery?phone=1234567890";

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        setShopName(json.delivery);
        setshop(json.shopName);
        setadd(json.shopAddress);
        setphn(json.phone);
        setbar(json.tickets);
        setticket(json.barId);
      }
      )
      .catch((error) => alert(error))
      
  }, []);


  return (

    <SafeAreaView style={styles.container}>
      {/* <SafeAreaView> */}
      {/* <AppBar style={styles.appbar}
          title="Delivery App"
          subtitle="A Renambl Product"
          centerTitle={true}
          leading={props => (
            <IconButton icon={props => <Icon name={"menu"} {...props} />} {...props} />
          )}
          trailing={props => (
            <IconButton
              icon={props => <Icon name="dots-vertical" {...props} />}
              {...props}
            />
          )}
        /> */}
      {/* </SafeAreaView> */}


      <SafeAreaView style={styles.headcontainer}>

        <IconButton icon={props => <Icon name="magnify" {...props} />} style={{ marginLeft: 5, paddingBottom: 10 }}>

        </IconButton>
        <TextInput placeholder='Enter Location' value={input} onChangeText={(text) => { setInput(text) }}
          style={{ backgroundColor: "white", width: 310, borderRadius: 25, }} />

      </SafeAreaView  >
    
      <ScrollView>
        <SafeAreaView style={styles.innerParentContainer}>

      
          <SafeAreaView >
            {
              shopname.map((shopdetails) => {
                if (input === "") {
                  return (
                    <SafeAreaView  >
                      <Surface
                        elevation={7}
                        category="medium"
                        style={styles.surface}
                        >

                        <SafeAreaView style={{ backgroundColor: "white", alignItems: "center" }}>
                          <Text  Key="{shopdetails}" style={{
                            alignItems: "center",
                            fontWeight: "700",
                            fontSize: 18 }}>
                               {shopdetails.shopName} </Text>
                        </SafeAreaView>

                        <SafeAreaView style={{ backgroundColor: "white", height: 80, width: 350, alignItems: "center" }}>
                          <Text   Key="{shopdetails}" style={{
                            fontWeight: "400",
                            marginVertical: 12,
                            margin: 10,
                            // marginBottom: 60,
                            fontSize: 14
                          }}>
                            {shopdetails.shopAddress} </Text>

                        </SafeAreaView >
                        <SafeAreaView style={{
                          backgroundColor: "white",
                          height: 30,
                          width: 350,
                          alignItems: "center",
                          marginBottom : 10
                        }}>
                          <Text   Key="{shopdetails}" style={{
                            fontWeight: "400",
                            // marginVertical : 5,
                             margin :-15,
                            //  marginBottom: -50,
                             fontSize: 14
                          }}>
                            Phone No. {shopdetails.phone} </Text>

                        </SafeAreaView >
                        {/* <Text style={{fontWeight:"400",}}> {(shopdetails.phone)} </Text> */}

                        <TouchableOpacity >
                          <Button variant="outlined" title="Deliver" color="#d4ac2d" onPress={() => {
                            navigation.navigate("BarcodeScanner", {
                              sid: shopdetails.shopName, sname: shopdetails.shopAddress, saddress: shopdetails.phone, sslink: shopdetails.barId
                            })
                          }} />
                        </TouchableOpacity>
                      </Surface>
                    </SafeAreaView>
                  )
                };
                if ((shopdetails.shopAddress.toLowerCase().includes(input.toLocaleLowerCase()))) {

                  return (
                    <SafeAreaView  >
                      <Surface
                        elevation={7}
                        category="medium"
                        style={styles.surface}
                         >

                        <SafeAreaView style={{ backgroundColor: "white", alignItems: "center" }}>
                          <Text Key="{index}" style={{
                            alignItems: "center",
                            fontWeight: "700",
                            fontSize: 18 }}>
                               {shopdetails.shopName} </Text>
                        </SafeAreaView>

                        <SafeAreaView style={{ backgroundColor: "white", height: 80, width: 350, alignItems: "center" }}>
                          <Text  Key="{index}" style={{
                            fontWeight: "400",
                            marginVertical: 12,
                            margin: 10,
                            // marginBottom: 60,
                            fontSize: 14
                          }}>
                            {shopdetails.shopAddress} </Text>

                        </SafeAreaView >
                        <SafeAreaView style={{
                          backgroundColor: "white",
                          height: 30,
                          width: 350,
                          alignItems: "center",
                          marginBottom : 10
                        }}>
                          <Text  Key="{index}" style={{
                            fontWeight: "400",
                            // marginVertical : 5,
                             margin :-15,
                            //  marginBottom: -50,
                             fontSize: 14
                          }}>
                            Phone No. {shopdetails.phone} </Text>

                        </SafeAreaView >
                        

                        <TouchableOpacity >
                          <Button variant="outlined" title="Deliver" color="#d4ac2d" onPress={() => {
                            navigation.navigate("BarcodeScanner", {
                              sid: shopdetails.shopName, sname: shopdetails.shopAddress, saddress: shopdetails.phone, sslink: shopdetails.barId
                            }
                            );
                          }} />
                        </TouchableOpacity>
                      </Surface>
                    </SafeAreaView>
                  )
                };
              })
            }


          </SafeAreaView>
       
        </SafeAreaView>
      </ScrollView>

    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#16a085',
    alignItems: 'center',
    justifyContent: 'center',
  
    
  },
  headcontainer: {
    borderRadius: 30,
    backgroundColor: "white",
    margin: 10,
    height: 45,
    flexDirection: "row"

  },
    
    surface: {
    justifyContent: "center",
    alignItems: "center",
    width: 370,
    height: 200,
    margin: 10,
    flexDirection :"column"

  },
  
  innerParentContainer: {
    backgroundColor: '#72CFBC',
    width: 390

  }

})