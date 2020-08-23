import 'react-native-gesture-handler';
//import Providers from './navigation';

import * as React from 'react';
import {Component} from 'react';
import { Button, View, Text, TouchableOpacity, Image } from 'react-native';

import { NavigationContainer, TabActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import Home from '../pages/Home';
import ThirdPage from '../pages/Screen3';
import Contacts from '../pages/Contacts';
import AdminLogin from "../pages/AdminLogin";
import Dashboard from "../screens/Dashboard";
import Customers from "../pages/Customers";
import Engineers from "../pages/Engineers";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

class DashboardStack extends Component {
    
    render(){
        return(
            <Tab.Navigator
                initialRouteName="Dashboard"
            >   <Tab.Screen name = "Dashboard" Component={Dashboard}/>
                <Tab.Screen name = "Engineers" Component={Engineers}/>
                <Tab.Screen name = "Customers" Component={Customers}/>
            </Tab.Navigator>
        )
    }
}
export default DashboardStack;

