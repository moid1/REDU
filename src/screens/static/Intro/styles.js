import React from 'react';
import {Dimensions, StyleSheet} from 'react-native';
import Theme from '../../../Theme/Theme';
const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  mainCont: {
    flex: 1,
  },
  renderCont: {
    width: width,
    height: height,
    // alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: Theme.colors.bgColor,
  },
  title: {
    // fontWeight: 'bold',
    fontFamily:Theme.fontFamily.bold,
    marginBottom: 10,
    fontSize: 20,
    color: "white",
    textAlign:"center",
    paddingLeft:"5%",
    paddingTop:40
  },
  description: {
   
    fontSize: 14,
    width:"90%",
    textAlign:"center",
    alignSelf:"center",
    color: 'white',
    fontFamily: Theme.fontFamily.regular,
  },
  image: {
    width: '80%',
    height: '60%',
    alignSelf:"center",
marginTop:"5%",
borderRadius:5,
  },
  imageWrapper: {
    width: '100%',
    height: '60%',
  },
  paginationCont: {
    marginBottom: 5,
    width: '100%',
    alignItems: 'center',
    backgroundColor: Theme.colors.bgColor,
    height:120,
  },
  dotCont: {
    // flexDirection: 'row-reverse',
    alignItems: 'center',
    justifyContent: "center",
    paddingHorizontal: '5%',
    width: '100%',
    marginBottom: 5,
    height:50,
    // backgroundColor:Theme.colors.green
  },
  dot: {
    width: 12,
    height: 8,
    borderRadius: 100,
    marginHorizontal: 2,
    borderColor: Theme.colors.black,
  },
  skipText: {
    color: Theme.colors.white,
    fontSize: 16,
    width: 40,
    alignSelf: 'flex-end',
    marginRight: 10,
    marginTop: 10,
    fontFamily:Theme.fontFamily.bold
  },
});

export default styles;