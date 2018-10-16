import React from 'react';
import {
  AsyncStorage,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default class LoginScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  _signInAsync = async () => {
    await AsyncStorage.setItem('userToken', 'abc');
    this.props.navigation.navigate('Main');
  };

  render() {
    return (
      <View>
          <View style={styles.container}>
            <Image
              source={require('../assets/images/logo.png')}
              resizeMode="contain"
              style={styles.logo}
            />
          </View>
          <View style={styles.btnContainer}>
            <TouchableOpacity
                onPress={this._signInAsync}
                style={[styles.container, styles.loginButton]}
            >
              <Text style={styles.loginTxt}>
                LOG IN
              </Text>
            </TouchableOpacity>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  logo: {
    width: 220
  },
  btnContainer: {
    paddingLeft: 20, paddingRight: 20
  },
  loginButton: {
    backgroundColor: '#5fc69d',
    justifyContent: 'center',
    height: 50,
  },
  loginTxt: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },
});
