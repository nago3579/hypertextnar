import React, { Component } from 'react';
import { Text, View, Platform, StyleSheet, TextInput, Button} from 'react-native';

export default function PassSelector(props) {
  const [epas, onChangeText] = React.useState('ENTER ADMINISTRATOR PASSWORD');

  return (
    <View style={styles.cn}>
        <TextInput
        style={styles.type}
        onChangeText={text => onChangeText(text)}
        value={epas}
        />
        <Button style={styles.type} title="ENTER" onPress={() => this.props.cpass(epas)}/>
      </View>
  );
}



const styles = StyleSheet.create({
  cn: {
    flex: 1,
    backgroundColor: '#000000',
    padding: 1,
  },
  type: {
    color: "#008F11",
    fontFamily: "monospace",
    fontSize: 20,
    textAlign: 'left',
  },
});
