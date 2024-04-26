import React, {useState} from 'react';
import {
  View,
  Text,
  StatusBar,
  Image,
  ScrollView,
  StyleSheet,Pressable
} from 'react-native';
import Theme from '../../Theme/Theme';
import { Icon } from '@rneui/themed';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {moderateScale, scale, verticalScale} from '../../Theme/Dimensions';
import {useNavigation,DrawerActions} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
const CustomSidebar = props => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'black'} barStyle={'light-content'} />

      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: '2.5%',
          paddingTop: 20,
          backgroundColor:"black",flex:1,
        }}>
        <View
        style={{
          height: 50,
          width: '100%',
          backgroundColor: Theme.colors.secondaryColor,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: '5%',marginBottom:10,
     
        }}>
        <Pressable   onPress={() => {
            navigation.openDrawer();
          }}
          style={{
            height: 50,
            width: '25%',
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
        <Icon name="cross" type="entypo" color={'white'} size={22} onPress={() => navigation.dispatch(DrawerActions.closeDrawer())}/>
     
      </View>

        <DrawerItemList {...props} />
      </ScrollView>
  
    </View>
  );
};

export default CustomSidebar;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',

    backgroundColor: Theme.colors.whiteColor,
  },

  imageLogo: {
    width: '60%',
    height: 60,
  },
  lists: {
    width: scale(30),
    height: verticalScale(30),
  },
  D_text: {
    color: Theme.colors.blackColor,
    fontSize: moderateScale(16),
  },
});
