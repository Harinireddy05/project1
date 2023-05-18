import React from 'react'
import {useState} from 'react'
import {useEffect} from 'react'

function FetchData(){
    const [records,setRecords]=useState([])

useEffect(()=>{fetch('https://dummyjson.com/products')
.then(response=>response.json())
.then(data=>{
    console.log(data.products)
    setRecords(data.products)
})
.catch(err => console.log(err))
},[])

    return(<>
        <div>
<ul>
    {records.map((list,index)=>(
        <li key={index}>{list.id} | {list.name}</li>
    ))}</ul>
        </div>
    </>)
}
export default FetchData