import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  AppRegistry
} from 'react-native';

var Styles = require('../style/style');

export default class Home extends React.Component {
  render() {
    return (
      <View style={Styles.container}>
        <Text style={Styles.heading}>
          Welcome!
        </Text>
        <Text style={Styles.sectionText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Vivamus sagittis sem turpis, non cursus velit faucibus pharetra.
        Nunc finibus pretium diam non tempus. Integer hendrerit arcu id elit maximus, in aliquam tortor ultrices.
        In vel felis tortor. Sed imperdiet nisi ligula, quis sollicitudin diam laoreet scelerisque.
        Vestibulum quis nisi eu ex semper luctus. Quisque neque ex, sagittis sed mauris mattis, dapibus congue nunc.
        Vivamus sit amet velit lobortis, sagittis neque in, hendrerit elit.
        Integer non diam at tortor consectetur malesuada sed sed nunc.
        </Text>
      </View>
    );
  }
}

AppRegistry.registerComponent('Home', () => Home);
