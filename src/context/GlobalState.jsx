import React, { createContext, useReducer } from 'react'
import AppReducer from './AppReducer'

// Initial State
const initialState = {
    transactions: [
        { id: 1, desc: 'Grocery', amount: -100 },
        { id: 2, desc: 'Salary', amount: 500 },
        { id: 3, desc: 'Book', amount: -50 },
        { id: 4, desc: 'Remit', amount: 100 },
    ],
}

// create new context
export const GlobalContext = createContext(initialState)

// Provider
export const GlobalProvider = ({ children }) => {
    const [ state, dispatch ] = useReducer(AppReducer, initialState)

    return (
        <GlobalContext.Provider value={
            {
                transactions: state.transactions,
            }
        }>
            {children }
        </GlobalContext.Provider>
    )
}