import { TouchableOpacity, StyleProp, ViewStyle, TextProps, TextStyle } from 'react-native'
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
      {icon && icon}
      <TextComponent
        text={text}
        color={textColor ?? COLORS.HEX_ORANGE}
        font={FONTFAMILY.poppins_bold}
        styles={[textStyles, {
          marginLeft: icon ? 15 : 0
        },
        ]}
        flex={icon && iconFlex === 'right' ? 1 : 0}
      />
      {icon && iconFlex === 'right' && icon}
    </TouchableOpacity> // nếu icon và iconFlex = right thì nó sẽ nằm về phía bên phải
  ) : (
    <TouchableOpacity>
      <TextComponent 
        text={text}
        color={type === 'link' ? COLORS.HEX_ORANGE : COLORS.HEX_BLACK}/>
    </TouchableOpacity>
  )
}

export default ButtonComponent;