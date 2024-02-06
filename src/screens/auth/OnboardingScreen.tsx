import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { globalStyle } from '../../styles/globalStyle';
import Swiper from 'react-native-swiper';
import IMAGES from '../../assets/images/Images';
import COLORS from '../../assets/colors/Colors';

const OnboardingScreen = ({navigation}: any) => {
  const [index, setIndex] = useState(0);

  return (
    <View style = {[globalStyle.container]}>
        <Swiper style = {{}} 
                loop = {false}
                onIndexChanged={num => setIndex(num)}
                index={index}
                dotColor = {COLORS.HEX_LIGHT_GRAY}
                activeDotColor = {COLORS.HEX_ORANGE}>
            <Image source={IMAGES.Onboarding} style = {{flex: 1, width: '100%', height:'100%'}}/>
            <Image source={IMAGES.Onboarding1} style = {{flex: 1, width: '100%', height:'100%'}}/>
            <Image source={IMAGES.Onboarding2} style = {{flex: 1, width: '100%', height:'100%'}}/>
        </Swiper>
        <View style = {[styles.directional]}>
            <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
              <Text style = {styles.text}>Skip</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => index < 2 ? setIndex(index + 1) : navigation.navigate('LoginScreen')}>
              <Text style = {styles.text}>Next</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  directional: {
    paddingHorizontal: 16,
    paddingVertical: 20,
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  text: {
    color: COLORS.HEX_ORANGE,
    fontSize: 20,
    fontWeight: '500',
  }
})

export default OnboardingScreen;