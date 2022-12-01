import { StatusBar, View } from 'react-native';
import { NativeBaseProvider } from 'native-base';
import { useFonts, Inter_400Regular, Inter_700Bold } from '@expo-google-fonts/inter';
import { Loading } from './src/components/Loading';
import { THEME } from './src/theme';
import { Routes } from './src/routes';
import * as SplashScreen from 'expo-splash-screen';
import { AuthContextProvider } from './src/contexts/AuthContext';


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
    <AuthContextProvider>

      { fontsLoaded ? <Routes /> : <Loading /> } 
    </AuthContextProvider>
     
    </NativeBaseProvider>
  );
}

