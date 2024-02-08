import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import { Button, Image, Text, View } from 'react-native';
import { ButtonComponent } from '../../component';
import IMAGES from '../../assets/images/Images';
import { globalStyle } from '../../styles/globalStyle';

const LoginScreen = () => {
    return (
        <View style = {[globalStyle.container, {padding: 16}]}>
            <Text>Hello LoginScreen</Text>
            {/* <Button title='Login' onPress={async () => await AsyncStorage.setItem('assetToken', 'abc')}/> */}
            <ButtonComponent 
                text='Login' 
                onPress={() => console.log('Login')} 
                type='link'
                icon= {<Text><Image source={IMAGES.FbIcon}/></Text>}
                />
        </View>
    )
}

export default LoginScreen;