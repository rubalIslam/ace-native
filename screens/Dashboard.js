import * as React from "react";
import { Component } from "react";

import {
  firebaseContacts,
  firebaseDB,
  firebase,
} from "../components/Firebase/firebase";
import {
  Button,
  StyleSheet,
  View,
  ImageBackground,
  Image,
  TextInput,
  Text,
  SafeAreaView,
  Dimensions,
  TouchableOpacity
} from "react-native";
import { NavigationContainer, TabActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { ScrollView } from "react-native-gesture-handler";
import { WebView } from "react-native-webview";
import Customers from "../pages/Customers";
import Engineers from "../pages/Engineers";

const Tab = createBottomTabNavigator();


var width = Dimensions.get("window").width;
var height = Dimensions.get("window").height;

class Dashboard extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "#06003a",
          paddingTop: 0,
          marginTop: 0,
          color:"white"
        }}
      >
        <Text style={{
                  fontSize: 25,
                  textAlign: "center",
                  marginBottom: 16,
                  color: "white",
                }}>Welcome to the Admin Dashboard
        </Text>
        
      </View>

    );
  }
}
export default Dashboard;
