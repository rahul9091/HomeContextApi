import React, { Component } from 'react'
import { Text, View,StyleSheet } from 'react-native';

import GlobalState from './src/Context/GlobalState';
import TasksList from './src/Components/TasksList';
import Footer from './src/Components/Footer';

export default class App extends Component {
  render() {
    return (
      <GlobalState>
        <View style={styles.container}>
          <TasksList/>
          <Footer/>
        </View>
      </GlobalState>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    flexDirection:'column'
  }
})
