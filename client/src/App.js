import React from 'react';
import { ChakraProvider, theme, Flex } from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import TodoPage from './TodoPage/index';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Flex direction="column" px="10%" py={5}>
        <Flex justifyContent="flex-end">
          <ColorModeSwitcher />
        </Flex>
        <TodoPage />
      </Flex>
    </ChakraProvider>
  );
}

export default App;
