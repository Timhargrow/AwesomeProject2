import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  AppRegistry,
  ScrollView,
  Switch,
} from 'react-native';
import Home from './app/Components/Home/Home';
import Services from './app/Components/Services/Services';
import Contact from './app/Components/Contact/Contact';

const Styles = require('./app/Components/style/style');

export default class App extends React.Component {
  constructor(){
    super();
    this.state={
      logoHidden: false
    }
  }
  render() {
    let logoHidden = this.state.logoHidden;
    let img = <Text></Text>;
    if(logoHidden){
      img = <Text></Text>;
    } else {
      img = <Image style={Styles.image} source={require('./logo.png')} />
    }
    return (
      <View>
        <View style={Styles.imageWrap}>
          {img}
            <Switch onValueChange={(value) => this.setState({logoHidden: value})} value={this.state.logoHidden} />
        </View>
          <ScrollView style={Styles.ScrollView}>
          <Home />
          <Services />
          <Contact />
          </ScrollView>
      </View>
    );
  }
}

AppRegistry.registerComponent('App', () => App);
