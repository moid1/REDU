import React, {useState} from 'react';
import {View, Text, Keyboard} from 'react-native';
import Theme from '../../../Theme/Theme';
import styles from './styles';
import Button from '../../../components/Button/Button';
import Loader from '../../../components/Loader';
import Input from '../../../components/input/Input';
import {ALERT_TYPE, Toast} from 'react-native-alert-notification';
import {types} from '../../../store/actiontypes';
import {useDispatch} from 'react-redux';
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
      Keyboard.dismiss();
      navigation.replace('home');

   
    }
  };
  return (
    <View style={styles.maincontainer}>
      {showindicator === true ? <Loader /> : null}
      <View style={{height: 50}} />
      <Text style={styles.logintxt}>R.E.D.U</Text>
      <Text
        style={{
          color: 'white',

          width: '90%',
          fontSize: 16,alignSelf:"center",
          fontFamily: Theme.fontFamily.regular,textAlign:"center",
          
        }}>Real estate Development University</Text>

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
           style={{alignSelf:"center",fontSize:15,fontFamily:Theme.fontFamily.semibold,color:Theme.colors.whiteColor,marginTop:10}}
          >
Don't have an account?<Text   onPress={() => navigation.navigate('register')} style={{color:Theme.colors.primaryColor,fontSize:15,fontFamily:Theme.fontFamily.semibold}}> Register</Text>
          </Text>
    
      </View>
    </View>
  );
};
export default Signin;
