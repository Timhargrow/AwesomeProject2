import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  AppRegistry
} from 'react-native';
import Home from './app/Components/Home/Home';
import Contact from './app/Components/Contact/Contact';
import Services from './app/Components/Services/Services';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      <Home />
      <Contact />
      <Services />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
AppRegistry.registerComponent('App', () => App);
