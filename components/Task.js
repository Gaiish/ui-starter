import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

export default props => (
  <View style={styles.list}>
    <Text style={styles.task}>{props.taskName}</Text>
    <TouchableOpacity style={styles.delbtn} onPress={props.del}>
      <Icon name="ios-trash" size={32} />
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  list: {
    padding: 7,
    borderBottomWidth: 1,
    borderColor: "#ECECEC",
    paddingVertical: 25,
    flexDirection: "row"
  },
  delbtn: {
    flex: 1
  },
  task: {
    flex: 6
  }
});
