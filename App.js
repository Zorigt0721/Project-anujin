/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import Home from './Home';
import Chat from './Chat';
import {
  Platform,
  StyleSheet, 
  Text, 
  View
} from 'react-native';
import {
  Router,
  Scene,
} from 'react-native-router-flux';

class App extends React.Component {
  render () {
    return (
      <Router>
        <Scene key = 'root' style = {{paddintTop: Platform.OS === 'ios' ? 64 : 54}}>
          <Scene key = 'home' component = {Home} title = 'Home'/>
          <Scene key = 'chat' component = {Chat} title = 'Chat'/>
        </Scene>
      </Router>
    )
  }
}

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
