import {Flex, useColorMode} from '@chakra-ui/react'

export default function FetchErrorDialog() {
    const { colorMode } = useColorMode()
    return (
        <Flex
            bg={colorMode === "light" ? "red.100" : "red.700"}
            color={colorMode === "light" ? "red.700" : "red.100"}
            fontWeight="bold"
            padding={5}
            my={10}
            mx="auto"
            rounded="md"
            width="50%"
            justifyContent="center"
        >
            An error Occured while fetching your todos :(
        </Flex>
    );
}