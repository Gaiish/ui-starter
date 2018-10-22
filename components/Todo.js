import React, {Component} from 'react'
import {
  View
} from 'react-native'

import Header from './Header'
import Body from './Body'

export default class Todo extends Component{

  render(){
    return(
      <View style={{flex:1}}>
        <Header />
        <Body />
      </View>
    )
  }
}
