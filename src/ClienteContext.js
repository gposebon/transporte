import React, { createContext, useState, useEffect } from 'react'
import axios from 'axios'

export const ClienteContext = createContext([])

export const ClienteProvider = ({ children }) => {

    const [clientes, setClientes] = useState([])

    useEffect(() => {
        getClientes()
    }, [])

    const getClientes = async () => {
        const response = await axios.get('http://localhost:3000/cliente');
        setClientes(response.data);
    };

    const addCliente = async (newCliente) => {
        const response = await axios.post('http://localhost:3000/cliente', newCliente);
        const data = response.data;
        debugger

        setClientes([data, ...clientes]);
    };

    /*
    // react axios put method
    const updateTodo = async (id, todo) => {
        const response = await someAPI.put(`/todos/${id}`, todo);
        const data = response.data;
        debugger

        setTodos(
            todos.map((todo) => (todo.id === id ? { ...todo, ...data } : todo))
        );
    };

    // react axios delete method
    const deleteTodo = async (id) => {
        await someAPI.delete(`/todos/${id}`);
        setTodos(todos.filter((todo) => todo.id !== id));
    }; */

    return (
        <ClienteContext.Provider
            value={{
                clientes,
                addCliente,
            }}
        >
            {children}
        </ClienteContext.Provider>
    );
}