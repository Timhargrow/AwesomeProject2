import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  AppRegistry
} from 'react-native';
// import Styles from '../../style';
var Styles = require('../style/style');

export default class Home extends React.Component {
  render() {
    return (
      <View style={Styles.container}>
        <Text style={Styles.heading}>
          What{"\'"}s good!
        </Text>
      </View>
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
AppRegistry.registerComponent('Home', () => Home);
