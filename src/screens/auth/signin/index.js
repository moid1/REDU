import React, {useState} from 'react';
import {
  View,
  Text,
  Keyboard,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import Theme from '../../../Theme/Theme';
import styles from './styles';
import Button from '../../../components/Button/Button';
import Loader from '../../../components/Loader';
import Input from '../../../components/input/Input';
import {ALERT_TYPE, Toast} from 'react-native-alert-notification';
import {types} from '../../../store/actiontypes';
import {useDispatch} from 'react-redux';
import {SwiperFlatList} from 'react-native-swiper-flatlist';
const {width, height} = Dimensions.get('window');

const Signin = ({navigation}) => {
  const dispatch = useDispatch();
  const [showindicator, setShowindicator] = useState(false);
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handlesignin = () => {
    if (!email) {
      Toast.show({
        type: ALERT_TYPE.DANGER,
        title: 'Error',
        textBody: 'Please enter email',
        autoClose: 1500,
      });
    } else if (!password) {
      Toast.show({
        type: ALERT_TYPE.DANGER,
        title: 'Error',
        textBody: 'Please Enter Password!',
        autoClose: 1500,
      });
    } else {
      var myHeaders = new Headers();
      myHeaders.append('Accept', 'application/json');
      myHeaders.append('Content-Type', 'application/json');

      var raw = JSON.stringify({
        email: email,
        password: password,
      });

      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow',
      };
      setShowindicator(true);

      fetch(
        'https://autopro-8b0e6a59b81e.herokuapp.com/user/login',
        requestOptions,
      )
        .then(response => response.text())
        .then(result => {
          // console.log(result)
          const data = JSON.parse(result);
          console.log('response from login-----', data);
          setShowindicator(false);

          if (data.status === 'success') {
            dispatch({
              type: types.LOGIN.success,
              payload: data?.data,
            });
            Toast.show({
              type: ALERT_TYPE.SUCCESS,
              title: 'Success',
              textBody: data.message,
              autoClose: 1500,
            });
            navigation.replace('home');
          
          } else {
            Toast.show({
              type: ALERT_TYPE.DANGER,
              title: 'Error',
              textBody: data.message,
              autoClose: 1500,
            });
          }
        })
        .catch(error => console.log('error', error));
    }
  };
  const PaginationComponent = item => {
    return (
      <View
        style={{
          width: '100%',
          alignItems: 'center',

          position: 'absolute',
          bottom: 40,
        }}>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            paddingHorizontal: '5%',
            width: '100%',
          }}>
          <View
            style={{
              flexDirection: 'row',
            }}>
            {Array.from(Array(item.size).keys()).map((k, kindex) => {
              return (
                <View
                  key={kindex}
                  style={[
                    {
                      width: 10,
                      height: 10,
                      borderRadius: 100,
                      marginHorizontal: 2,
                      borderColor: Theme.colors.black,
                    },
                    {
                      backgroundColor:
                        kindex <= item.paginationIndex
                          ? Theme.colors.primaryColor
                          : Theme.colors.grey,
                    },
                  ]}
                />
              );
            })}
          </View>
        </View>
      </View>
    );
  };
  return (
    <View style={styles.maincontainer}>
      {showindicator === true ? <Loader /> : null}
      <SwiperFlatList
        showPagination
        PaginationComponent={PaginationComponent}
        paginationActiveColor="black">
        <View style={{height: height, width: height}}>
          <Image
            source={require('../../../assets/1a.jpeg')}
            style={{height: '100%', width: '100%', }}
            blurRadius={2}
          />
       
        </View>
        <View style={{height: height, width: height}}>
          <Image
            source={require('../../../assets/2a.jpeg')}
            style={{height: '100%', width: '100%',}}
            blurRadius={2}
          />
         
        </View>
        <View style={{height: height, width: height}}>
          <Image
            source={require('../../../assets/3a.jpeg')}
            style={{height: '100%', width: '100%',}}
            blurRadius={2}
          />
         
        </View>
        <View style={{height: height, width: height}}>
          <Image
            source={require('../../../assets/4a.jpeg')}
            style={{height: '100%', width: '100%',}}
            blurRadius={2}
          />
         
        </View>
        <View style={{height: height, width: height}}>
        <Image
            source={require('../../../assets/5a.jpg')}
            style={{height: '100%', width: '100%',}}
            blurRadius={2}
          />
        </View>
      </SwiperFlatList>
      <View style={{height:height,width:width,position:"absolute"}}>
    
          <View style={{height: 50}} />
          <Text style={styles.logintxt}>R.E.D.U</Text>
          <Text
            style={{
              color: 'white',
              textAlign: 'center',
              marginHorizontal: (width / 100) * 5,
              width: (width / 100) * 90,
              fontSize: 16,

              fontFamily: Theme.fontFamily.regular,
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
              <Text
                style={styles.resettxt}
                onPress={() => navigation.navigate('forget')}>
                Forgot Password?
              </Text>
            </View>
            <View style={styles.btn}>
              <Button title={'Sign In'} onPress={() => handlesignin()} />
            </View>

            <Text
              style={{
                alignSelf: 'center',
                fontSize: 15,
                fontFamily: Theme.fontFamily.semibold,
                color: Theme.colors.whiteColor,
                marginTop: 10,
              }}>
              Don't have an account?
              <Text
                onPress={() => navigation.navigate('register')}
                style={{
                  color: Theme.colors.primaryColor,
                  fontSize: 15,
                  fontFamily: Theme.fontFamily.semibold,
                }}>
                {' '}
                Register
              </Text>
            </Text>
          </View>
      </View>
    </View>
  );
};
export default Signin;
