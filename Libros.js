import React, {useState, useEffect}from 'react';
import { Text, View,ScrollView, TextInput,  Button } from 'react-native';
import {list, create, onCreate} from "./src/services/todos";


 function Libros() {
  const [todos, setTodos] = useState();
  const [todo, setTodo] = useState({ISBM: "",name: "",description: "",categoria: "", status: "", feacha: ""});
    async function listTodos() {
        const todosFetched = await list();
        if (todosFetched) setTodos(todosFetched); 
    }
 
async function createTodo(ISBM, name, description,categoria,status,feacha) {
    const todoCreated = await create({ISBM,name,description,categoria,status,feacha});
    return todoCreated;   
}
 
    const onTodoCreated = () =>{
        console.log("Se a creado un TODO.");
    }

    const addData = ()=>{
        createTodo(todo.ISBM, todo.name, todo.description, todo.categoria, todo.status, todo.feacha);
    }


    useEffect(()=>{
    listTodos();
    let subscription;
    (async function subscribe(){
        subscription = await onCreate(onTodoCreated);
    })();
    return()=>{
        subscription?.unsubscribe();
    };
}, []);

    return (
        
        <View  style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:"#ffffff" }}>
            <Text style={{justifyContent:'center'}}>Ingrese los datos</Text>
            <ScrollView>
        
        <TextInput onChangeText={(text)=> setTodo((current)=>({ ... current, ISBM: text}))} placeholder='ISBM' style={{width:300, height:25, backgroundColor:"#e8eaed", borderRadius:20, padding:20,margin:5}}/>
        <TextInput onChangeText={(text)=> setTodo((current)=>({ ... current, name: text}))} placeholder='Name' style={{width:300, height:25, backgroundColor:"#e8eaed", borderRadius:20, padding:20,margin:5}}/>
        <TextInput onChangeText={(text)=> setTodo((current)=>({ ... current, description: text}))} placeholder='Description' style={{width:300, height:25, backgroundColor:"#e8eaed", borderRadius:20, padding:20,margin:5}}/>
        <TextInput onChangeText={(text)=> setTodo((current)=>({ ... current, categoria: text}))} placeholder='Category' style={{width:300, height:25, backgroundColor:"#e8eaed", borderRadius:20, padding:20,margin:5}}/>
        <TextInput onChangeText={(text)=> setTodo((current)=>({ ... current, status: text}))} placeholder='status' style={{width:300, height:25, backgroundColor:"#e8eaed", borderRadius:20, padding:20,margin:5}}/>
        <TextInput onChangeText={(text)=> setTodo((current)=>({ ... current, feacha: text}))} placeholder='Date' style={{width:300, height:25, backgroundColor:"#e8eaed", borderRadius:20, padding:20,margin:5}}/>
        <Button onPress={addData} title="Titulo" style={{width:250, height:25, backgroundColor:"#cccccc", borderRadius:20, padding:20,margin:5}}/>
        
        </ScrollView>
        
        </View>
        );
}



export default Libros;