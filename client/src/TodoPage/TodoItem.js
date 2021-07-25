import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    Box,
    Flex,
    useColorModeValue,
} from '@chakra-ui/react';
import getTimeDiff from './utils';

export default function TodoItem({ todo, handleDelete, handleComplete }) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const titleColor = useColorModeValue('gray.700', 'gray.100');
    const bgColor = useColorModeValue('gray.100', 'gray.600');
    const hoverBgColor = useColorModeValue('gray.200', 'gray.500');
    return (
        <>
            <Flex
                width="70%"
                justifyContent="space-between"
                mx="auto"
                mt={2}
                rounded="md"
                px={5}
                alignItems="center"
                bg={bgColor}
                _hover={{
                    cursor: 'pointer',
                    background: hoverBgColor,
                }}
            >
                <Flex
                    py={4}
                    onClick={onOpen}
                    color={titleColor}
                    flex={1}
                    alignItems="flex-start"
                >
                    {todo.title}
                </Flex>
                <Flex direction="row">
                    {!todo.completed ? (
                        <Button
                            variant="ghost"
                            colorScheme="green"
                            ml={2}
                            onClick={() => handleComplete(todo.id)}
                        >
                            Mark Complete
                        </Button>
                    ) : null}
                    <Button
                        variant="ghost"
                        colorScheme="red"
                        onClick={() => handleDelete(todo.id)}
                    >
                        Delete
                    </Button>
                </Flex>
            </Flex>
            <Modal isOpen={isOpen} onClose={onClose} size="3xl">
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>{todo.title}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={5}>
                        <Box fontSize="smaller" color="gray.500" mb={2}>
                            Added at{' '}
                            {new Date(todo.addedAt).toLocaleString('en-IN')}
                        </Box>
                        {todo.completed ? (
                            <Box fontSize="smaller" color="green.500" mb={2}>
                                Completed at{' '}
                                {new Date(todo.completedAt).toLocaleString(
                                    'en-IN'
                                ) +
                                    ` | ${getTimeDiff(
                                        todo.completedAt,
                                        todo.addedAt
                                    )}`}
                            </Box>
                        ) : null}
                        <Box>{todo.content}</Box>
                    </ModalBody>
                    <ModalFooter>
                        <Button
                            variant="ghost"
                            colorScheme="red"
                            onClick={() => handleDelete(todo.id)}
                        >
                            Delete
                        </Button>
                        {!todo.completed ? (
                            <Button
                                variant="ghost"
                                colorScheme="green"
                                ml={2}
                                onClick={() => handleComplete(todo.id)}
                                disabled={todo.completed}
                            >
                                Mark Complete
                            </Button>
                        ) : null}
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
}
