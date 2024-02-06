import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import { Button, Text, View } from 'react-native';

const LoginScreen = () => {
    return (
        <View>
            <Text>Hello LoginScreen</Text>
            <Button title='Login' onPress={async () => await AsyncStorage.setItem('assetToken', 'abc')}/>
        </View>
    )
}

export default LoginScreen;