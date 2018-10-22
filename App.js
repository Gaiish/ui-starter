import React from "react";


import Todo from './components/Todo'
import Home from './components/Home'

import {createStackNavigator} from 'react-navigation'


const App  = createStackNavigator({
  HomeScreen: Home,
  TodoScreen: Todo
},
{
  navigationOptions : {
    header: null
  }
}
)

export default App
