import { Flex, Box, Text, Avatar } from "@chakra-ui/react"

export function Profile () {
  return (
    
    <Flex align="center">
      <Box>
        <Text>Felipe Pontes</Text>
        <Text color="gray.300" fontSize="small">
          felipedemelopontes@gmail.com
        </Text>
      </Box>

      <Avatar size="md" name="Felipe Pontes" src="https://github.com/tudaspontes.png" />

    </Flex>

  )
}