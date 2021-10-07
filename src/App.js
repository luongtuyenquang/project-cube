import { useEffect, useState } from 'react';
import './App.css';
import TableStudent from './component/TableStudent';

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
    }, [])
    return (
        <div className="App">
            <h1 className='title'>Quản lý sinh viên</h1>
           <TableStudent lists={list}/>
        </div>
    );
}

export default App;
