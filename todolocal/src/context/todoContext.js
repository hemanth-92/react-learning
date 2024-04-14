import { createContext, useContext } from "react";

export const TodoContext = createContext({})

export const useTodo = () => {
  return useContext(useTodo)
}

export const TodoProvider = TodoContext.Provider