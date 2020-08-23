// React Native Navigation Drawer – Example using Latest Navigation Version //
// https://aboutreact.com/react-native-navigation-drawer //
import "react-native-gesture-handler";
//import Providers from './navigation';

import * as React from "react";
import { Button, View, Text, TouchableOpacity, Image } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from "../pages/Home";
import ThirdPage from "../pages/Screen3";
import Contacts from "../pages/Contacts";
import AdminLogin from "../pages/AdminLogin";
import Dashboard from "../screens/Dashboard";
import Customers from "../pages/Customers";
import Engineers from "../pages/Engineers";
import DashboardStack from "../navigation/dashboardStack";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const NavigationDrawerStructure = (props) => {
  //Structure for the navigatin Drawer
  const toggleDrawer = () => {
    //Props to open/close the drawer
    props.navigationProps.toggleDrawer();
  };

  return (
    <View style={{ flexDirection: "row" }}>
      <TouchableOpacity onPress={() => toggleDrawer()}>
        {/*Donute Button Image */}
        <Image
          source={{
            uri:
              "https://raw.githubusercontent.com/AboutReact/sampleresource/master/drawerWhite.png",
          }}
          style={{ width: 35, height: 35, padding: 20, marginLeft: 6 }}
        />
      </TouchableOpacity>
    </View>
  );
};

function firstScreenStack({ navigation }) {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: "Welcome to Ace Consultant & Construction", //Set Header Title
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: "#000000", //Set Header color
          },
          headerTintColor: "#ff0066", //Set Header text color
          headerTitleStyle: {
            fontWeight: "bold", //Set Header text style
          },
        }}
      />
    </Stack.Navigator>
  );
}

function secondScreenStack({ navigation }) {
  return (
    <Stack.Navigator
      initialRouteName="Contacts"
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerStructure navigationProps={navigation} />
        ),
        headerStyle: {
          backgroundColor: "#000000", //Set Header color
        },
        headerTintColor: "#ff0066", //Set Header text color
        headerTitleStyle: {
          fontWeight: "bold", //Set Header text style
        },
      }}
    >
      <Stack.Screen
        name="Contacts"
        component={Contacts}
        options={{
          title: "Contact Us", //Set Header Title
        }}
      />
    </Stack.Navigator>
  );
}

export function dashboardNavigator({ navigation }) {
  return (
    <Tab.Navigator
      initialRouteName="Dashboard"
     /* screenOptions={{
        headerLeft: () => (
          <NavigationDrawerStructure navigationProps={navigation} />
        ),
        headerStyle: {
          backgroundColor: "#000000", //Set Header color
        },
        headerTintColor: "#ff0066", //Set Header text color
        headerTitleStyle: {
          fontWeight: "bold", //Set Header text style
        },
      }}*/
      tabBarOptions={{
        activeTintColor: 'green',
        activeBackgroundColor:'#2d2d2d',
        backgroundColor:"#ff0066",
        inactiveBackgroundColor:"black"
      }}
    >
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        style={{backgroundColor:"black"}}
        options={{
          title: 'Dashboard', //Set Header Title
          
        }}/>
      <Tab.Screen
        name="Engineers"
        component={Engineers}
        options={{
          title: "Engineers", //Set Header Title
        }}
      />
      <Tab.Screen
        name="Customers"
        component={Customers}
        options={{
          title: "Customers", //Set Header Title
        }}
      />
    </Tab.Navigator>
  );
}

function adminScreenStack({ navigation }) {
  return (
    <Stack.Navigator
      initialRouteName="AdminLogin"
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerStructure navigationProps={navigation} />
        ),
        headerStyle: {
          backgroundColor: "#000000", //Set Header color
        },
        headerTintColor: "#ff0066", //Set Header text color
        headerTitleStyle: {
          fontWeight: "bold", //Set Header text style
        },
      }}
    >
      <Stack.Screen
        name="AdminLogin"
        component={AdminLogin}
        options={{
          title: "Admin Login", //Set Header Title
        }}
      />
     {/* <Stack.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          title: 'Dashboard', //Set Header Title
          
        }}/>*/}
      <Stack.Screen
        name="dashboardNavigator"
        component={dashboardNavigator}
        options={{
          title:"Dashboard"
        }}/>
      {/*<Stack.Screen
        name="Engineers"
        component={Engineers}
        options={{
          title: "Engineers", //Set Header Title
        }}
      />
      <Stack.Screen
        name="Customers"
        component={Customers}
        options={{
          title: "Customers", //Set Header Title
        }}
      />
      {/*<Stack.Screen name="DashboardStack" component={DashboardStack} />*/}
    </Stack.Navigator>
  );
}
export default function AppStack() {
  return (
    <Drawer.Navigator
      drawerContentOptions={{
        backgroundColor: "black",
        activeTintColor: "#00FF00",
        itemStyle: { marginVertical: 5 },
      }}
      style={{ color: "black", backgroundColor: "green" }}
    >
      <Drawer.Screen
        name="Home"
        options={{ drawerLabel: "Home" }}
        component={firstScreenStack}
      />
      <Drawer.Screen
        name="Contacts"
        options={{ drawerLabel: "Contact Us" }}
        component={secondScreenStack}
      />
      <Drawer.Screen
        name="AdminLogin"
        options={{ drawerLabel: "Admin Login" }}
        component={adminScreenStack}
      />
    </Drawer.Navigator>
  );
}
