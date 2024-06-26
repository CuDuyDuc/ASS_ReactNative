import React, { useEffect, useState } from 'react'
import { ButtonComponent, ContainerComponent, InputComponent, RowComponent, SectionComponent, TextComponent } from '../../../component';
import { Image, TouchableOpacity } from 'react-native';
import IMAGES from '../../../assets/images/Images';
import { FONTFAMILY } from '../../../../assets/fonts';
import { Lock, Sms, User } from 'iconsax-react-native';
import COLORS from '../../../assets/colors/Colors';
import { Validate } from '../../../utils/validate';
import { useDispatch, useSelector } from 'react-redux';
import KeyboardAvoidingViewWrapper from '../../../component/KeyboardAvoidingWrapper';
import {authSelector } from '../../../redux/reducers/authReducer';
import { UserModel } from '../../../models/usersModel';

const initValues = {
    username: '',
    email: '',
    password: '',
    confirmPass: '',
}
const PersonalDetailsScreen = ({ navigation, route}: any) => {
    const [values, setValues] = useState(initValues);
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState<any>();
    const [isDisable, setIsDisable] = useState(true);
    const auth = useSelector(authSelector);
    const [dataUser, setDataUser]=useState<UserModel[]>([])

    // khi người dùng mới vào thì chưa nhập bất kỳ thông tin gì thì sẽ không click cho tới khi 
    // điền đầy đủ thông tin.
    // lưu vào trong data
    const dispatch = useDispatch();
    
    const handleChangeValue = (key: string, value: string) => {
        const data: any = { ...values }
        data[`${key}`] = value;
        setValues(data);
    }

    const formValidator = (key: string) => {
        const data = { ...errorMessage };
        let message = ``;

        switch (key) {
            case 'email':
                if (!values.email) {
                    message = `Vui lòng nhập Email!`;
                } else if (!Validate.email(values.email)) {
                    message = 'Email không hợp lệ!';
                } else {
                    message = '';
                }

                break;

            case 'password':
                message = !values.password ? `Vui lòng nhập Password` : '';
                break;

            case 'confirmPass':
                if (!values.confirmPass) {
                    message = `Vui lòng nhập xác nhận mật khẩu!`;
                } else if (values.confirmPass !== values.password) {
                    message = 'Mật khẩu không khớp!';
                } else {
                    message = '';
                }

                break;
        }

        data[`${key}`] = message;

        setErrorMessage(data);
    };
    return (
        <KeyboardAvoidingViewWrapper>
                    <ContainerComponent>
            <SectionComponent styles={{ marginTop: 60, marginBottom: 40 }}>
                <RowComponent justify='flex-start'>
                    <TouchableOpacity
                        onPress={() => { navigation.goBack() }}
                        style={{
                            justifyContent: 'flex-start',
                            flex: 0.5
                        }}>
                        <Image source={IMAGES.Back_Icon} />
                    </TouchableOpacity>
                    <TextComponent text='Setting' size={18} font={FONTFAMILY.poppins_medium} />
                </RowComponent>
            </SectionComponent>
            <SectionComponent 
                    styles={{
                        flexDirection: 'row', 
                        justifyContent: 'center',
                        marginBottom: 30}}>
                <TouchableOpacity>
                    <Image source={IMAGES.Profile} />
                </TouchableOpacity>
            </SectionComponent>
            <SectionComponent>
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
                    affix={<Sms size={22} color={COLORS.HEX_LIGHT_GREY} />}
                    onEnd={() => formValidator('email')} />
                <InputComponent
                    value={values.password}
                    placeholder='Mật khẩu'
                    onChange={val => handleChangeValue('password', val)}
                    isPassword
                    affix={<Lock size={22} color={COLORS.HEX_LIGHT_GREY} />}
                    onEnd={() => formValidator('password')} />
                <InputComponent
                    value={values.confirmPass}
                    placeholder='Xác nhận mật khẩu'
                    onChange={val => handleChangeValue('confirmPass', val)}
                    isPassword
                    affix={<Lock size={22} color={COLORS.HEX_LIGHT_GREY} />} />
            </SectionComponent>
            <SectionComponent>
                <ButtonComponent text='Lưu Thông Tin' type='orange'/>
            </SectionComponent>
        </ContainerComponent>
        </KeyboardAvoidingViewWrapper>
    )
}

export default PersonalDetailsScreen;