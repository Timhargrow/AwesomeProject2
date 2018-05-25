import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  AppRegistry
} from 'react-native';
export default class Services extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text >
          In Kansas City!
        </Text>
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
AppRegistry.registerComponent('Services', () => Services);