import {Flex, useColorMode} from '@chakra-ui/react'

export default function LoadingDialog() {
    const { colorMode } = useColorMode()
    return (
        <Flex
            bg={colorMode === "light" ? "yellow.100" : "yellow.700"}
            color={colorMode === "light" ? "yellow.700" : "yellow.100"}
            fontWeight="bold"
            padding={5}
            my={10}
            mx="auto"
            rounded="md"
            width="50%"
            justifyContent="center"
        >
            Loading your todos...
        </Flex>
    );

}
