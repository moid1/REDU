import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Theme from '../Theme/Theme';
import CustomSidebar from './custom';
import Home from '../screens/main/home';
import Builds from '../screens/main/Build';
import JVclub from '../screens/main/club';
const Drawer = ({navigation, route}) => {
  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
       
          width: '70%',
          backgroundColor:"black",
        },
// drawerActiveBackgroundColor:'D41B00',
        headerShown: false,
        drawerLabelStyle: {
          fontFamily: Theme.fontFamily.medium,
          color: Theme.colors.whiteColor,

          fontSize: 14,
        },
      }}
      
      drawerContent={props => <CustomSidebar {...props} />}
      initialRouteName="home">
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          drawerActiveBackgroundColor:"#D41B00",
        
        }}
      
      />
     <Drawer.Screen
        name="My Build"
        component={Builds}
        options={{
          drawerActiveBackgroundColor:"#D41B00"
        }}
      />
        <Drawer.Screen
        name="JV Club"
        component={JVclub}
        options={{
          drawerActiveBackgroundColor:"#D41B00"
        }}
      />
      
    </Drawer.Navigator>
  );
};

export default Drawer;
