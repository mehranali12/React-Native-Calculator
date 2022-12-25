import React from 'react';
import { View, StyleSheet, Dimensions, TouchableOpacity, Text } from 'react-native';
import { colors } from '../constants';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { Input, TextButton, Button } from '../components';

const { width, height } = Dimensions.get('window');

export default Signup = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Input
                placeholder="Username"
            />
             <Input
                placeholder="Email"
            />
            <Input
                placeholder="Password"
                secureTextEntry={true}
            />

            <Button
                name="SignUp"
                onPress={() => navigation.navigate('Home')}
            />

            <TextButton
                name="Have an account? SignInnnnnnnnnn"
                onPress={() => navigation.navigate('Login')}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        alignItems: 'center',
        justifyContent: 'center',
        height: hp('100%'),
        width: wp('100%'),
    }
});