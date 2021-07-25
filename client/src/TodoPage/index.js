import { Flex, Heading, useColorModeValue } from '@chakra-ui/react';
import { useQuery, useMutation, useQueryClient } from 'react-query';
import { getTodos, addTodo, deleteTodo, completeTodo } from '../api';
import FetchErrorDialog from './FetchErrorDialog';
import LoadingDialog from './LoadingDialog';
import NoTodosDialog from './NoTodoDialog';
import TodoForm from './TodoForm';
import TodoItem from './TodoItem';

function TodoList({ todos, handleDelete, handleComplete }) {
    if (todos?.length === 0) return <NoTodosDialog />;
    return (
        <Flex mt={5} direction="column" width="100%">
            {todos.map(todo => (
                <TodoItem
                    handleDelete={handleDelete}
                    handleComplete={handleComplete}
                    todo={todo}
                    key={todo.id}
                />
            ))}
        </Flex>
    );
}

export default function TodoPage() {
    const color = useColorModeValue('gray.700', 'gray.100');
    const { data: todos, status } = useQuery('todos', getTodos);
    const queryClient = useQueryClient();
    const { status: addStatus, mutateAsync: addTodoMut } = useMutation(
        addTodo,
        {
            onSuccess: () => queryClient.invalidateQueries('todos'),
        }
    );

    const { mutateAsync: deleteTodoMut } = useMutation(
        deleteTodo,
        {
            onSuccess: () => queryClient.invalidateQueries('todos'),
        }
    );

    const { mutateAsync: completeTodoMut } =
        useMutation(completeTodo, {
            onSuccess: () => queryClient.invalidateQueries('todos'),
        });

    function handleAddTodo(title, content) {
        addTodoMut({ title, content });
    }

    function handleDelete(id) {
        deleteTodoMut(id);
    }

    function handleComplete(id) {
        completeTodoMut(id);
    }

    function renderTodoList() {
        if (status === 'loading') return <LoadingDialog />;
        else if (status === 'error') return <FetchErrorDialog />;
        return (
            <TodoList
                todos={todos}
                handleDelete={handleDelete}
                handleComplete={handleComplete}
            />
        );
    }

    return (
        <Flex
            direction="column"
            justifyContent="center"
            textAlign="center"
            alignItems="center"
        >
            <Heading fontSize="4xl" color={color}>
                Todo
            </Heading>
            <TodoForm handleAddTodo={handleAddTodo} addStatus={addStatus} />
            {renderTodoList()}
        </Flex>
    );
}
