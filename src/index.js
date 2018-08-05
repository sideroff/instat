import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Provider } from 'react-redux'

import store from './store'

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View >
          <Text >Welcome to React Native!</Text>
        </View>
      </Provider>
    )
  }
}