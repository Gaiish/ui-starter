import React, {Component} from 'react'
import {
  View
} from 'react-native'

import Header from './Header'
import Body from './Body'

export default class Todo extends Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <View style={{flex:1}}>
        <Header
          back={()=>this.props.navigation.goBack()}
         />
        <Body />
      </View>
    )
  }
}
