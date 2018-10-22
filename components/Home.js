import React, { Component } from "react";
import { Platform, StyleSheet, Text,
  View, ToastAndroid, TouchableOpacity, Image,
  TextInput
 } from "react-native";

 export default class Home extends Component {
   constructor(props){
     super(props)

     this.state = {
       text: ''
     }
   }

   taste(){
     ToastAndroid
       .showWithGravity("😋😋 Awesome...Nice Toast 🍔🍔 😋",
         ToastAndroid.SHORT, ToastAndroid.BOTTOM)
     //alert("😋Your word is:"+this.state.text)
    this.props.navigation.navigate('TodoScreen')

   }

   render() {
     return (
       <View style={styles.main}>
         <View style={styles.firstView}>
           <TextInput
             style={styles.input}
             placeholder="Type here..."
             onChangeText={(txt)=>{
               //console.log(txt)
               this.setState({text:txt})
             }}
            />
           <Text style={[styles.txt, {color:"#fff"}]}>
             Hello Bro✌️
           </Text>

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
   input: {
     color: "#FFF",
     width: 250,
     fontSize: 18,
     borderWidth: 1,
     borderColor: "#FFF",
     borderRadius: 20
   }
 });
