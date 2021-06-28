import React, {Component} from 'react';
import {Text, View, Button} from 'react-native';

export default class Register extends Component {
  render() {
    return (
      <View>
        <Text> In the register screen </Text>
        <Button
          onPress={() => this.props.navigation.navigate('Login')}
          title="Login"
        />
        <Button
          onPress={() => this.props.navigation.navigate('Home')}
          title="Home"
        />
      </View>
    );
  }
}
