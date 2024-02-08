import { Text, StyleProp, TextProps, TextStyle } from 'react-native'
import React from 'react'
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { FONTFAMILY } from '../../assets/fonts';
import COLORS from '../assets/colors/Colors';
import { globalStyle } from '../styles/globalStyle';

interface Props {
    text: string;
    color?: string;
    size?: number;
    flex?: number;
    font?: string;
    styles?: StyleProp<TextStyle>; // ngoài những cái custom mặc định thì thêm styles
    title?: boolean;
}

const TextComponent = (props : Props) => {
  const {text, color, size, flex, font, styles, title} = props;
  return (
    <Text style = {[
        globalStyle.text,
        {
            color: color ?? COLORS.WHITE,  // color của người dùng truyền vào hoặc color tích hợp sẵn
            flex: flex ?? 0, // nếu không truyền flex thì mặc định sẽ là 0
            fontSize: size ?? title ? 24 : 16, //custom size hoặc nếu title thì là 24 còn text thì là 16
            fontFamily: font ?? title ? FONTFAMILY.poppins_bold : FONTFAMILY.poppins_regular, // nếu title thì bold
        },
        styles,
    ]}>{text}</Text>
  )
}

export default TextComponent;