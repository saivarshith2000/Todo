import {Flex, useColorMode} from '@chakra-ui/react'

export default function NoTodosDialog() {
    const { colorMode } = useColorMode()
    return (
        <Flex
            bg={colorMode === "light" ? "green.100" : "green.700"}
            color={colorMode === "light" ? "green.700" : "green.100"}
            fontWeight="bold"
            padding={5}
            my={10}
            mx="auto"
            rounded="md"
            width="50%"
            justifyContent="center"
        >
            Yay! You don't have anything to do :)
        </Flex>
    );

}