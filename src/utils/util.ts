import { Dispatch, SetStateAction } from "react";
import { TodoItemProps } from "../components/molecule/TodoItem";
import { APIKEY } from "../constants/apiKeys";
import { ERROR } from "../constants/errorMessage";

export const alarm = () => alert(ERROR.NOFUNCTION);

export const userInput = (msg:string) => prompt(msg) || ERROR.NOCONTENT;

export const Localset = ( value:any) => localStorage.setItem(APIKEY.LOCAL, JSON.stringify(value));

export const Localget = () => localStorage.getItem(APIKEY.LOCAL) || "[]";
type initializeTodoListDataParams = {
    setTodoitems:Dispatch<SetStateAction<TodoItemProps[]>>, 
    setId:Dispatch<SetStateAction<number>>    
}

export const initializeTodoListData = 
    ({setTodoitems, setId}:initializeTodoListDataParams) => {
    const mapData = JSON.parse(Localget()).map((v:any,i:number)=>({id: i, contents: v.contents}));
    Localset(mapData);
    setTodoitems(mapData)
    setId(mapData.length);     
}
