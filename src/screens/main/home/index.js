import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  Pressable,
  StatusBar,
  Modal,
} from 'react-native';
import Theme from '../../../Theme/Theme';
import {Icon} from '@rneui/themed';
import { useFocusEffect } from '@react-navigation/native';

const Home = ({navigation}) => {
  const [allNews,setAllNews]=useState([]);
  useFocusEffect(React.useCallback(()=>{

  },[]))
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
        <Pressable   onPress={() => {
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
      <View style={{height: 300, width: '100%'}}>
        <Image
          source={require('../../../assets/video.png')}
          style={{height: '100%', width: '100%', position: 'absolute'}}
        />
        <View
          style={{
            height: 100,
            width: '100%',
            marginTop: 100,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            source={require('../../../assets/play.png')}
            style={{height: 100, width: 100}}
          />
        </View>
        <View
          style={{
            height: 50,
            width: '90%',
            alignSelf: 'center',
            position: 'absolute',
            bottom: 10,
          }}>
          <Text
            style={{
              color: 'white',
              fontSize: 28,
              fontFamily: Theme.fontFamily.bold,
            }}>
            Latest Video
          </Text>
        </View>
      </View>
      <Text
        style={{
          color: Theme.colors.primaryColor,
          fontSize: 24,
          fontFamily: Theme.fontFamily.bold,
          marginTop: 10,
          marginLeft: '5%',
        }}>
        More News
      </Text>
      <View
        style={{
          height: 100,
          width: '90%',
          alignSelf: 'center',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginTop: 10,
          backgroundColor: Theme.colors.secondaryColor,
        }}>
        <Image
          source={require('../../../assets/img.png')}
          style={{height: '100%', width: '30%'}}
        />
        <View style={{height: '100%', width: '70%', paddingHorizontal: '2.5%'}}>
          <View
            style={{
              height: 50,
              width: '100%',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                color: 'white',
                fontSize: 14,
                fontFamily: Theme.fontFamily.medium2,
              }}>
              News Title
            </Text>
            <Text
              style={{
                color: Theme.colors.primaryColor,
                fontSize: 14,
                fontFamily: Theme.fontFamily.medium,
              }}>
              Category
            </Text>
          </View>
          <Text
            style={{
              color: 'rgba(255,255,255,0.47)',
              fontSize: 12,
              fontFamily: Theme.fontFamily.regular,
            }}>
            Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.
          </Text>
        </View>
      </View>
      <View
        style={{
          height: 100,
          width: '90%',
          alignSelf: 'center',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginTop: 10,
          backgroundColor: Theme.colors.secondaryColor,
        }}>
        <Image
          source={require('../../../assets/img.png')}
          style={{height: '100%', width: '30%'}}
        />
        <View style={{height: '100%', width: '70%', paddingHorizontal: '2.5%'}}>
          <View
            style={{
              height: 50,
              width: '100%',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                color: 'white',
                fontSize: 14,
                fontFamily: Theme.fontFamily.medium2,
              }}>
              News Title
            </Text>
            <Text
              style={{
                color: Theme.colors.primaryColor,
                fontSize: 14,
                fontFamily: Theme.fontFamily.medium,
              }}>
              Category
            </Text>
          </View>
          <Text
            style={{
              color: 'rgba(255,255,255,0.47)',
              fontSize: 12,
              fontFamily: Theme.fontFamily.regular,
            }}>
            Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.
          </Text>
        </View>
      </View>
      <View
        style={{
          height: 100,
          width: '90%',
          alignSelf: 'center',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginTop: 10,
          backgroundColor: Theme.colors.secondaryColor,
        }}>
        <Image
          source={require('../../../assets/img.png')}
          style={{height: '100%', width: '30%'}}
        />
        <View style={{height: '100%', width: '70%', paddingHorizontal: '2.5%'}}>
          <View
            style={{
              height: 50,
              width: '100%',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                color: 'white',
                fontSize: 14,
                fontFamily: Theme.fontFamily.medium2,
              }}>
              News Title
            </Text>
            <Text
              style={{
                color: Theme.colors.primaryColor,
                fontSize: 14,
                fontFamily: Theme.fontFamily.medium,
              }}>
              Category
            </Text>
          </View>
          <Text
            style={{
              color: 'rgba(255,255,255,0.47)',
              fontSize: 12,
              fontFamily: Theme.fontFamily.regular,
            }}>
            Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.
          </Text>
        </View>
      </View>
    </View>
  );
};
export default Home;
