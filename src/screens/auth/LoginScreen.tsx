import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState } from 'react';
import { Image, Switch } from 'react-native';
import { ButtonComponent, InputComponent, KeyboardAvoidingWrapper, RowComponent, SectionComponent, TextComponent } from '../../component';
import { Lock, Sms } from 'iconsax-react-native';
import COLORS from '../../assets/colors/Colors';
import IMAGES from '../../assets/images/Images';
import { FONTFAMILY } from '../../../assets/fonts';

const LoginScreen = () => {

    // Lấy dữ liệu
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isRemember, setIsRemember] = useState(true);

    return (
        <KeyboardAvoidingWrapper>
            <SectionComponent
                styles={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: 75
                }}>
                <Image
                    source={IMAGES.LogoLogin}
                    style={{ width: 142, height: 142, marginBottom: 20 }} />
            </SectionComponent>
            <SectionComponent>
                <TextComponent
                    title
                    text='Sign in'
                    size={50}
                    font={FONTFAMILY.poppins_bold}
                    styles={{ marginBottom: 20, }} />
                <InputComponent
                    value={email}
                    placeholder='Email'
                    onChange={val => setEmail(val)}
                    allowClear
                    affix={<Sms size={22} color={COLORS.HEX_LIGHT_GREY} />} />
                <InputComponent
                    value={password}
                    placeholder='Password'
                    onChange={val => setPassword(val)}
                    isPassword
                    affix={<Lock size={22} color={COLORS.HEX_LIGHT_GREY} />} />
            </SectionComponent>
            <SectionComponent>
                <RowComponent justify='space-between'>
                    <RowComponent onPress={() => setIsRemember(!isRemember)}>
                        <Switch
                            trackColor={{ false: COLORS.WHITE, true: COLORS.HEX_ORANGE }}
                            thumbColor={isRemember ? COLORS.WHITE : COLORS.HEX_ORANGE}
                            value={isRemember}
                            onChange={() => setIsRemember(!isRemember)} />
                        <TextComponent text='Remember me' />
                    </RowComponent>
                    <ButtonComponent
                        text='Forgot Password?'
                        onPress={() => { }}
                        type="link" />
                </RowComponent>
            </SectionComponent>
            <SectionComponent styles={{ marginTop: 20 }}>
                <ButtonComponent text='SIGN IN' type='orange' />
            </SectionComponent>
            <SectionComponent>
                <TextComponent
                    text='OR'
                    color={COLORS.HEX_LIGHT_GREY}
                    styles={{
                        textAlign: 'center',
                        fontSize: 16,
                        fontFamily: FONTFAMILY.poppins_medium,
                        marginBottom: 10
                    }} />
                <RowComponent>
                    <ButtonComponent 
                        text='with Google' 
                        iconFlex='left'
                        type='orange'
                        styles = {{
                            backgroundColor: COLORS.WHITE, 
                            flex: 1, 
                            marginRight: 7}}
                        textColor={COLORS.HEX_LIGHT_GREY}
                        
                        />
                    <ButtonComponent 
                        text='with Facebook' 
                        iconFlex='left'
                        type='orange'
                        styles = {{backgroundColor: COLORS.WHITE, flex: 1}}
                        textColor={COLORS.HEX_LIGHT_GREY}/>    
                </RowComponent>
            </SectionComponent>
            <SectionComponent>
                <RowComponent justify='center'>
                    <TextComponent text="Don't have an account?  " />
                    <ButtonComponent type='link' text='Sign up' />
                </RowComponent>
            </SectionComponent>
        </KeyboardAvoidingWrapper>
    )
}

export default LoginScreen;

// <InputComponent value={email} onChange={val => setEmail(val)}/>  bingding dữ liệu 2 chiều
// nghĩa là từ email gán xuống sau khi có sự thay đổi thì gán ngược lại lên.