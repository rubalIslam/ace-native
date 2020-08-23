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

import { ScrollView } from "react-native-gesture-handler";
import { WebView } from "react-native-webview";
import Customers from "../pages/Customers";

const Tab = createBottomTabNavigator();

var width = Dimensions.get("window").width;
var height = Dimensions.get("window").height;