import React from 'react';
import { ActivityIndicator, View, Image, StyleSheet } from 'react-native';

const Preloader = () => <View style={styles.container}> 
    <Image
        source={require('../assets/images/logo.png')}
        resizeMode="contain"
        style={styles.logo}
        />
    <ActivityIndicator />
</View>

export default Preloader;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
    },
    logo: {
      width: 150,
      marginTop: -300,
      marginBottom: -150,
    },
  });
