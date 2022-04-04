import React, {useState, useEffect}from 'react';
import { Text, View } from 'react-native';
import {list, create, onCreate} from "../proyectDMI/src/services/todos";


 function Libros() {
  const [todos, setTodos] = useState();
    async function listTodos() {
        const todosFetched = await list();
        if (todosFetched) setTodos(todosFetched); 
    }
 
async function createTodo(name, description) {
    const todoCreated = await create({name,description});
    return todoCreated;   
}
 
    const onTodoCreated = () =>{
        console.log("Se a creado un TODO.");
    }

    const addData = ()=>{
        createTodo("Hacer la tarea", " Tengo que hacer mi tarea");
    }

    useEffect(()=>{
    listTodos();
    let subscription;
    (async function suscribe(){
        subscription = await onCreate(onTodoCreated);
    })();
    return()=>{
        subscription?.unsuscribe();
    }
}, []);
/*
{todos && todos.map((todo)=> <text> key={todo.id} {`${todo.name}  ${todo.description}`}</text>)}
*/


    return (
        <View  style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Registro de libros</Text>
        {todos && todos.map((todo)=> <text key={todo.id}>  {`${todo.name}  ${todo.description}`}</text>)}
        </View>
        );
}



export default Libros;