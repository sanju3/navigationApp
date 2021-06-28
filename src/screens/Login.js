import React, {Component} from 'react';
import {Text, View, Button} from 'react-native';

export default class Login extends Component {
  render() {
    return (
      <View>
        <Text> In the login screen </Text>
        <Button
          onPress={() => this.props.navigation.navigate('Register')}
          title="Register"
        />
        <Button
          onPress={() => this.props.navigation.navigate('Home')}
          title="Home"
        />
      </View>
    );
  }
}
