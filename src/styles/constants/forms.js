import { StyleSheet, Platform } from 'react-native';

export const formStyles = StyleSheet.create({
  inputGray: {
    borderRadius: 10,
    backgroundColor: '#EFEEEE',
    // borderWidth: 1,
    // borderColor: '#8D98AB',
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.16,
    shadowRadius: 2,
    paddingLeft: 21,
    justifyContent: 'center',
    elevation: 4,
    width: '100%',
    height: 51,
    color: '#000',
  },
  inputUnderline: {
    // borderRadius: 8,
    // backgroundColor: '#EFEEEE',
    borderBottomWidth: 1,
    borderColor: '#8B8B8B',
    paddingHorizontal: 0,
    paddingVertical: 2,
    height: 40,
    paddingLeft: 0,
    // fontSize: 16,
  },
  checkbox: {
    // backgroundColor: '#FFF',
    borderColor: '#8D98AB',
    borderRadius: 6,
  },
});
