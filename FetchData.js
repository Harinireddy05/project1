import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

function FetchData() {
    const [records, setRecords] = useState([])
    useEffect(() => {
        fetch('https://dummyjson.com/products',{
        })
            .then(response => response.json())
            .then(data => {
                console.log(data.products)
                setRecords(data.products)
            })
            .catch(err => console.log(err));
    }, [])
    const addFunction=(e)=>
    {
        fetch('https://dummyjson.com/products/add',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({
                title:'BMW Pencil',
            })
        })
        alert('Item is added')
    }
    const editFunction=(e)=>
    {
        fetch('https://dummyjson.com/products/1',{
            method:'PUT',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({
                title:'BMW Pencil',
            })
        })
        .then(res=>res.json())
        .then(console.log);
        alert('Item is updated')
    }
    const deleteFunction=(e)=>
    {
        fetch('https://dummyjson.com/products/1',{
            method:'DELETE',
        })
        .then(res=>res.json())
        .then(console.log);
        alert('Item is deleted')
    }
return (<>
    <div>
        <ul>
            {records.map((list, index) => (
                <li key={index}>{list.id} | {list.name}</li>
            ))}</ul><div>
            <form>
                <input type='text' className='add'/>Enter item you wish to add: &nbsp; <button onClick={addFunction}>Add</button><br></br>
                <input type='text' name='edit'/>Edit the name <button onClick={editFunction}>Edit</button><br></br>
                <input type='text' name='delete'/>item you wish to delete:<button onClick={deleteFunction}>Delete</button>
            </form></div>
    </div>
</>)
    }
export default FetchData
