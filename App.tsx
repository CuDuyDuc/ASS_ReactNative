import React, { useEffect, useState } from 'react';
import { SplashScreen } from './src/screens';
import AuthNavigators from './src/navigators/AuthNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';

const App = () => {
  const [isShowSplash, setIsShowSplash] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsShowSplash(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, [])

  return (
    <>
      <StatusBar 
        barStyle= "light-content" 
        backgroundColor= "transparent"
        translucent/>
      {
        isShowSplash ? (
        <SplashScreen />) : (
        <NavigationContainer><AuthNavigators /></NavigationContainer>)
      }
    </>
  )
}

export default App;

// có dấu ! giống như nghịch đảo mục đích để hiển thị SplashScreen đầu tiên.