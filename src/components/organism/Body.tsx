import { useEffect, useState } from "react";
import AddButton from "../atom/AddButton";
import TodoItem, { TodoItemProps } from "../molecule/TodoItem";
import { initializeTodoListData, Localget, Localset, userInput } from "../../utils/util";
import { INFO } from "../../constants/infoMessage";
import { APIKEY } from "../../constants/apiKeys";

const Body = () => {
    const [id,setId] = useState<number>(0);
    const [todoitems, setTodoitems] = useState<TodoItemProps[]>([]);

    //1. key값 상수관리
    //2. localstoreage 함수를 util로 함수화
    const addItem = () => {
        const newData = { id:id ,contents: userInput(INFO.TODO)};
        setTodoitems((prev) => {
           const updateData =  [...prev, newData];
           Localset(updateData);
           //localStorage.setItem(TODO.list,JSON.stringify(updateData));
           return updateData;
        });
        setId((prev) => prev + 1)

        //JSON.stringify() : obj -> string 
        //JSON 타입 (서버 전달용 오브젝트 타입)
        //localStorage.setItem(String(id), JSON.stringify(newData)); 
    }

    const deleteItem = (id:number) => {
        setTodoitems((prev) => {
            const updateData = prev.filter((value) => value.id !== id);
            Localset(updateData);
            //localStorage.setItem("todolist",JSON.stringify(updateData));
            return updateData;
        });
    };


    useEffect(()=>{
        //const todolist = Localget();
        //const todolist = localStorage.getItem("todolist") || "[]";
        //const arrayTodoList = JSON.parse(Localget());
        //const mapData = JSON.parse(Localget()).map((v:any,i:number)=>({id: i, contents: v.contents}));
        //Localset(mapData);
        //localStorage.setItem(APIKEY.LOCAL,JSON.stringify(mapData))
        //setTodoitems(mapData)
        //setId(mapData.length);  

        initializeTodoListData({setTodoitems , setId});
    },[])

    return (
        <div className="flex flex-col items-center">
            <div className="p-16 bg-white border shadow-lg w-full max-w-lg">
                {todoitems.map((item, index) => (
                    <TodoItem key={item.id} {...item} onDelete={()=>deleteItem(item.id)}  />
                ))}
            </div>
            <div className="relative bottom-8">
                <AddButton handleClick={addItem}/>
            </div>
        </div> 
    )

}
export default Body;