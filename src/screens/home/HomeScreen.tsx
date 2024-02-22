import React, { useState } from 'react';
import { Image, TouchableOpacity} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { authSelector } from '../../redux/reducers/authReducer';
import { InputComponent, RowComponent, SectionComponent, TextComponent, CategoriesList, ContainerComponent, CardItemComponent} from '../../component';
import IMAGES from '../../assets/images/Images';
import { FONTFAMILY } from '../../../assets/fonts';
import { SearchNormal1 } from 'iconsax-react-native';
import COLORS from '../../assets/colors/Colors';
import { CoffeeData } from '../../data/CoffeeData';
import { BeansCoffeeData } from '../../data/BeansCoffee';

const HomeScreen = () => {
    const [isSearch, setIsSearch] = useState('');
    const dispatch = useDispatch();
    const auth = useSelector(authSelector);
    return (
        <ContainerComponent isScroll>
            <SectionComponent styles={{ marginTop: 60 }}>
                <RowComponent justify='space-between'>
                    <TouchableOpacity>
                        <Image source={IMAGES.Avata} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={IMAGES.Setting} />
                    </TouchableOpacity>
                </RowComponent>
            </SectionComponent>
            <SectionComponent>
                <TextComponent
                    text={"Find the best \ncoffee for you"}
                    size={38}
                    font={FONTFAMILY.poppins_bold} />
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
            <SectionComponent>
                <CategoriesList />
            </SectionComponent>
            <SectionComponent>
                <CardItemComponent  checkCartItem={false} data={CoffeeData}/>
                <TextComponent text='Coffee beans' styles={{marginTop:25}}/>
            </SectionComponent>
            <SectionComponent>
            <CardItemComponent  checkCartItem={false} data={BeansCoffeeData}/>
            </SectionComponent>
        </ContainerComponent>
    )
}

export default HomeScreen;