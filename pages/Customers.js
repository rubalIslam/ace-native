import * as React from "react";
import { Component } from "react";

import {
  firebaseContacts,
  firebaseDB,
  firebase,
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
import Engineers from "../pages/Engineers";

const Tab = createBottomTabNavigator();

var width = Dimensions.get("window").width;
var height = Dimensions.get("window").height;

class Customers extends Component {
  state = {
    isloading: true,
    search: "",
    customers: [],
  };
  componentDidMount() {
    firebaseContacts.once("value").then((snapshot) => {
      const customers = firebaseLooper(snapshot);
      //console.log(customers);
      this.setState({
        isloading: false,
        customers: reverseArray(customers),
      });

      //console.log(customers);
    });
  }
  updateSearch(event) {
    this.setState({
      search: event.target.value.substr(0, 20),
    });
  }
  render() {
    let filterCustomers = this.state.customers.filter((customer) => {
      return (
        customer.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !==
        -1
      );
    });
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
            fontSize: 15,
            textAlign: "center",
            color: "white",
          }}
        >
          Customers
        </Text>
        {this.state.customers
          ? filterCustomers.map((customer, i) => (
              <View>
                <Text
                  style={{
                    fontSize: 15,
                    paddingLeft:2,
                    color: "white",
                  }}
                >
                  {customer.name}
                </Text>
              </View>
            ))
          : null}
      </ScrollView>
    );
  }
}

export default Customers;
