import React from 'react';
import { TextInput, StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { colors } from '../constants'

export default Input = ({placeholder, value, onChangeText1, secureTextEntry, ...otherprops}) => {
    return(
        <TextInput
            placeholder={placeholder}
            placeholderTextColor={colors.primary}
            style={styles.inputContainer}
            onChangeText={onChangeText1}
            secureTextEntry={secureTextEntry}
            showSoftInputOnFocus={false}
            value={value}
            {...otherprops}
        />
    )
}

const styles = StyleSheet.create({
    inputContainer:{
        width: wp('100%'),
        height: hp('33%'),
        alignItems: 'center',
        color: colors.primary,
        fontSize: 14,
        borderRadius: 10,
        paddingHorizontal: 10
    }
})