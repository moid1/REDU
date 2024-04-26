import {moderateScale} from './Dimensions';
import {Platform} from 'react-native';

export default Theme = {
  colors: {
    primaryColor: '#D41B00',
    secondaryColor: 'rgba(28,28,28,255)',
    bgColor:"rgba(0,0,0,255)",
    lightgreen: '#009F93',
    green: '#0e7f40',
    yellow: '#F6CD7D',
    grey: '#B2B2B2',
    lightGrey: '#ebeded',
    whiteColor: '#ffff',
    darkgrey:"#979797",
    blueColor:"#4079AD",
    textColor:"#010101"
  },
  fontFamily: {
    regular: 'OpenSans-Regular',
    medium: 'OpenSans-Medium',
    medium2: 'Oswald-Medium',
    bold: 'Oswald-Bold',
    semibold: 'OpenSans-SemiBold',
    light:'OpenSans-Light',
  },
  fontSizes: {
    xxbig: moderateScale(34),
    xbig: moderateScale(26),
    big: moderateScale(22),
    xxmedium: moderateScale(19),
    xmedium: moderateScale(17),
    medium: moderateScale(15),
    small: moderateScale(13),
    verySmall: moderateScale(11),
    tinySmall: moderateScale(9),
  },
};
