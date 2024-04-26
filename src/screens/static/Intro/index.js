import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  Modal,
  StatusBar,
  ImageBackground,
  SafeAreaView,
} from 'react-native';
import {SwiperFlatList} from 'react-native-swiper-flatlist';
// import {Button} from '../../assets/components/Button';
import Theme from '../../../Theme/Theme';
import styles from './styles';
const {width, height} = Dimensions.get('window');
import {useNavigation} from '@react-navigation/native';
import {Icon} from '@rneui/themed';
const Intro = ({isVisible, closeModal, onPress}) => {
  const navigation = useNavigation();
  // console.log('intro sliderData---------', sliders);
  const PaginationComponent = item => {
    return (
      <View style={styles.paginationCont}>
        <View style={styles.dotCont}>
          <View
            style={{
              flexDirection: 'row',
            }}>
            {Array.from(Array(item.size).keys()).map((k, kindex) => {
              return (
                <View
                key={kindex}
                  style={[
                    styles.dot,
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
        <View style={{height: 70, width: '90%', marginHorizontal: '5%'}}>
          <TouchableOpacity
            style={{
            
              height: 50,
              backgroundColor: Theme.colors.primaryColor,
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
              flexDirection: 'row',
            }}
            onPress={() => {
              if (item.paginationIndex + 1 !== item.size) {
                item.scrollToIndex({
                  index: item.paginationIndex + 1,
                });
              } else {
                navigation.replace('register');
              }
            }}>
            <Text
              style={{
                fontSize: 18,
                color: 'white',
                fontFamily: Theme.fontFamily.semibold,
                // paddingRight: 10,
              }}>
              Next
            </Text>
            {/* <Icon name="arrowright" type="antdesign" color={'white'} /> */}
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
 
    <SafeAreaView style={styles.mainCont}>
         
      <StatusBar
        backgroundColor={Theme.colors.primaryColor}
   
        barStyle={'light-content'}
      />
      <SwiperFlatList
        showPagination
        PaginationComponent={PaginationComponent}
        paginationActiveColor="black">
        <View style={styles.renderCont}>
          <View style={styles.imageWrapper}>
          
                 <View
                style={{
                  height: '20%',
                  width: '90%',
                  alignItems: 'flex-end',
                  justifyContent: 'flex-end',
                }}>
                <Text
                onPress={()=>  navigation.replace('register')}
                style={{color: Theme.colors.primaryColor, fontSize: 16,fontFamily:Theme.fontFamily.semibold}}>
                  Skip
                </Text>
              </View>
              <Image
                source={require('../../../assets/1.jpeg')}
                style={[
                  styles.image,
                  {borderTopRightRadius: 25, borderBottomLeftRadius: 25},
                ]}
              />
       
          </View>
          <Text style={styles.title}>Heading # 1</Text>
          <Text style={styles.description}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
          </Text>
        </View>
        <View style={styles.renderCont}>
          <View style={styles.imageWrapper}>
         
              <View
                style={{
                  height: '20%',
                  width: '90%',
                  alignItems: 'flex-end',
                  justifyContent: 'flex-end',
                }}>
                <Text
                onPress={()=>  navigation.replace('register')}

                  style={{color: Theme.colors.primaryColor, fontSize: 16,fontFamily:Theme.fontFamily.semibold}}>
                  Skip
                </Text>
              </View>
              <Image
                source={require('../../../assets/2.jpeg')}
                style={[
                  styles.image,
                  {borderTopLeftRadius: 25, borderBottomRightRadius: 25},
                ]}
              />
            
          </View>
          <Text style={styles.title}>Heading # 2</Text>
          <Text style={styles.description}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
          </Text>
        </View>

        <View style={styles.renderCont}>
          <View style={styles.imageWrapper}>
          
                 <View
                style={{
                  height: '20%',
                  width: '90%',
                  alignItems: 'flex-end',
                  justifyContent: 'flex-end',
                }}>
                <Text
                onPress={()=>  navigation.replace('register')}

                style={{color: Theme.colors.primaryColor, fontSize: 16,fontFamily:Theme.fontFamily.semibold}}>
                  Skip
                </Text>
              </View>
              <Image
                source={require('../../../assets/3.jpeg')}
                style={[
                  styles.image,
                  {borderTopRightRadius: 25, borderBottomLeftRadius: 25},
                ]}
              />
         
          </View>
          <Text style={styles.title}>Heading # 3</Text>
          <Text style={styles.description}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
          </Text>
        </View>
       
      </SwiperFlatList>
     
    </SafeAreaView>
    // </Modal>
  );
};

export default Intro;