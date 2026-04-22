import { createContext,useContext } from "react";

export const TodoContext=createContext({
    toDos:[{
        id:1,
        Todo:"Todo Message",
        completed:false
        }
    ],
    addTodo:(Todo)=>{

    },
    updateTodo:(id,ToDo)=>{

    },
    deleteTodo:(id)=>{},
    toggleComplete:(id)=>{}
})


export const useTodo=()=>{
    return useContext(TodoContext)
}

export const TodoProvider=TodoContext.Provider