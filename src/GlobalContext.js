import React, { createContext, useState } from 'react'
import axios from 'axios'

export const GlobalContext = createContext([])

export const GlobalProvider = ({ children }) => {

    const [clientes, setClientes] = useState([])
    const [fletes, setFletes] = useState([])

    const getClientes = async () => {
        const response = await axios.get('http://localhost:3000/cliente');
        setClientes(response.data);
    };

    const addCliente = async (newCliente) => {
        const response = await axios.post('http://localhost:3000/cliente', newCliente);
        const data = response.data;

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
    */

    // DELETE
    const deleteCliente = async (id) => {
        await axios.delete(`http://localhost:3000/cliente/${id}`);
        setClientes(clientes.filter(
            (cliente) => cliente.id !== id)
            );
        console.log(id)
    };


    const getFletes = async () => {
        const response = await axios.get('http://localhost:3000/flete');
        setFletes(response.data);
    };

    const addFlete = async (newFlete) => {
        const response = await axios.post('http://localhost:3000/flete', newFlete);
        const data = response.data;

        setClientes([data, ...fletes]);
    };

    return (
        <GlobalContext.Provider
            value={{
                clientes,
                getClientes,
                addCliente,
                deleteCliente,
                fletes,
                getFletes,
                addFlete,
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
}