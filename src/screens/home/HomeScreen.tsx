import React, { useEffect, useState } from 'react';
import { Image, TouchableOpacity} from 'react-native';
import { InputComponent, RowComponent, SectionComponent, TextComponent, CategoriesList, ContainerComponent, CardItemComponent} from '../../component';
import IMAGES from '../../assets/images/Images';
import { FONTFAMILY } from '../../../assets/fonts';
import { SearchNormal1 } from 'iconsax-react-native';
import COLORS from '../../assets/colors/Colors';
import { useDispatch, useSelector } from 'react-redux';
import { authSelector} from '../../redux/reducers/authReducer';
import { products } from '../../models/productsModel';
import productAPI from '../../apis/productAPI';

const HomeScreen = ({navigation}: any) => {
    const dispatch = useDispatch();
    const [isSearch, setIsSearch] = useState('');
    const [product, setProduct] = useState<products[]>([]);
    const filteredCoffeeArray =(value:String)=>{
        return product.filter(item => item.type === value)
    }
    const getDataProduct = async ()=>{
        try {
            const res = await productAPI.HandleProduct('/getAllProduct');
            const data:products[] = await res.data;
            setProduct(data)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getDataProduct()
      }, []);
    return (
        <ContainerComponent isScroll>
            <SectionComponent styles={{ marginTop: 60 }}>
                <RowComponent justify='space-between'>
                    <TouchableOpacity  onPress={() => {navigation.navigate('SettingScreen')}}>
                        <Image source={IMAGES.Setting} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={IMAGES.Avata} />
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
                <CardItemComponent navigation={navigation}  checkCartItem={false} data={filteredCoffeeArray('Coffee')}/>
                <TextComponent text='Coffee beans' styles={{marginTop:25}}/>
            </SectionComponent>
            <SectionComponent>
            <CardItemComponent navigation={navigation}  checkCartItem={false} data={filteredCoffeeArray('Bean')}/>
            </SectionComponent>
        </ContainerComponent>
    )
}

export default HomeScreen;