import React, {Component} from 'react';
import { StyleSheet, Text, View, ScrollView, Platform } from 'react-native';

class Selector extends React.Component {
    render() {
      const ops = [
      {text: "", p: 1}, //0
      {text: "> RETURN TO HOME DIRECTORY", p: 1}, //1
      {text: "> CONTINUE", p: 1}, //2
      {text: "> VIEW LIFE SUPPORT STATUS", p: 2}, //3
      {text: "> VIEW CURRENT TRAJECTORY", p: 3}, //4
      {text: "> SET DESTINATION", p: 10}, //5
      {text: "> VIEW LOGS", p: 4}, //6
      {text: "> RETURN TO LOGS", p: 4}, //7
      {text: "> CAPTAIN'S LOGS", p: 5}, //8
      {text: "> MISSION SPECIALIST LOGS", p: 6}, //9
      {text: "> SCIENTIST LOGS", p: 7}, //10
      {text: "> FLIGHT ENGINEER LOGS", p: 8}, //11
      {text: "> PILOT'S LOGS", p: 9}, //12
      {text: "> CHANGE DESTINATION TO EARTH", p: 11}, //13
      ];
        return (
            <View style={styles.cn}>
            {this.props.hidden ?
                <Text style={styles.type} onPress={() => this.props.cpos(ops[this.props.index].p)} >
                  {ops[this.props.index].text}
                </Text>
              : null}
            </View>
        )
    }
}

const styles = StyleSheet.create({
  cn: {
    backgroundColor: '#000000',
    padding: 5,
  },
  type: {
    color: "#008F11",
    fontFamily: "monospace",
    fontSize: 20,
    textAlign: 'left',
  },
});

export default Selector;
