import { Button as ButtonNativeBase, IButtonProps, Text } from 'native-base';

type props = IButtonProps & {
  title: string;
  variant?: 'solid' | 'outline';
}

export function Button({title, variant = 'solid', ...rest}: props){
  return(
    <ButtonNativeBase
      w="full"
      h={14}
      bg={variant === "outline" ? "transparent" : "yellow.700"}
      borderWidth={variant === "outline" ? 1 : 0}
      borderColor="yellow.500"

      rounded="sm" 
      _pressed={{
        bg: variant === "outline" ? "gray.500" : "yellow.500"
      }}
    {...rest}
    >
      <Text 
        color={ variant === "outline" ? "yellow.500" : "white"}
        fontFamily="heading"
        fontSize="sm">
        {title}
      </Text>
    </ButtonNativeBase>
  )
}