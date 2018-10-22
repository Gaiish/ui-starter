import React from 'react'
import {
  View, Text, StyleSheet, TouchableOpacity
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'


export default (props)=>(
  <View style={styles.header}>
    <TouchableOpacity
      onPress={props.back}
      style={{flex:1, paddingHorizontal: 5}}
      >
      <Icon name="ios-arrow-round-back" size={32} color='#FFF' />
    </TouchableOpacity>
    <Text style={{color: '#FFF', fontSize: 20,
      alignSelf: 'center',
      flex:7}}>All Tasks</Text>
  </View>
)

var styles = StyleSheet.create({
  header:{
    backgroundColor: "#2DBE60",
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  }
})
