import React, { Component } from 'react';
import { Text, View, Platform, StyleSheet, TextInput} from 'react-native';

const PassSelector = props => {
  const [epas, setPass] = useState  ("");

  const passwordHandler = (inputText) => {
    setPass(inputText);
  };

  return(
    <View style={styles.rowStyle}>
      <TextInput
      placeholder="ENTER ADMINISTRATOR PASSWORD"
      style={styles.textBoxStyle}
      onChangeText={passwordHandler}
      value={epas}
      />
      <Button title="ENTER" onPress={props.checkPass.bind(this, epas)}/>
    </View>
  );
};

const styles = StyleSheet.create({
  rowStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    color: "#008F11",
    fontFamily: "monospace",
  },
  textBoxStyle: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    padding: 10,
    width: "80%",
    color: "#008F11",
    fontFamily: "monospace",
  }
});

export default PassSelector;
