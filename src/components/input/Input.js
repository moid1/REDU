import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

import {Icon} from '@rneui/themed';
import {moderateScale} from '../../Theme/Dimensions';
import Theme from '../../Theme/Theme';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from '../../screens/auth/signin/styles';
const Input = ({
  label,
  iconName,
  error,
  password,
  withNotice,
  iconType,
  onChangeText,
  text,
  number,
  width,
  onFocus = () => {},
  ...props
}) => {
  const [hidePassword, setHidePassword] = React.useState(password);
  const [isFocused, setIsFocused] = React.useState(false);
  function formatPhoneNumber(value) {
    if (!value) return value;

    const phoneNumber = value.replace(/[^\d]/g, '');

    const phoneNumberLength = phoneNumber.length;

    if (phoneNumberLength < 4) return phoneNumber;

    if (phoneNumberLength < 7) {
      return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
    }

    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(
      3,
      6,
    )}-${phoneNumber.slice(6, 10)}`;
  }

  return (
    <View style={{marginTop: 10}}>
      <Text style={style.label}>{label}</Text>

      <View
        style={[
          style.inputContainer,
          {
            borderColor: error
              ? Theme.colors.primaryColor
              : isFocused
              ? Theme.colors.primaryColor
              : Theme.colors.grey,
            alignItems: 'center',
          },
        ]}>
        <TextInput
          autoCorrect={false}
          onFocus={() => {
            onFocus();
            setIsFocused(true);
          }}
          onBlur={() => setIsFocused(false)}
          secureTextEntry={hidePassword}
          onChangeText={onChangeText}
          placeholderTextColor={'rgba(255, 255, 255, 0.50)'}
          style={{
            color: Theme.colors.textColor,
            fontSize: 14,
            fontFamily: Theme.fontFamily.medium,
            width: '90%',
            paddingLeft: 10,
          }}

          {...props}
        />
        {password && (
          <MaterialCommunityIcons
            onPress={() => setHidePassword(!hidePassword)}
            name={hidePassword ? 'eye-outline' : 'eye-off-outline'}
            size={24}
            color={Theme.colors.primaryColor}
          />
        )}
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  label: {
    marginLeft: 5,
    fontSize: 15,
    color: 'white',
    fontFamily: Theme.fontFamily.regular,
    marginBottom: 10,
  },
  inputContainer: {
    width: '100%',
    height: 50,
    backgroundColor: Theme.colors.secondaryColor,
    flexDirection: 'row',
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
  },
});

export default Input;
