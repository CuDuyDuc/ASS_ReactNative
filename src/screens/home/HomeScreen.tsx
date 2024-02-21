import React, { useState } from 'react';
import { Image, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { authSelector} from '../../redux/reducers/authReducer';
import { InputComponent, RowComponent, SectionComponent, TextComponent } from '../../component';
import IMAGES from '../../assets/images/Images';
import { globalStyle } from '../../styles/globalStyle';
import { FONTFAMILY } from '../../../assets/fonts';
import { SearchNormal1 } from 'iconsax-react-native';
import COLORS from '../../assets/colors/Colors';

const HomeScreen = () => {
    const [isSearch, setIsSearch] = useState('');
    const dispatch = useDispatch();

    const auth = useSelector(authSelector);
    return (
        <View style = {globalStyle.container}>
            <SectionComponent styles={{marginTop: 60}}>
                <RowComponent justify='space-between'>
                    <Image source={IMAGES.Avata}/>
                    <Image source={IMAGES.Setting}/> 
                </RowComponent>
            </SectionComponent>
            <SectionComponent>
                <TextComponent 
                    text={"Find the best \ncoffee for you"}
                    size={38}
                    font={FONTFAMILY.poppins_bold}/>
            </SectionComponent>
            <SectionComponent>
                <InputComponent 
                    backgroundColor={COLORS.HEX_LIGHT}
                    value={isSearch}
                    placeholder='Find Your Coffee...'
                    onChange={val => setIsSearch(val)}
                    allowClear
                    affix={<SearchNormal1 size={22} variant="Bold" color={COLORS.HEX_LIGHT_GREY} />}
                    />
            </SectionComponent>
        </View>
    )
}

export default HomeScreen;