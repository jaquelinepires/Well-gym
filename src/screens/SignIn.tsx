import { useNavigation } from '@react-navigation/native'
import { VStack, Image, Text, Center, Heading, ScrollView, HStack } from 'native-base'
import BackgroundImg from '../assets/bg.png'
import LogoSvg from '../assets/series.svg'
import { Button } from '../components/Button'
import { Input } from '../components/Input'
import { AuthNavigatorRoutesProps } from '../routes/auth.routes'
import { useForm, Controller } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

type FormDataProps = {
  email: string
  password: string
}

const signUpSchema = yup.object({
  email: yup.string().required('Informe o e-mail').email('E-mail inválido.'),
  password: yup.string().required('Informe a senha').min(8, 'A senha deve ter pelo menos 8 dígitos.'),
  password_confirm: yup.string().required('Confirme a senha.').oneOf([yup.ref('password'), null], 'A confirmação da senha não confere')
});

export function SignIn(){
  const { control, handleSubmit, formState: {errors} } = useForm<FormDataProps>({
    resolver: yupResolver(signUpSchema)
  })
  function handleSignIn(data: any){
    console.log(data)
  }

  const navigation = useNavigation<AuthNavigatorRoutesProps>()

  function handleNewAccount() {
    navigation.navigate('signUp')
  }
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
    <VStack flex={1} px={10} pb={16} >
      <Image 
        source={BackgroundImg}
        defaultSource={BackgroundImg}
        alt="Pessoas treinando"
        resizeMode="contain"
        position="absolute"
      />

      <Center my={24}>
        <HStack alignItems="center">
          <LogoSvg />
          <Text color="white" fontSize="2xl" ml="2" fontFamily="heading">Well Gym</Text>
        </HStack>
        <Text color="gray.100" fontSize="sm">
         Adeque seus treinos a sua rotina
        </Text>
      </Center>

      <Center >
        <Heading color="gray.100" fontSize="xl" mb={6} fontFamily="heading">
          Faça seu login
        </Heading>

        <Controller 
          control={control}
          name="email"
          render={({ field: {onChange, value}}) => (
            <Input 
              placeholder="E-mail"
              keyboardType='email-address'
              autoCapitalize="none"
              onChangeText={onChange}
              value={value}
              errorMessage={errors.email?.message}
              />
          )}
        />
          <Controller 
            control={control}
            name="password"
            render={({ field: { onChange, value } }) => (
              <Input 
                placeholder="Senha" 
                secureTextEntry
                onChangeText={onChange}
                value={value}
                errorMessage={errors.password?.message}

              />
            )}
          />
        <Button
          title="Acessar"
          onPress={handleSubmit(handleSignIn)}
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