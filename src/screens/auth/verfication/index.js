import React, {useState} from 'react';
import {
  View,
  Text,
  StatusBar,
  ImageBackground,
  Pressable,
  Dimensions,
} from 'react-native';
import Theme from '../../../Theme/Theme';
import Button from '../../../components/Button/Button';
import styles from './styles';
import {Icon} from '@rneui/themed';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
  MaskSymbol,
} from 'react-native-confirmation-code-field';
const {height, width} = Dimensions.get('window');
import {
  ALERT_TYPE,
  Dialog,
  AlertNotificationRoot,
  Toast,
} from 'react-native-alert-notification';
import Loader from '../../../components/Loader';

const Verification = ({navigation, route}) => {
  const emaildata = route.params.email;
  // console.log('email data--', emaildata);
  const [showindicator, setShowindicator] = useState(false);
  const CELL_COUNT = 5;
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  const handleforget = () => {
    if (!value) {
      Toast.show({
        type: ALERT_TYPE.DANGER,
        title: 'Error',
        textBody: 'Please enter OTP',
        autoClose: 1500,
      });
    } else {
      var myHeaders = new Headers();
      myHeaders.append('Accept', 'application/json');
      myHeaders.append('Content-Type', 'application/json');

      var raw = JSON.stringify({
        email: emaildata,
        otp: value,
      });

      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow',
      };
      setShowindicator(true);
      fetch(
        'https://autopro-8b0e6a59b81e.herokuapp.com/user/verifyOtp',
        requestOptions,
      )
        .then(response => response.text())
        .then(result => {
          const data = JSON.parse(result);
          setShowindicator(false);
          console.log(data);

          if (data?.status === 'success') {
            Toast.show({
              type: ALERT_TYPE.SUCCESS,
              title: 'success',
              textBody: data?.message,
              autoClose: 1500,
            });
            navigation.replace('reset', {email: emaildata});
          } else {
            Toast.show({
              type: ALERT_TYPE.DANGER,
              title: 'Error',
              textBody: data?.message,
              autoClose: 1500,
            });

            // console.log(data);
          }
        })
        .catch(error => console.log('error', error));
    }
  };
 

  return (
    <View style={styles.maincontainer}>
      {showindicator === true ? <Loader /> : null}

      <View style={styles.headerContainer}>
        <Pressable
          onPress={() => navigation.goBack()}
          style={{
            height: 50,
            width: 50,
            borderRadius: 5,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#F5F5F5',
          }}>
          <Icon
            name="arrowleft"
            type="antdesign"
            color={Theme.colors.textColor}
            size={28}
          />
        </Pressable>
        {/* <Text style={otpstyles.headertxt}>Sign Up</Text> */}
      </View>
      <View style={styles.bodytxtContainer}>
        <Text style={styles.txt1}>Enter verification code</Text>
        <Text style={styles.txt2}>
          We sent the 5 digits verification code to your phone number/ email.
        </Text>

        <View style={styles.otpContainer}>
          <CodeField
            ref={ref}
            {...props}
            // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
            caretHidden={false}
            value={value}
            onChangeText={setValue}
            cellCount={CELL_COUNT}
            rootStyle={styles.codeFieldRoot}
            keyboardType="email-address"
            textContentType="oneTimeCode"
            renderCell={({index, symbol, isFocused}) => (
              <Text
                key={index}
                style={[styles.cell, isFocused && styles.focusCell]}
                onLayout={getCellOnLayoutHandler(index)}>
                {symbol || (isFocused ? <Cursor /> : null)}
              </Text>
            )}
          />
        </View>
        <View style={styles.bottomContainer}>
          <Text style={styles.botomtxt}>Didn’t Receive code?</Text>
          <Text style={styles.bottombtn} >
            Request Again
          </Text>
        </View>
        <View style={{marginTop: 40}}>
          <Button title={'Verify'} onPress={() => handleforget()} />
        </View>
      </View>
    </View>
  );
};
export default Verification;
