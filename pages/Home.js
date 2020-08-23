// React Native Navigation Drawer – Example using Latest Navigation Version //
// https://aboutreact.com/react-native-navigation-drawer //
import * as React from "react";
import { Component } from "react";
import {
  Button,
  StyleSheet,
  View,
  ImageBackground,
  Image,
  Text,
  SafeAreaView,
  Dimensions,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import { firebaseEngineers, firebase } from "../components/Firebase/firebase";
import { firebaseLooper } from "../components/ui/misc";
import { Promise } from "core-js";

var width = Dimensions.get("window").width;
var height = Dimensions.get("window").height;

//const FirstPage = ({ navigation }) => {
class Home extends Component {
  state = {
    loading: true,
    engineers: [],
  };

  componentDidMount() {
    firebaseEngineers.once("value").then((snapshot) => {
      const engineers = firebaseLooper(snapshot);
      let promises = [];
      console.log(engineers);

      for (let key in engineers) {
        promises.push(
          new Promise((resolve, reject) => {
            firebase
              .storage()
              .ref("engineers")
              .child(engineers[key].image)
              .getDownloadURL()
              .then((image) => {
                engineers[key].image = image;
                resolve();
              });
          })
        );
      }

      Promise.all(promises).then(() => {
        this.setState({
          loading: false,
          engineers,
        });
      });
    });
  }
  render() {
    console.log(this.state.engineers);
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: "black" }}>
        <ScrollView>
          {/* <View style={{ flex: 1 ,color:"#F44336", padding: 16}}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>*/}
          <ImageBackground
            source={require("../assets/img/gallery/bg.jpg")}
            style={styles.backgroundImage}
          >
            <View style={{ padding: 30, paddingBottom: 5 }}>
              <Text
                style={{
                  fontSize: 25,
                  textAlign: "center",
                  marginBottom: 16,
                  color: "white",
                }}
              >
                Hailakandi's First Interior Design, Construction & Consultant.
              </Text>
              <Text
                style={{
                  fontSize: 25,
                  textAlign: "center",
                  marginBottom: 16,
                  color: "white",
                }}
              >
                Modern Interior & Design Solutions
              </Text>
            </View>
            <Button
              onPress={() => this.props.navigation.navigate("Contacts")}
              title="Contact us"
              color="#ff016d"
            />
            {/* <Button
          onPress={() => navigation.navigate("ThirdPage")}
          title="Go to Third Page"
       />*/}
          </ImageBackground>
          <ImageBackground
            source={require("../assets/img/gallery/bg.jpg")}
            style={styles.backgroundImage}
          >
            <View
              style={{
                padding: 5,
                backgroundColor: "#0079bf",
                color: "transparent",
                fontWeight: "bold",
              }}
            >
              <Text
                style={{
                  fontSize: 25,
                  textAlign: "left",
                  marginBottom: 16,
                  fontWeight: "bold",
                  color: "white",
                }}
              >
                Estimate With Quantity Survey
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  textAlign: "left",
                  marginBottom: 16,
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                <Text style={{ color: "red", fontWeight: "bold" }}>-</Text> For
                each project we design the best you could get in the entire
                Barak Valley.
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  textAlign: "left",
                  marginBottom: 16,
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                <Text
                  style={{
                    color: "red",
                    fontWeight: "bold",
                    textAlign: "left",
                  }}
                >
                  -
                </Text>{" "}
                From Solid works to Etabs, We have all the professionals. The
                best in India span
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  textAlign: "left",
                  marginBottom: 16,
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                <Text
                  style={{
                    color: "red",
                    fontWeight: "bold",
                    textAlign: "left",
                  }}
                >
                  -
                </Text>{" "}
                Professional softwares used for your Home: Sketch up, Autocad,
                etc
              </Text>
            </View>
          </ImageBackground>
          <ImageBackground
            source={require("../assets/img/gallery/bg21.jpg")}
            style={styles.backgroundImage1}
          >
            <View style={{ padding: 5 }}>
              <Text
                style={{
                  fontSize: 25,
                  textAlign: "left",
                  marginBottom: 16,
                  color: "white",
                }}
              >
                Our Professional Services
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  textAlign: "left",
                  marginBottom: 16,
                  color: "white",
                }}
              >
                <Text style={{ color: "red", fontWeight: "bold" }}>-</Text> We
                will create Awesome and Modern interior: unique in Assam.
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  textAlign: "left",
                  marginBottom: 16,
                  color: "white",
                }}
              >
                <Text
                  style={{
                    color: "red",
                    fontWeight: "bold",
                    textAlign: "left",
                  }}
                >
                  -
                </Text>{" "}
                Rate Analysis as per Govt. Approved rate
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  textAlign: "left",
                  marginBottom: 16,
                  color: "white",
                }}
              >
                <Text
                  style={{
                    color: "red",
                    fontWeight: "bold",
                    textAlign: "left",
                  }}
                >
                  -
                </Text>{" "}
                Adjustment as per Market rate.
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  textAlign: "left",
                  marginBottom: 16,
                  color: "white",
                }}
              >
                <Text
                  style={{
                    color: "red",
                    fontWeight: "bold",
                    textAlign: "left",
                  }}
                >
                  -
                </Text>{" "}
                Interior Design (Complete work).
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  textAlign: "left",
                  marginBottom: 16,
                  color: "white",
                }}
              >
                <Text
                  style={{
                    color: "red",
                    fontWeight: "bold",
                    textAlign: "left",
                  }}
                >
                  -
                </Text>{" "}
                Building Construction: Lumpsum basis/Running Meter/SubContract.
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  textAlign: "left",
                  marginBottom: 16,
                  color: "white",
                }}
              >
                <Text
                  style={{
                    color: "red",
                    fontWeight: "bold",
                    textAlign: "left",
                  }}
                >
                  -
                </Text>{" "}
                Supplying Material at Lowest Cost.
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  textAlign: "left",
                  marginBottom: 16,
                  color: "white",
                }}
              >
                <Text
                  style={{
                    color: "red",
                    fontWeight: "bold",
                    textAlign: "left",
                  }}
                >
                  -
                </Text>{" "}
                Lighting Design along with electification.
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  textAlign: "left",
                  marginBottom: 16,
                  color: "white",
                }}
              >
                <Text
                  style={{
                    color: "red",
                    fontWeight: "bold",
                    textAlign: "left",
                  }}
                >
                  -
                </Text>{" "}
                Plumbing Work with high Solutions.
              </Text>
            </View>
          </ImageBackground>
          <Button
            onPress={() => navigation.navigate("SecondPage")}
            title="Discover More About Ace Construction"
            style={styles.btn}
            color="#ff016d"
          />
          <View style={styles.designs}>
            <Text>BEST INTERIOR SERVICES</Text>
            <View>
              <Image
                style={styles.tinyLogo}
                source={require("../assets/img/gallery/services.jpg")}
              />
              <Text style={styles.interiorText}>Lighting</Text>
              <Text style={styles.interiorText}>
                Provide Awesome Lighting Designs
              </Text>
            </View>
            <View>
              <Image
                style={styles.tinyLogo}
                source={require("../assets/img/gallery/interior1.jpg")}
              />
              <Text style={styles.interiorText}>Living Rooms</Text>
              <Text style={styles.interiorText}>
                Ultra Modern Living Rooms For you
              </Text>
            </View>
            <View>
              <Image
                style={styles.tinyLogo}
                source={require("../assets/img/gallery/restaurant1.jpg")}
              />
              <Text style={styles.interiorText}>Restaurants Design</Text>
              <Text style={styles.interiorText}>
                Breathtaking Restaurant Designs
              </Text>
            </View>
            <View>
              <Image
                style={styles.tinyLogo}
                source={require("../assets/img/gallery/staircase1.jpg")}
              />
              <Text style={styles.interiorText}>Staircases</Text>
              <Text style={styles.interiorText}>
                We do all sorts of starcases
              </Text>
            </View>
            <View>
              <Image
                style={styles.tinyLogo}
                source={require("../assets/img/gallery/kitchen2.jpg")}
              />
              <Text style={styles.interiorText}>Kitchens</Text>
              <Text style={styles.interiorText}>
                Aesthetic kitchen Designs for you.
              </Text>
            </View>
            <View>
              <Image
                style={styles.tinyLogo}
                source={require("../assets/img/gallery/bathroom1.jpg")}
              />
              <Text style={styles.interiorText}>Bathrooms</Text>
              <Text style={styles.interiorText}>Stunning Bathroom Designs</Text>
            </View>
          </View>
          <Text
            style={{
              fontSize: 25,
              textAlign: "center",
              marginBottom: 16,
              fontWeight: "bold",
            }}
          >
            Gallery
          </Text>
          <View>
            <View>
              <Image
                style={styles.tinyLogo}
                source={require("../assets/img/gallery/gallery11.jpg")}
              />
            </View>
            <View>
              <Image
                style={styles.tinyLogo}
                source={require("../assets/img/gallery/gallery12.jpg")}
              />
            </View>
            <View>
              <Image
                style={styles.tinyLogo}
                source={require("../assets/img/gallery/gallery13.jpg")}
              />
            </View>
            <View>
              <Image
                style={styles.tinyLogo}
                source={require("../assets/img/gallery/gallery14.jpg")}
              />
            </View>
            <View>
              <Image
                style={styles.tinyLogo}
                source={require("../assets/img/gallery/gallery15.jpg")}
              />
            </View>
            <View>
              <Image
                style={styles.tinyLogo}
                source={require("../assets/img/gallery/gallery16.jpg")}
              />
            </View>
          </View>
          <Text
            style={{
              fontSize: 25,
              textAlign: "center",
              marginBottom: 16,
              fontWeight: "bold",
              paddingBottom: 0,
              paddingTop: 10,
            }}
          >
            Professionals
          </Text>
          <Text
            style={{
              fontSize: 15,
              textAlign: "center",
              marginBottom: 16,
              fontWeight: "bold",
              backgroundColor: "#42548e",
              paddingBottom: 0,
              marginBottom: 0,
            }}
          >
            Our Engineers and Designers
          </Text>

          <View>
            {this.state.engineers.map((engineer, i) => (
              <View>
                <Image
                  style={styles.professionals}
                  source={{uri:engineer.image}}
                />
                <Text
                  style={{
                    fontSize: 18,
                    textAlign: "center",
                    marginBottom: 16,
                    fontWeight: "bold",
                    backgroundColor: "#42548e",
                    paddingBottom: 0,
                    marginBottom: 0,
                  }}
                >
                  {engineer.name} {engineer.lastname}
                </Text>
                <Text style={{ color: "white" }}>
                  <Text
                    style={{
                      color: "red",
                      fontWeight: "bold",
                      textAlign: "left",
                    }}
                  >
                    -
                  </Text>{" "}
                  {engineer.designation} ({engineer.degree})
                </Text>
                <Text style={{ color: "white" }}>
                  <Text
                    style={{
                      color: "red",
                      fontWeight: "bold",
                      textAlign: "left",
                    }}
                  >
                    -
                  </Text>{" "}
                  {engineer.details}
                </Text>
              </View>
            ))}
          </View>
          {/* </View>
        <Text style={{ fontSize: 18, textAlign: 'center', color: 'grey' }}>
          React Navigate Drawer
        </Text>
        <Text
          style={{ fontSize: 16, textAlign: 'center', color: 'grey' }}>
          www.aboutreact.com
        </Text>
       </View>*/}
        </ScrollView>
      </SafeAreaView>
    );
  }
}
let styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: null,
    height: null,
  },
  backgroundImage1: {
    height: 600,
  },
  btn: {
    backgroundColor: "#ff0066",
    padding: 30,
    textTransform: "uppercase",
    color: "#fff",
  },
  tinyLogo: {
    // textAlign: "center",
    width: width,
    height: 300,
  },
  professionals: {
    // textAlign: "center",
    width: width,
    height: 400,
  },
  designs: {
    backgroundColor: "#000000",
    alignSelf: "stretch",
    textAlign: "center",
  },
  interiorText: {
    color: "white",
  },
});

export default Home;
