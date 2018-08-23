import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import Tabs from './src/BottomTabNavigator';

import styles from './src/styles/Styles'


export default class App extends React.Component {
  render (){
    return(
      <View style={styles.container}>
        <Tabs/>
      </View>
    )
  }
}