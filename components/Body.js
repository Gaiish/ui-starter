import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput
} from "react-native";

import Icon from "react-native-vector-icons/Ionicons";
import Task from "./Task";

export default class Body extends Component {
  state = {
    txt: "",
    tasks: []
  };

  changeHandler = txt => {
    this.setState({ txt });
  };

  addTask = () => {
    const { txt } = this.state;
    //alert(txt)
    var items = [];
    items = this.state.tasks; //getting old tasks
    items.unshift(txt); //adding new task
    this.setState({ tasks: items, txt: "" });
  };

  delete(i) {
    //alert(i)
    var items = this.state.tasks;
    items.splice(i, 1);
    this.setState({ tasks: items });
  }

  render() {
    return (
      <View style={styles.body}>
        <View>
          <TextInput
            autoFocus
            onChangeText={this.changeHandler}
            style={styles.inp}
            value={this.state.txt}
            placeholder="Enter your task"
          />
          <View>
            {this.state.tasks.map((task, i) => (
              <Task key={i} taskName={task} del={() => this.delete(i)} />
            ))}
          </View>
        </View>
        <TouchableOpacity style={styles.btn} onPress={this.addTask}>
          <Text style={styles.plus}>+</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  body: {
    flex: 9
  },
  btn: {
    position: "absolute",
    right: 10,
    bottom: 10,
    backgroundColor: "#2DBE60",
    borderRadius: 34,
    width: 62,
    height: 62
  },
  plus: {
    color: "#FFF",
    fontSize: 42,
    alignSelf: "center"
  }
});
