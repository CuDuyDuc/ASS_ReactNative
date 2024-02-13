import React, { useState } from 'react';
import { Image } from 'react-native';
import { 
    ButtonComponent, 
    InputComponent, 
    KeyboardAvoidingWrapper, 
    RowComponent, 
    SectionComponent, 
    TextComponent } from '../../component';
import { Lock, Sms, User } from 'iconsax-react-native';
import COLORS from '../../assets/colors/Colors';
import IMAGES from '../../assets/images/Images';
import { FONTFAMILY } from '../../../assets/fonts';

const initValues = {
    username: '',
    email: '',
    password: '',
    confirmPass: '',
}

const SignUpScreen = ({ navigation }: any) => {
    // Nếu có từ 3 trường trở lên thì sẽ khai báo initValues thay vì const từng thành phần 
    const [values, setValues] = useState(initValues);

    const handleChangeValue = (key: string, value: string) => {
        const data: any = { ...values }
        data[`${key}`] = value;
        setValues(data);
    }

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
                    text='Đăng Ký'
                    size={45}
                    font={FONTFAMILY.poppins_bold}
                    styles={{ marginBottom: 20, }} />
                <InputComponent
                    value={values.username}
                    placeholder='Họ tên'
                    onChange={val => handleChangeValue('username', val)}
                    allowClear
                    affix={<User size={22} color={COLORS.HEX_LIGHT_GREY} />} />
                <InputComponent
                    value={values.email}
                    placeholder='Email'
                    onChange={val => handleChangeValue('email', val)}
                    allowClear
                    affix={<Sms size={22} color={COLORS.HEX_LIGHT_GREY} />} />
                <InputComponent
                    value={values.password}
                    placeholder='Mật khẩu'
                    onChange={val => handleChangeValue('password', val)}
                    isPassword
                    affix={<Lock size={22} color={COLORS.HEX_LIGHT_GREY} />} />
                <InputComponent
                    value={values.confirmPass}
                    placeholder='Xác nhận mật khẩu'
                    onChange={val => handleChangeValue('confirmPass', val)}
                    isPassword
                    affix={<Lock size={22} color={COLORS.HEX_LIGHT_GREY} />} />
            </SectionComponent>
            <SectionComponent styles={{ marginTop: 20 }}>
                <ButtonComponent text='ĐĂNG KÝ' type='orange' />
            </SectionComponent>
            <SectionComponent>
                <RowComponent justify='center'>
                    <TextComponent text="Bạn đã có tài khoản?  " />
                    <ButtonComponent type='link' text='Đăng nhập' onPress={() => {
                        navigation.navigate('LoginScreen')
                    }} />
                </RowComponent>
            </SectionComponent>
        </KeyboardAvoidingWrapper>
    )
}

export default SignUpScreen;