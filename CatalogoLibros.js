import React, {useState, useEffect}from 'react';
import { Text, View,ScrollView, TextInput,  Button } from 'react-native';
import {list, create, onCreate} from "./src/services/todos";

function CatalogoLibros() {
    //--------------------------------------------------------------------------------------------
    async function createTodo(ISBM, name, description,categoria,status,feacha) {
        const todoDelete= await create({ISBM,name,description,categoria,status,feacha});
        return todoDelete;   
    }
    //--------------------------------------------------------------------------------------------
    const [todos, setTodos] = useState();
      async function listTodos() {
          const todosFetched = await list();
          if (todosFetched) setTodos(todosFetched); 
      }
      const onTodoCreated = () =>{
        console.log("Se ha imprimido");
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
    <ScrollView>
<View   style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:"#ffffff", width:"100%"}}>
<Text style={{
    
    fontSize: 23,
    fontWeight: 'bold',
    justifyContent: 'center',
    paddingBottom:25,
    }}>Catalogo Libros</Text>
<Text>
{todos && todos.map((todo)=> <Text key={todo.id} style={{flex:1, fontSize: 15, padding:10, width:250, borderColor:"#e8eaed"}}> 
        {` 
        ISBM: ${todo.ISBM}
        Name: ${todo.name} 
        Description:${todo.description} 
        Category:${todo.categoria} 
        Status:${todo.status} 
        Fecha:${todo.feacha}         
        ` } 

        <Button title='Delete' style={{ backgroundColor: '#F80000',
    padding: 10,
    borderRadius: 6,}}/>
        </Text>)} 
        </Text>
</View>
</ScrollView>
)
}
export default CatalogoLibros;