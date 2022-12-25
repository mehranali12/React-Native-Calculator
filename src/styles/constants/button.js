import { StyleSheet } from 'react-native';
import { COLORS } from '@constants';

export const buttonStyles = StyleSheet.create({
  btnShadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 4,
  },
  btnRound: {
    borderRadius: 12,
  },
  btnAlternate: {
    backgroundColor: COLORS.secondary,
  },
});
