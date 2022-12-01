import { StatusBar, View } from 'react-native';
import { NativeBaseProvider } from 'native-base';
import { useFonts, Inter_400Regular, Inter_700Bold } from '@expo-google-fonts/inter';
import { Loading } from './src/components/Loading';
import { THEME } from './src/theme';
import { Routes } from './src/routes';
import * as SplashScreen from 'expo-splash-screen';
import {AuthContext}  from './src/contexts/AuthContext';

export default function App() {
  const [ fontsLoaded ] = useFonts({ Inter_400Regular, Inter_700Bold })

  if (!fontsLoaded) {
    return null;
  }
  
  SplashScreen.preventAutoHideAsync();
  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar 
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
        />
        <AuthContext.Provider value={{
          user: {
          id: '1',
          name: 'John Doe',
          email: 'johndoe@gmail.com',
          avatar: 'john.png'
          }
        }}>
          { fontsLoaded ? <Routes /> : <Loading /> } 
        </AuthContext.Provider>
    </NativeBaseProvider>
  );
}

