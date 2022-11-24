import { VStack, Text, HStack, Box, useTheme } from "native-base";
import { ScreenHeader } from "../components/ScreenHeader";
import { VictoryPie } from 'victory-native'
import { useState } from "react";

export function Resume() {

  const { colors } = useTheme()
  const [exercises, setExercises ] = useState(["15", "30", "55"])

  return(
    <VStack flex={1}  >
      <ScreenHeader
      title="Resumo"
      />

      <VStack px={8} flex={1}>
      <Box alignItems="center">
      <VictoryPie
        data={exercises}
        x=""
        y=""
      colorScale="qualitative"
      height={350}
      style={{
        labels: {
          fontSize: 14,
          fill: colors.gray[100],
          fontWeight: "bold"
        }
      }}
        labelRadius={50}
      
      />
        </Box>
      <HStack bg="gray.400" justifyContent="space-between" paddingX={6} paddingY={2} rounded={1} borderColor="yellow.500" borderLeftWidth={3} mb={2}>
        <Text color="gray.100" fontSize="md">Ombro</Text>
        <Text color="gray.100" fontFamily="heading">15%</Text>
      </HStack>
        {/* <Text color="white">Peitoral</Text>
        <Text color="white">Tríceps</Text>
        <Text color="white">Abdômen</Text>
        <Text color="white">Bíceps</Text>
        <Text color="white">Pernas</Text>
        <Text color="white">Glúteo</Text> */}
    
      </VStack>


      
    </VStack>
  )
}
