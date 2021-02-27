import React, {useState,useEffect} from 'react'
import {Typography,List,Input,Button,Row,Col,Divider} from 'antd'
import _ from 'lodash';
import axios from '../../config/axios';
import Todo from './Todo' 

export default function TodoList() {
    const [todoList, setTodoList] = useState([]);
    const [inputField,setInputField] = useState("");
    const { Text, Link } = Typography;
    
    const fetchTodoList = async () => {
        const httpResponse = await axios.get("/todo-list");
        setTodoList(httpResponse.data);
    };

    useEffect(() => {
        fetchTodoList();
    }, [])

    const addTodoItem = async () => {
        await axios.post("/todo-list",{task: inputField});
        fetchTodoList();
    }

    const deleteTodoItem = async (id) => {
        await axios.delete(`/todo-list/${id}`);
        fetchTodoList();
    }

    return (
        <Row justify="center">
            <Col>
                <Row justify="center">
                    <Text type="warning">กรุณาใส่Todo ที่ต้องการเพิ่ม</Text>
                </Row>
                <Row justify="center">
                    <Col span={20}>
                        <Input value={inputField} onChange={(e)=>setInputField(e.target.value)}/>
                    </Col>
                    <Col span={4}>
                        <Button style={{width:'100%'}} onClick={addTodoItem}>ADD</Button>
                    </Col>
                </Row>
                <Divider/> 
                <Row>
                    <List
                        style={{width:"450px"}}
                        header={<div>TodoList</div>}
                        bordered
                        dataSource={todoList}
                        renderItem={todo => (
                            <List.Item>
                                <Todo deleteTodoItem={deleteTodoItem} todo={todo} fetchData={fetchTodoList}/>
                            </List.Item>
                        )}
                    />
                </Row>
            </Col>
        </Row>
    )
}
