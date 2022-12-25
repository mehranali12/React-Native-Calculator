import { StyleSheet } from 'react-native';
import { COLORS, FONTS } from '@constants';

export const typographyStyles = StyleSheet.create({
  h1: {
    fontSize: 24,
  },
  textBlue: {
    color: COLORS.blue,
  },
  textBlackDark:{
    color:COLORS.black

  },
  textPrimary: {
    color: COLORS.primary,
  },
  textSecondary: {
    color: COLORS.secondary,
  },
  textDanger: {
    color: COLORS.danger,
  },
  textBlueDark: {
    color: '#0840AA',
  },
  textWhite: {
    color: '#FFF',
  },
  textBlackLight: {
    color: 'rgba(0,0,0,0.6)',
  },
  textpurple:{
    color: COLORS.purple,
  },
  textLeft: {
    textAlign: 'left',
  },
  textCenter: {
    textAlign: 'center',
  },
  textRight: {
    textAlign: 'right',
  },
  textShadow: {
    textShadowColor: 'rgba(0,0,0,0.2)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 4,
  },
  textSemiBold: {
    fontWeight: '600',
  },
  t8: {
    fontSize: 8,
  },
  t10: {
    fontSize: 10,
    lineHeight: 12,
  },
  t12: {
    fontSize: 12,
    lineHeight: 14,
  },
  t13: {
    fontSize: 13,
    lineHeight: 16,
  },
  t14: {
    fontSize: 14,
    lineHeight: 18,
  },
  t16: {
    fontSize: 16,
    // lineHeight: 19,
  },
  t18: {
    fontSize: 18,
    // lineHeight: 21,
  },
  t20: {
    fontSize: 20,
  },
  t22: {
    fontSize: 22,
  },
  t24: {
    fontSize: 24,
  },
  t18l27: {
    fontSize: 18,
    lineHeight: 27,
  },
  fontNormal: {
    fontStyle: 'normal',
  },
  titilliumSemiBold: {
    fontFamily: FONTS.titilliumSemiBold,
  },
  titilliumBold: {
    fontFamily: FONTS.titilliumBold,
  },
  titilliumLight: {
    fontFamily: FONTS.titilliumLight,
  },
  poppinsBold: {
    fontFamily: FONTS.poppinsBold,
  },
  poppinsMedium: {
    fontFamily: FONTS.poppinsMedium,
  },
  poppinsSemiBold: {
    fontFamily: FONTS.poppinsSemiBold,
  },
  poppins: {
    fontFamily: FONTS.poppins,
  },
  quicksand: {
    fontFamily: FONTS.quicksand,
  },
  quicksandMedium: {
    fontFamily: FONTS.quicksandMedium,
  },
  quicksandBold: {
    fontFamily: FONTS.quicksandBold,
  },
});
