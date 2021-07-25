import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Input,
    Textarea,
    useDisclosure,
    Button,
    Box,
} from '@chakra-ui/react';
import { useState } from 'react';

export default function TodoForm({ handleAddTodo, addStatus }) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [showError, setShowError] = useState(false);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    function closeModal() {
        setShowError(false)
        setTitle("")
        setContent("")
        onClose()
    }

    return (
        <>
            <Button onClick={onOpen} mt={5} size="md" width="25%">
                Add Todo
            </Button>
            <Modal isOpen={isOpen} onClose={closeModal} size="3xl">
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader fontWeight="normal">New Todo</ModalHeader>
                    <ModalCloseButton />
                    <form
                        onSubmit={e => {
                            e.preventDefault();
                            handleAddTodo(title, content);
                            if (addStatus === 'error') {
                                setShowError(true)
                            } else {
                                closeModal()
                            }
                        }}
                    >
                        <ModalBody pb={5}>
                            <Input
                                name="title"
                                placeholder="Title"
                                variant="filled"
                                mb="5"
                                isRequired={true}
                                value={title}
                                onChange={e => setTitle(e.target.value)}
                            />
                            <Textarea
                                name="content"
                                placeholder="Content"
                                variant="filled"
                                rows="5"
                                resize="vertical"
                                isRequired={true}
                                value={content}
                                onChange={e => setContent(e.target.value)}
                            />
                            {showError ? (
                                <Box
                                    color="red.400"
                                    fontWeight="bold"
                                    p={2}
                                    mt={2}
                                    rounded="md"
                                >
                                    An error occured while adding new todo item
                                </Box>
                            ) : null}
                        </ModalBody>
                        <ModalFooter>
                            <Button
                                colorScheme="green"
                                mr={3}
                                type="submit"
                                variant="ghost"
                            >
                                Add
                            </Button>
                            <Button onClick={closeModal} variant="ghost">
                                Cancel
                            </Button>
                        </ModalFooter>
                    </form>
                </ModalContent>
            </Modal>
        </>
    );
}
