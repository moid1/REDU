import React, {useState} from 'react';
import {
  View,
  Text,
  StatusBar,
  Image,
  ImageBackground,
  Dimensions,
  Alert,
  ScrollView,
} from 'react-native';
import Theme from '../../../Theme/Theme';
import styles from './styles';
import Input from '../../../components/input/Input';
import {Icon} from '@rneui/themed';
import Button from '../../../components/Button/Button';

import Loader from '../../../components/Loader';
import {
  ALERT_TYPE,
  Dialog,
  AlertNotificationRoot,
  Toast,
} from 'react-native-alert-notification';
const {height, width} = Dimensions.get('window');
const Register = ({navigation, route}) => {
  const [showindicator, setShowindicator] = useState(false);

  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const registerUser = async () => {
    if (!email) {
      Toast.show({
        type: ALERT_TYPE.DANGER,
        title: 'Error',
        textBody: 'Please enter email',
        autoClose: 1500,
      });
    }  else if (!password) {
      Toast.show({
        type: ALERT_TYPE.DANGER,
        title: 'Error',
        textBody: 'Please Enter Password!',
        autoClose: 1500,
      });
    }  else {
      const myHeaders = new Headers();
      myHeaders.append('Content-Type', 'application/json');
      setShowindicator(true);
      const raw = JSON.stringify({
       
        email: email,
        password: password,
      
      });

      const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow',
      };

      fetch('https://autopro-8b0e6a59b81e.herokuapp.com/user/register', requestOptions)
        .then(response => response.text())
        .then(result => {
          setShowindicator(false);

          // console.log(result)
          const data = JSON.parse(result);
          if (data?.status === 'success') {
            dispatch({
              type: types.LOGIN.success,
              payload: data?.data,
            });
            Toast.show({
              type: ALERT_TYPE.SUCCESS,
              title: 'Success',
              textBody: data?.message,
              autoClose: 1500,
            });
            navigation.navigate('home');
          }else{
            Toast.show({
              type: ALERT_TYPE.DANGER,
              title: 'Error',
              textBody: data?.message,
              autoClose: 1500,
            });
          }
        })
        .catch(error => console.error(error));
    }
  };

  return (
    <>
      <View style={styles.maincontainer}>
        {showindicator === true ? <Loader /> : null}
        <View style={{height: 50}} />
        <Text style={styles.logintxt}>R.E.D.U</Text>
        <Text
          style={{
            color: 'white',

            width: '90%',
            fontSize: 16,
            alignSelf: 'center',
            fontFamily: Theme.fontFamily.regular,
            textAlign: 'center',
          }}>
          Real Estate Development University
        </Text>

        <View style={styles.body}>
          <Input
            label="Email Address"
            placeholder={'Enter Email Address'}
            value={email}
            onChangeText={val => setEmail(val)}
            iconName={'mail'}
            iconType={'feather'}
            width={75}
          />
          <Input
            label={'Password'}
            placeholder={'Enter Password'}
            value={password}
            onChangeText={val => setPassword(val)}
            password
            iconName={'lock'}
            iconType={'feather'}
            width={100}
          />
          <View style={styles.forgettextContainer}>
            {/* <Text
              style={styles.resettxt}
              >
              Forgot Password?
            </Text> */}
          </View>
          <View style={styles.btn}>
            <Button title={'Sign Up'} onPress={() => registerUser()} />
          </View>

          <Text
            style={{
              alignSelf: 'center',
              fontSize: 15,
              fontFamily: Theme.fontFamily.semibold,
              color: Theme.colors.whiteColor,
              marginTop: 10,
            }}>
            Already Registered?
            <Text
              onPress={() => navigation.navigate('signin')}
              style={{
                color: Theme.colors.primaryColor,
                fontSize: 15,
                fontFamily: Theme.fontFamily.semibold,
              }}>
              {' '}
              Login
            </Text>
          </Text>
          <View
            style={{
              height: 50,
              marginTop: 10,
              width: '100%',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                height: 1,
                width: '45%',
                backgroundColor: 'rgba(255, 255, 255, 0.50)',
              }}
            />
            <Text
              style={{
                alignSelf: 'center',
                fontSize: 13,
                fontFamily: Theme.fontFamily.semibold,
                color: 'rgba(255, 255, 255, 0.50)',
              }}>
              Or
            </Text>
            <View
              style={{
                height: 1,
                width: '45%',
                backgroundColor: 'rgba(255, 255, 255, 0.50)',
              }}
            />
          </View>
          <View
            style={{
              height: 50,
              marginTop: 10,
              width: '100%',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'rgba(255, 255, 255, 0.10)',
            }}>
            <Image
              source={require('../../../assets/google.png')}
              style={{height: 30, width: 30}}
            />
            <Text
              style={{
                color: 'white',
                fontSize: 17,
                fontFamily: Theme.fontFamily.medium2,
                marginLeft: 10,
              }}>
              Login using Google
            </Text>
          </View>
          <View
            style={{
              height: 50,
              marginTop: 10,
              width: '100%',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'rgba(255, 255, 255, 0.10)',
            }}>
            <Image
              source={require('../../../assets/apple.png')}
              style={{height: 30, width: 30}}
            />
            <Text
              style={{
                color: 'white',
                fontSize: 17,
                fontFamily: Theme.fontFamily.medium2,
                marginLeft: 10,
              }}>
              Login using Apple
            </Text>
          </View>
        </View>
        <View
          style={{
            height: 55,
            width: '100%',
            backgroundColor: Theme.colors.secondaryColor,
            position: 'absolute',
            bottom: 0,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: '2.5%',
          }}>
          <View
            style={{
              height: 55,
              width: '25%',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                color: 'white',
                fontSize: 14,
                fontFamily: Theme.fontFamily.medium,
              }}>
              Cohort Test
            </Text>
          </View>
          <View
            style={{
              height: 55,
              width: '25%',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                color: 'white',
                fontSize: 14,
                fontFamily: Theme.fontFamily.medium,
              }}>
              Contact
            </Text>
          </View>
          <View
            style={{
              height: 55,
              width: '25%',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                color: 'white',
                fontSize: 14,
                fontFamily: Theme.fontFamily.medium,
              }}>
              About Us
            </Text>
          </View>
          <View
            style={{
              height: 55,
              width: '25%',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                color: 'white',
                fontSize: 14,
                fontFamily: Theme.fontFamily.medium,
              }}>
              Events
            </Text>
          </View>
        </View>
      </View>
    </>
  );
};
export default Register;
