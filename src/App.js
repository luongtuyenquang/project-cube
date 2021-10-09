import { useEffect, useState } from 'react';
import './App.css';
import TableStudent from './component/TableStudent';
import ModalHandle from './component/ModalHandle';
import axios from 'axios';

// const api = axios.create({
//     baseURL: 'http://localhost:8000/student'
// })

function App() {
    const [list, setList] = useState([])

    
    useEffect(() => {
        async function fetchAPI(){
            const url = 'http://localhost:8000/student'
            const res = await fetch(url)
            const resJSON = await res.json()
            setList(resJSON)
        }
        fetchAPI()
    },[])
    
    function handleDelete(data){
        const newList = [...list]
        const index = newList.findIndex((elm, index) => {
           return index === data
        })
        newList.splice(index, 1)
        setList(newList)

        // api.delete('/')
        // .then(data => {
        //     setList(newList)
        // })
        // .catch(error => {
        //     console.log(error);
        // })
    }
    
    // api.get('/').then(res => {
    //     console.log(res.data);
    // })
    const [isDisplayForm, setIsDisplayForm] = useState(false)
    function handleClick(){
        setIsDisplayForm(!isDisplayForm)
    }
    return (
        <div className="App">
            <h1 className='title'>Quản lý sinh viên</h1>
            <button type="button" className="btn btn-success bottom fz" onClick={handleClick}>Thêm sinh viên</button>
            {isDisplayForm && <ModalHandle closeForm={handleClick}/>}
            <TableStudent lists={list} delete={handleDelete}/>
        </div>
    );
}

export default App;
