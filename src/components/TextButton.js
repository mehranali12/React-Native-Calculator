import React, { useState, useEffect } from 'react';
import { Text, StyleSheet, TouchableNativeFeedback } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { colors } from '../constants';

export default TextButton = ({ name, style, onPress }) => {

    const [rippleColor, setRippleColor] = useState('red');
    const [rippleOverFlow, setrippleOverFlow] = useState(false);

    const handleOnPress = () => {
        onPress(onPress);
    }

    return (
        <TouchableNativeFeedback
            onPress={() => {
                handleOnPress();
                setrippleOverFlow(!rippleOverFlow);
            }}
            style={styles.button}
            background={TouchableNativeFeedback.Ripple(rippleColor, rippleOverFlow)}
        >
            <Text style={[styles.text, style]}>{name}</Text>
        </TouchableNativeFeedback>
    )
}

const styles = StyleSheet.create({
    text: {
        backgroundColor: '#303136',
        color: colors.primary,
        fontWeight: 'bold',
        fontSize: hp('2%'),
        borderWidth: 1,
        width: wp('18%'),
        height: hp('8%'),
        textAlign: 'center',
        borderRadius: 10,
        padding: '5%',
        margin: '1%',
    },
})