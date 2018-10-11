import React, { Component } from "react";
import { Platform, StyleSheet, Text,
  View, ToastAndroid, TouchableOpacity, Image } from "react-native";

export default class App extends Component {
  taste(){
    ToastAndroid
      .showWithGravity("😋😋 Awesome...Nice Toast 🍔🍔 😋",
        ToastAndroid.SHORT, ToastAndroid.BOTTOM)
  }

  render() {
    return (
      <View style={styles.main}>
        <View style={styles.firstView}>
          {/*<Text style={[styles.txt, {color:"#fff"}]}>
            Hello Bro✌️
          </Text>*/}
          <Image
            style={{ width:400, height:400}}
            source={require('./img/img.jpeg')} />
        </View>
        <View style={styles.secondView}>
          <Text style={[styles.txt, {color:"#626D44"}]}>
            Happy Hacking 😎😎
          </Text>
          <TouchableOpacity
            style={{
              backgroundColor: "#fff",
              borderRadius: 10,
              padding: 15,
              marginTop: 30
            }}
            onPress={()=>this.taste()}
            >
            <Text style={{
              color: "#626D44"
            }}>
              Have a taste!!
            </Text>
          </TouchableOpacity>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    flex:1
  },
  firstView: {
    flex:2,
    backgroundColor:"#FF5A60",
    justifyContent: 'center',
    alignItems: 'center'
  },
  txt:{
    fontSize: 32,
  },
  secondView:{
    flex:1,
    backgroundColor: "#F0F66E",
    justifyContent: 'center',
    alignItems: 'center'
  },
});
