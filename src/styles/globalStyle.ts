import { StyleSheet } from "react-native";
import COLORS from "../assets/colors/Colors";
import { FONTFAMILY } from "../../assets/fonts";

export const globalStyle = StyleSheet.create({
    container: {
        flex: 1,
    },
    text: {
        fontFamily: FONTFAMILY.poppins_regular,
        fontSize: 16,
        color: COLORS.WHITE
    },
    button: {
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.HEX_ORANGE,
        paddingHorizontal: 10,
        minHeight: 56,
        flexDirection: 'row'
    }
})