import { useNavigation } from '@react-navigation/native'
import { VStack, Image, Text, Center, Container, Heading, ScrollView } from 'native-base'
import BackgroundImg from '../assets/background.png'
import LogoSvg from '../assets/series.svg'
import { Button } from '../components/Button'
import { Input } from '../components/Input'
import { AuthNavigatorRoutesProps } from '../routes/auth.routes'

export function SignIn(){

  const navigation = useNavigation<AuthNavigatorRoutesProps>()

  function handleNewAccount() {
    navigation.navigate('signUp')
  }
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
    <VStack flex={1} px={10} pb={16}>
      <Image 
        source={BackgroundImg}
        defaultSource={BackgroundImg}
        alt="Pessoas treinando"
        resizeMode="contain"
        position="absolute"
      />

      <Center my={24}>
        <Container flexDirection="row" alignItems="center" >
          <LogoSvg />
          <Text color="gray.100" fontSize="2xl" ml="2" fontFamily="heading">Coder Gym</Text>
        </Container>
        <Text color="gray.100" fontSize="sm">
          Treine sua mente e o seu corpo
        </Text>
      </Center>

      <Center >
        <Heading color="gray.100" fontSize="xl" mb={6} fontFamily="heading">
          Faça seu login
        </Heading>

        <Input 
          placeholder="E-mail"
          keyboardType='email-address'
          autoCapitalize="none"
          />
        <Input 
          placeholder="Senha"
          secureTextEntry
          />
        <Button
          title="Acessar"
        />
      </Center>
      
      <Center mt={24}>
        <Text color="gray.100" fontSize="sm" mb={3} fontFamily="body">
          Ainda não tem acesso?
        </Text>  

        <Button
          title="Criar conta"
          variant="outline"
          onPress={handleNewAccount}
          />
        </Center>     
    </VStack>
    </ScrollView>
  )
}