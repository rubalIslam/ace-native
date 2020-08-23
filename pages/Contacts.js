// React Native Navigation Drawer – Example using Latest Navigation Version //
// https://aboutreact.com/react-native-navigation-drawer //
import * as React from "react";
import { Component } from "react";
import { validate } from "../components/ui/misc";
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
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { WebView } from "react-native-webview";

class Contacts extends Component {
  state = {
    customerId: "",
    formType: "",
    formError: false,
    formSuccess: "",
    formdata: {
      name: {
        element: "input",
        value: "",
        config: {
          name: "name_input",
          type: "text",
        },
        validation: {
          required: true,
        },
        valid: true,
        validationMessage: "",
        showlabel: true,
      },
      email: {
        element: "input",
        value: "",
        config: {
          name: "email_input",
          type: "text",
        },
        validation: {
          required: true,
        },
        valid: true,
        validationMessage: "",
        showlabel: false,
      },
      question: {
        element: "input",
        value: "",
        config: {
          name: "question_input",
          type: "text",
        },
        validation: {
          required: true,
        },
        valid: true,
        validationMessage: "",
        showlabel: true,
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
    if(formIsValid){
        //console.log(dataToSubmit);
          firebaseContacts.push(dataToSubmit).then(()=>{
              this.props.navigation.navigate('Home')
              //  console.log(dataToSubmit);
            }).catch(e=>{
                this.setState({
                    formError: true
                })
            })
       
    } else {
        this.setState({
            formError: true
        })
    }
}
updateForm(name, value){
  const newFormdata = {...this.state.formdata}
  const newElement = { ...newFormdata[name]}
  //console.log(newElement);

  //console.log(newElement);

  if(value === ''){
      newElement.value = value;
  } else {
      newElement.value = value;
  }
  let validData = [true,""];
  if(value.trim() !== ''){
    validData = [true,""];
  }else{
    validData = [false,"This field is required"];
  }

  newElement.valid = validData[0];
  newElement.validationMessage = validData[1]

  newFormdata[name] = newElement;

  console.log(newFormdata);
  this.setState({
      formError: false,
      formdata: newFormdata
  })
}


  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView>
          <View style={{ padding: 5 }}>
            <Text
              style={{
                fontSize: 25,
                textAlign: "center",
                marginBottom: 16,
                color: "white",
              }}
            >
              Get in Touch
            </Text>
            <Text>Rangauti Road, Hailakandi.</Text>
            <Text>Hailakandi, 788151</Text>
            <Text>+91 84029 86734</Text>
            <Text>Mon to Fri 10am to 6pm</Text>
            <Text>aceconstruction@gmail.com</Text>
            <Text>Send us your feedback and query anytime!</Text>
            <Text>We are here to help you out!</Text>
          </View>

          <View>
            <TextInput
              style={{
                height: 35,
                backgroundColor: "#272723",
                color: "white",
                padding: 5,
                margin: 5,
              }}
              id="name"
              name="name"
              //value = {this.state.formdata.name.value}
              placeholder="Enter your name"
              onChangeText = {(value) => this.updateForm("name",value)}
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
              id="number"
              placeholder="Enter your Phone Number"
              onChangeText = {(value) => this.updateForm("number",value)}
              //onChange={(event) => this.updateForm({ event, id: "phone" })}
            />
            <TextInput
              style={{
                height: 35,
                backgroundColor: "#272723",
                color: "white",
                padding: 5,
                margin: 5,
              }}
              id="email"
              placeholder="Enter Your Email"
              onChangeText = {(value) => this.updateForm("email",value)}
              //onChange={(event) => this.updateForm({ event, id: "email" })}
            />
            <TextInput
              multiline={true}
              numberOfLines={4}
              style={{
                height: 65,
                backgroundColor: "#272723",
                color: "white",
                padding: 5,
                margin: 5,
              }}
              id="message"
              placeholder="Enter Message"
              onChangeText = {(value) => this.updateForm("question",value)}
              /*onChange={(event) =>
                this.updateForm({ event, id: "question" })
              }*/
            />
            <Text>{this.state.formSuccess}</Text>
            <Text>
              {this.state.formError ? (
              <Text style={{ color: "red" }}>Something is wrong</Text>
            ) : (
              ""
            )}
            </Text>
            
            <Button
              onPress={(event) => this.submitForm(event)}
              title="Send"
              color="#ff016d"
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default Contacts;
