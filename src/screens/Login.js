import React from 'react';
import { View, StyleSheet, Dimensions, TouchableOpacity, Text } from 'react-native';
import { colors } from '../constants';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { Input, TextButton, Button } from '../components';


const { width, height } = Dimensions.get('window');

export default Login = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Input
                placeholder="Email"
            />
            <Input
                placeholder="Password"
                secureTextEntry={true}
            />

            <Button
                name="Login"
                onPress={() => navigation.navigate('Home')}
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
})