import { TouchableOpacity, StyleProp, ViewStyle,TextStyle } from 'react-native'
import React, { ReactNode } from 'react'
import TextComponent from './TextComponent';
import { globalStyle } from '../styles/globalStyle';
import COLORS from '../assets/colors/Colors';
import { FONTFAMILY } from '../../assets/fonts';

interface Props {
  icon?: ReactNode;
  text: string;
  type?: 'orange' | 'text' | 'link'; // kiểu button mặc định hoặc chữ thường hoặc link chữ
  color?: string;
  styles?: StyleProp<ViewStyle>;
  textColor?: string;
  textStyles?: StyleProp<TextStyle>;
  textFont?: string;
  onPress?: () => void;
  iconFlex?: 'right' | 'left';
}

const ButtonComponent = (props: Props) => {
  const {
    icon,
    text,
    type,
    color,
    styles,
    textColor,
    textStyles,
    textFont,
    onPress,
    iconFlex } = props;
  // custom button sau đó là style riêng và cuối cùng là styles đè lên
  return  type === 'orange' ? (
    <TouchableOpacity
      onPress={onPress}
      style={[
        globalStyle.button, {
          backgroundColor: color ?? COLORS.HEX_ORANGE,
        }, styles]}>
      {icon && iconFlex === 'left' && icon}
      <TextComponent
        text={text}
        color={textColor ?? COLORS.WHITE}
        font={textFont ?? FONTFAMILY.poppins_bold}
        styles={[textStyles, {
          marginLeft: icon ? 15 : 0,
          fontSize: 16, 
          textAlign: 'center'
        },
        ]}
        flex={icon && iconFlex === 'right' ? 1 : 0}
      />
      {icon && iconFlex === 'right' && icon}
    </TouchableOpacity> // nếu icon và iconFlex = right thì nó sẽ nằm về phía bên phải
  ) : (
    <TouchableOpacity onPress={onPress}>
      <TextComponent 
        text={text}
        color={type === 'link' ? COLORS.HEX_ORANGE : COLORS.HEX_BLACK}/>
    </TouchableOpacity>
  )
}

export default ButtonComponent;