import { StyleSheet } from 'react-native';

export const layoutStyles = StyleSheet.create({
  content: {
    paddingLeft: 25,
    paddingRight: 25,
  },
  flexRow: {
    flexDirection: 'row',
  },
  alignCenter: {
    justifyContent: 'center',
    // flexDirection: 'row',
  },
  alignMiddle: {
    alignItems: 'center',
    // flexDirection: 'row',
  },
  alignBottom: {
    alignItems: 'flex-end',
    // flexDirection: 'row',
  },
  spaceAround: {
    justifyContent: 'space-around',
    // flexDirection: 'row',
  },
  spaceBetween: {
    justifyContent: 'space-between',
    // flexDirection: 'row',
  },
  sectionPadding: {
    // paddingHorizontal: 15,
    paddingHorizontal: 20,
  },
  divider: {
    width: '100%',
    height: 1,
    borderBottomWidth: 1,
    borderColor: '#8B8B8B',
    // borderTopColor: 'transparent',
    marginTop: 10,
    marginBottom: 10,
  },
  absolute: {
    position: 'absolute',
  },
  boxShadow: {
    shadowColor: '#18303F',
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 2,
  },
});
