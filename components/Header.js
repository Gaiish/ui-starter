import React from 'react'
import {
  View, Text, StyleSheet
} from 'react-native'

export default ()=>(
  <View style={styles.header}>
    <Text style={{color: '#FFF', fontSize: 20}}>All Tasks</Text>
  </View>
)

var styles = StyleSheet.create({
  header:{
    backgroundColor: "#2DBE60",
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
