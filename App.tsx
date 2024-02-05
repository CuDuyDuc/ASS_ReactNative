import React, { useEffect, useState } from 'react';
import { SplashScreen } from './src/screens';
import AuthNavigators from './src/navigators/AuthNavigator';
import { NavigationContainer } from '@react-navigation/native';

const App = () => {
  const [isShowSplash, setIsShowSplash] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsShowSplash(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, [])

  return isShowSplash ? <SplashScreen/> : <NavigationContainer><AuthNavigators/></NavigationContainer>;
}

export default App;