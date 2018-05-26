import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  AppRegistry,
  TextInput,
  Button
} from 'react-native';

var Styles = require('../style/style');

export default class Contact extends React.Component {
  doSomething(){
    
  }
  render() {
    return (
      <View>
        <Text style={Styles.heading}>
          Contact Us
        </Text>
        <View style={{padding: 10}}>
          <TextInput
            style={{height:40}}
            placeholder="Enter Name"
          />
          <TextInput
            style={{height:40}}
            placeholder="Enter Email"
          />
          <TextInput
            style={{height:40}}
            placeholder="Optional Message"
          />
          <Button
            title="Submit"
            color="#841584"
            onPress={this.doSomething}
          />
        </View>
      </View>
    );
  }
}

AppRegistry.registerComponent('Contact', () => Contact);
