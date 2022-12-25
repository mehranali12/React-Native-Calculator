import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import color from '../../constants/color';

const GolbalStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#17181A',
    height: hp('100%'),
    width: wp('100%'),
  },
  modal: {
    width: wp('90%'),
    height: hp('65%'),
    backgroundColor: '#1B496A',
    marginTop: hp('28%'),
    borderWidth: 1,
    borderRadius: 8,
    marginLeft: '3%',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  inputarea: {
    width: wp('100%'),
  },
  input: {
    fontSize: hp('4%'),
    color: color.white,
  },
  result: {
    color: color.white,
  },
  progress: {
    width: wp('80%'),
    alignItems: 'center',
    justifyContent: 'center',
    justifyContent: 'space-between',
    marginHorizontal: wp('15%'),
  },
  keysContainer: {
    width: wp('100%'),
    height: hp('45%'),
    alignItems: 'center',
    justifyContent: 'center',
    padding: wp('3%'),
},
  removeElement: {
    backgroundColor: '#5B5E60',
    color: color.white,
    fontSize: wp('3%'),
    fontWeight: 'bold',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: wp('8%'),
    textAlign: 'center',
  },
  showHistory: {
    flex: 1,
    borderTopWidth: 1,
    borderTopColor: 'gray',
    padding: 10,
    flexDirection: 'row-reverse',
    width: '100%',
  },
  modalCloseButton: {
    borderBottomWidth: 1,
    borderRightWidth: 1,
    borderBottomRightRadius: 25,
    borderBottomColor: color.gray,
    borderRightColor: color.gray,
    width: wp('15%'), height: hp('8%'),
    justifyContent: 'center',
    alignItems: 'center'
  },
  clearHistryButton: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
    borderTopWidth: 1,
    borderColor: '#ECECEC',
    padding: 10,
  },

});
export { GolbalStyle };