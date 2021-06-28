import React, {Component} from 'react';
import {Text, View, Button} from 'react-native';

export default class Home extends Component {
  render() {
    return (
      <View>
        <Text> In the home screen </Text>
        <Button
          onPress={() => this.props.navigation.navigate('Register')}
          title="Register"
        />
        <Button
          onPress={() => this.props.navigation.navigate('Login')}
          title="Login"
        />
      </View>
    );
  }
}
