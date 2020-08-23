import * as React from "react";
import { Component } from "react";
import { username, password } from "../screens/authAdmin";
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
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { WebView } from "react-native-webview";
import Dashboard  from "../screens/Dashboard";
import DashboardStack from "../navigation/dashboardStack";
import { dashboardNavigator } from "../navigation/AppStack";

class AdminLogin extends Component {
  state = {
    customerId: "",
    formType: "",
    formError: false,
    formSuccess: "",
    formdata: {
      username: {
        element: "input",
        value: "",
        config: {
          name: "username_input",
          type: "text",
        },
        validation: {
          required: true,
        },
        valid: true,
        validationMessage: "",
        showlabel: false,
      },
      password: {
        element: "input",
        value: "",
        config: {
          name: "password_input",
          type: "text",
        },
        validation: {
          required: true,
        },
        valid: true,
        validationMessage: "",
        showlabel: false,
      },
    },
  };

  successForm = (message) => {
    this.setState({
        formSuccess: message
    });
    setTimeout(()=>{
        this.setState({
            formSuccess:''
        });
    },2000)
  }
  submitForm(event){
    event.preventDefault();
    
    let dataToSubmit = {};
    let formIsValid = true;

    for(let key in this.state.formdata){
        dataToSubmit[key] = this.state.formdata[key].value;
        //console.log(dataToSubmit[key]);
        formIsValid = 
            this.state.formdata[key].valid && formIsValid;
    }

    console.log(formIsValid);
    //console.log(this.state.formdata.username.value);
    const uname = this.state.formdata.username.value;
    const pwd = this.state.formdata.password.value;
    //console.log(this.state.formdata.password.value);
    if(formIsValid){
        if(uname === username && pwd === password){
          this.props.navigation.navigate(dashboardNavigator);
          console.log("correct");
        }else{
            console.log("wrong");
        }
        //console.log(dataToSubmit);
       /* if()
          firebaseContacts.push(dataToSubmit).then(()=>{
              this.props.navigation.navigate('Home')
              //  console.log(dataToSubmit);
            }).catch(e=>{
                this.setState({
                    formError: true
                })
            })*/
       
    } else {
        this.setState({
            formError: true
        })
    }
}

  updateForm(name, value) {
    const newFormdata = { ...this.state.formdata };
    const newElement = { ...newFormdata[name] };
    //console.log(newElement);

    //console.log(newElement);

    if (value === "") {
      newElement.value = value;
    } else {
      newElement.value = value;
    }
    let validData = [true, ""];
    if (value.trim() !== "") {
      validData = [true, ""];
    } else {
      validData = [false, "This field is required"];
    }

    newElement.valid = validData[0];
    newElement.validationMessage = validData[1];

    newFormdata[name] = newElement;

    //console.log(newFormdata);
    this.setState({
      formError: false,
      formdata: newFormdata,
    });
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Text 
            style={{
                fontSize: 25,
                textAlign: "center",
                marginBottom: 16,
                color: "white",
                paddingTop: 200
              }}>
            Please Login to go to DashBoard
        </Text>

        <TextInput
          style={{
            height: 35,
            backgroundColor: "#272723",
            color: "white",
            padding: 5,
            margin: 5,
          }}
          //value = {this.state.formdata.name.value}
          placeholder="Enter Username"
          onChangeText={(value) => this.updateForm("username", value)}
          //onChange={(event) => this.updateForm({ event, id: "name" })}
        />
        <TextInput
          style={{
            height: 35,
            backgroundColor: "#272723",
            color: "white",
            padding: 5,
            margin: 5,
          }}
          //value = {this.state.formdata.name.value}
          placeholder="Enter Password"
          onChangeText={(value) => this.updateForm("password", value)}
          //onChange={(event) => this.updateForm({ event, id: "name" })}
        />
        <Text>{this.state.formSuccess}</Text>
        <Text>
          {this.state.formError ? (
            <Text style={{ color: "red" }}>
              Enter valid Username and Password
            </Text>
          ) : (
            ""
          )}
        </Text>
        <Button
            style={{paddingTop:100}}
          onPress={(event) => this.submitForm(event)}
          title="Login"
          color="#ff016d"
        />
      </View>
    );
  }
}

export default AdminLogin;
