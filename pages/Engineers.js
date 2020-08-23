import * as React from "react";
import { Component } from "react";

import {
  firebaseContacts,
  firebaseDB,
  firebase,
  firebaseEngineers,
} from "../components/Firebase/firebase";
import { firebaseLooper, reverseArray } from "../components/ui/misc";
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
  TouchableOpacity,
} from "react-native";
import { NavigationContainer, TabActions } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { ScrollView } from "react-native-gesture-handler";
import { WebView } from "react-native-webview";
import Customers from "../pages/Customers";

const Tab = createBottomTabNavigator();

var width = Dimensions.get("window").width;
var height = Dimensions.get("window").height;

class Engineers extends Component {
  state = {
    isloading: true,
    engineers: [],
  };

  componentDidMount() {
    firebaseEngineers.once("value").then((snapshot) => {
      const engineers = firebaseLooper(snapshot);

      this.setState({
        isloading: false,
        engineers: reverseArray(engineers),
      });

      //console.log(players);
    });
  }

  render() {
    return (
      <ScrollView
        style={{
          flex: 1,
          backgroundColor: "#06003a",
          paddingTop: 0,
          marginTop: 0,
          color: "white",
        }}
      >
        <Text
          style={{
            fontSize: 25,
            textAlign: "center",
            marginBottom: 16,
            color: "white",
          }}
        >
          Engineers
        </Text>
        {
          this.state.engineers ?
          this.state.engineers.map((engineer,i)=>(
            <Text style={{paddingLeft:2}}>
              {engineer.name} {engineer.lastname}
            </Text>
            ))
            :null
        }
      </ScrollView>
    );
  }
}

export default Engineers;
