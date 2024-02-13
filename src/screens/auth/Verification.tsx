import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { globalStyle } from '../../styles/globalStyle';
import { ButtonComponent, RowComponent, SectionComponent, TextComponent } from '../../component';
import { ArrowLeft } from 'iconsax-react-native';
import COLORS from '../../assets/colors/Colors';
import { FONTFAMILY } from '../../../assets/fonts';

const Verification = ({ navigation }: any) => {
    return (
        <View style={globalStyle.container}>
            <SectionComponent>
                <TouchableOpacity style={{ paddingTop: 50, paddingBottom: 10 }}>
                    <ArrowLeft size={24} color={COLORS.WHITE}
                        onPress={() => navigation.goBack()} />
                </TouchableOpacity>
                <TextComponent text='Mã Xác Thực' title font={FONTFAMILY.poppins_bold} />
                <TextComponent text='Chúng tôi đã gửi mã xác minh vào: ' styles={{ paddingBottom: 30 }} />
            </SectionComponent>
            <SectionComponent>
                <RowComponent justify='space-between'>
                    <TextComponent text='-' />
                    <TextComponent text='-' />
                    <TextComponent text='-' />
                    <TextComponent text='-' />
                </RowComponent>
            </SectionComponent>
            <SectionComponent styles={{alignItems:'center'}}>
                <ButtonComponent text='Tiếp Tục' type='orange' styles={{width: '80%'}}/> 
            </SectionComponent>
        </View>
    )
}

export default Verification;