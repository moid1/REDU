import React, {useEffect} from 'react';
import {View, Text, StatusBar, StyleSheet, Image} from 'react-native';
import Theme from '../../../Theme/Theme';
import {useSelector} from 'react-redux';
const SplashScreen = ({navigation}) => {
  // const userData = useSelector(state => state.auth.userAccessKey);
  // console.log('response from user ===', userData);

  useEffect(() => {
   
      setTimeout(() => {
        navigation.replace('Intro');
      }, 3000);
    
  }, []);
  return (
    <View
      style={{
        backgroundColor: Theme.colors.bgColor,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={Theme.colors.primaryColor}
      />
      <Image
        style={{width: '50%', height: 100}}
        source={require('../../../assets/logo.png')}
        resizeMode="contain"
      />
    </View>
  );
};
const styles = StyleSheet.create({
  miancontainer: {},
  image: {height: 200, width: 200},
});
export default SplashScreen;
