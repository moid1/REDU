import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  Pressable,
  StatusBar,
  Modal,
  TextInput,
} from 'react-native';
import Theme from '../../../Theme/Theme';
import {Icon} from '@rneui/themed';

const JVclub = ({navigation}) => {
  return (
    <View style={{flex: 1, backgroundColor: Theme.colors.bgColor}}>
      <StatusBar
        backgroundColor={Theme.colors.bgColor}
        barStyle={'light-content'}
      />
      <View
        style={{
          height: 50,
          width: '100%',
          backgroundColor: Theme.colors.secondaryColor,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: '5%',
          marginTop: 10,
        }}>
        <Pressable onPress={() => {
            navigation.openDrawer();
          }}
          style={{
            height: 50,
            width: '20%',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Icon name="menu" type="feather" color={'white'} size={18} />
          <Text
            style={{
              color: 'rgba(255,255,255,0.3)',
              fontSize: 14,
              fontFamily: Theme.fontFamily.medium,
              marginLeft: 5,
            }}>
            MENU
          </Text>
        </Pressable>
        <Image
          source={require('../../../assets/logo.png')}
          style={{height: 40, width: 40}}
          resizeMode="contain"
        />
      </View>

      <Text
        style={{
          color: Theme.colors.primaryColor,
          fontSize: 24,
          fontFamily: Theme.fontFamily.bold,
          marginTop: 10,
          marginLeft: '5%',
        }}>
        JV Club
      </Text>
      <View
        style={{
          width: '90%',
          alignSelf: 'center',

          marginTop: 10,
          backgroundColor: 'rgba(255,255,255,0.1)',
        }}>
        <View
          style={{
            height: 60,
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: '5%',
            borderBottomColor: 'rgba(255,255,255,0.4)',
            borderBottomWidth: 1,
          }}>
          <View style={{height: 50, width: '50%', justifyContent: 'center'}}>
            <Text
              style={{
                fontSize: 16,
                fontFamily: Theme.fontFamily.medium2,
                color: 'white',
              }}>
              Contributing
            </Text>
          </View>
          <View style={{height: 50, width: '50%', justifyContent: 'center'}}>
            <Text
              style={{
                fontSize: 16,
                fontFamily: Theme.fontFamily.medium2,
                color: 'white',
              }}>
              Accepting
            </Text>
          </View>
        </View>
        <View
          style={{
            height: 80,
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: '5%',
            backgroundColor: 'rgba(0,0,0,0.3)',
          }}>
          <View style={{height: 50, width: '50%', justifyContent: 'center'}}>
            <Text
              style={{
                fontSize: 15,
                fontFamily: Theme.fontFamily.regular,
                color: 'white',
              }}>
              Jane Doe
            </Text>
            <Text
              style={{
                fontSize: 13,
                fontFamily: Theme.fontFamily.medium2,
                color: Theme.colors.primaryColor,
              }}>
              $50,000
            </Text>
          </View>
          <View style={{height: 50, width: '50%', justifyContent: 'center'}}>
            <Text
              style={{
                fontSize: 15,
                fontFamily: Theme.fontFamily.regular,
                color: 'white',
              }}>
              Oscar Williams
            </Text>
            <Text
              style={{
                fontSize: 13,
                fontFamily: Theme.fontFamily.medium2,
                color: Theme.colors.primaryColor,
              }}>
              Single Family
            </Text>
          </View>
        </View>
        <View
          style={{
            height: 80,
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: '5%',
           
          }}>
          <View style={{height: 50, width: '50%', justifyContent: 'center'}}>
            <Text
              style={{
                fontSize: 15,
                fontFamily: Theme.fontFamily.regular,
                color: 'white',
              }}>
              Erick Brown
            </Text>
            <Text
              style={{
                fontSize: 13,
                fontFamily: Theme.fontFamily.medium2,
                color: Theme.colors.primaryColor,
              }}>
             $10,000
            </Text>
          </View>
          <View style={{height: 50, width: '50%', justifyContent: 'center'}}>
            <Text
              style={{
                fontSize: 15,
                fontFamily: Theme.fontFamily.regular,
                color: 'white',
              }}>
            Angie Irwin
            </Text>
            <Text
              style={{
                fontSize: 13,
                fontFamily: Theme.fontFamily.medium2,
                color: Theme.colors.primaryColor,
              }}>
              Multi Family
            </Text>
          </View>
        </View>
        <View
          style={{
            height: 80,
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: '5%',
            backgroundColor: 'rgba(0,0,0,0.3)',
          }}>
          <View style={{height: 50, width: '50%', justifyContent: 'center'}}>
            <Text
              style={{
                fontSize: 15,
                fontFamily: Theme.fontFamily.regular,
                color: 'white',
              }}>
            Jane Rich
            </Text>
            <Text
              style={{
                fontSize: 13,
                fontFamily: Theme.fontFamily.medium2,
                color: Theme.colors.primaryColor,
              }}>
             $100,000
            </Text>
          </View>
          <View style={{height: 50, width: '50%', justifyContent: 'center'}}>
            <Text
              style={{
                fontSize: 15,
                fontFamily: Theme.fontFamily.regular,
                color: 'white',
              }}>
             Jason O.
            </Text>
            <Text
              style={{
                fontSize: 13,
                fontFamily: Theme.fontFamily.medium2,
                color: Theme.colors.primaryColor,
              }}>
              Single Family
            </Text>
          </View>
        </View>
        <View
          style={{
            height: 80,
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: '5%',
           
          }}>
          <View style={{height: 50, width: '50%', justifyContent: 'center'}}>
            <Text
              style={{
                fontSize: 15,
                fontFamily: Theme.fontFamily.regular,
                color: 'white',
              }}>
             James Inuo
            </Text>
            <Text
              style={{
                fontSize: 13,
                fontFamily: Theme.fontFamily.medium2,
                color: Theme.colors.primaryColor,
              }}>
          $100,000
            </Text>
          </View>
          <View style={{height: 50, width: '50%', justifyContent: 'center'}}>
            <Text
              style={{
                fontSize: 15,
                fontFamily: Theme.fontFamily.regular,
                color: 'white',
              }}>
       Rick Fresco
            </Text>
            <Text
              style={{
                fontSize: 13,
                fontFamily: Theme.fontFamily.medium2,
                color: Theme.colors.primaryColor,
              }}>
             Single Family
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};
export default JVclub;
