import { View, ImageSourcePropType, Image, FlatList } from 'react-native'
import React from 'react'
import COLORS from '../assets/colors/Colors';
import { ButtonComponent, RowComponent, TextComponent } from '.';
import { FONTFAMILY } from '../../assets/fonts';
import LinearGradient from 'react-native-linear-gradient';

interface Props{
    image: ImageSourcePropType | undefined;
    name:string,
    description:string,
    size?:string,
    price:string,
    quantity?:string,
    checkCartItem:boolean
}
const CoffeCard = (props:Props) => {
    const {image, name, description, size, price, quantity, checkCartItem} =props
  return (
    <View>
       <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        colors={[COLORS.HEX_LIGHT_GREY, COLORS.HEX_BLACK]}
        style={{padding:13, borderRadius:25,marginEnd:(checkCartItem ? undefined : 15)}}>
            <RowComponent   justify='space-between' styles={{flexDirection:(checkCartItem?'row':'column')}}>
                <Image source={image}/>
                <View style={{marginStart:10, maxWidth:200}} >
                    <TextComponent text={name} size={13}/>
                    <TextComponent text={description} color={COLORS.HEX_LIGHT_GREY} size={10}/>
                    <RowComponent justify='space-between'>
                        <View>
                            {checkCartItem ? (<TextComponent text={size} font={FONTFAMILY.poppins_bold} styles={{
                                width:90,
                                height:40, 
                                backgroundColor:COLORS.HEX_BLACK, 
                                borderRadius:10, 
                                textAlign:'center',
                                lineHeight:40,
                                marginEnd:5
                                }}/>):undefined}
                        </View> 
                        {checkCartItem?(
                            <View style={{flexDirection:'row'}}>
                                <TextComponent text={price} font={FONTFAMILY.poppins_bold} size={18}/>
                                <TextComponent text='VNĐ' font={FONTFAMILY.poppins_bold} color={COLORS.HEX_ORANGE} size={18}/>
                            </View>
                        ):undefined}
                    </RowComponent>
                   <View style={{marginTop:5}}>
                    <RowComponent  justify='space-between'>
                        {checkCartItem ?(
                            <ButtonComponent  styles={{width:35,height:35}}  text='-' type='orange' textStyles={{fontSize:16}}/>
                        ) : <View style={{flexDirection:'row', marginEnd:5}}>
                            <TextComponent text={price} font={FONTFAMILY.poppins_regular} size={14}/>
                            <TextComponent text='VNĐ' font={FONTFAMILY.poppins_medium} color={COLORS.HEX_ORANGE} size={14}/>
                        </View>}
                        {checkCartItem ?(
                            <TextComponent size={14} text={quantity} font={FONTFAMILY.poppins_bold} styles={{
                                width:50,
                                height:30, 
                                backgroundColor:COLORS.HEX_BLACK, 
                                borderRadius:10, 
                                textAlign:'center',
                                lineHeight:30,
                                marginEnd:10,
                                borderColor:COLORS.HEX_ORANGE
                            }}/>
                        ) : <View></View>}  
                            <ButtonComponent styles={checkCartItem ? {width:35,height:35} : {borderRadius:8}}  text='+' type='orange' textStyles={{fontSize:16}}/>
                    </RowComponent>
                   </View>
                </View>
            </RowComponent>
       </LinearGradient>
    </View>
  )
}

// CardItemComponent

const CardItemComponent = ({ checkCartItem, data }: { checkCartItem: boolean; data: any[] }) => {
    return (
        <FlatList
            data={data}
            horizontal
            renderItem={({ item }) => (
                <CoffeCard
                    checkCartItem={checkCartItem}
                    image={item.iamge}
                    name={item.name}
                    description={item.description}
                    price={item.price}
                />
            )}
            showsHorizontalScrollIndicator={false}
        />
    );
};


export default CardItemComponent;