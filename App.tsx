import React, { useEffect, useState } from 'react';
import { SplashScreen } from './src/screens';
import AuthNavigators from './src/navigators/AuthNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';
import MainNavigator from './src/navigators/MainNavigator';

const App = () => {
  const [isShowSplash, setIsShowSplash] = useState(true);
  const [accessToken, setAccessToken] = useState('');

  // Nhận biết người dùng đã đăng nhập hay chưa?
  const {getItem, setItem} = useAsyncStorage('assetToken');

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsShowSplash(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    CheckLogin();
  },[]);

  const CheckLogin = async () => {
    const token = await getItem();

    token && setAccessToken(token); // nếu có token thì sẽ set cái token bằng token nhận đc
  };

   return (
    <>
      <StatusBar 
        barStyle= "light-content" 
        backgroundColor= "transparent"
        translucent/>
      {
        isShowSplash ? (
        <SplashScreen />) : (
        <NavigationContainer>
          {accessToken ? <MainNavigator/> : <AuthNavigators/>}
        </NavigationContainer>)
      }
    </>
  );
};

export default App;
