'use client';

import React, {useState} from 'react'
import axios from 'axios';

function page() {
const [Value, setValue] = useState({
    input:''
})
    const handleSubmit = async(e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        console.log(Value,'Values')
    axios.post('http://localhost:3000/api/about', Value)
    .then(resp=>
        console.log(resp)
        )
    .catch(err=>console.log(err, "Error"))
    }

    const handleChange =(e: React.ChangeEvent<HTMLInputElement>)=>{
        e.preventDefault()
        setValue({
            ...Value,
            [e.target.name]: e.target.value
        })

    }

  return (
    <>
    <div className='flex flex-col justify-center items-center mt-10'>

        <form onSubmit={handleSubmit} >
        <input type='text' name='input' placeholder='Enter Text Here' value={Value.input} onChange={handleChange} className='border border-gray-300 p-2 mb-2' ></input>
        <br />
        <div  className='flex flex-col justify-center items-center'>
        <button type='submit' className='bg-gray-300 hover:bg-slate-400 p-3'>Submit </button>

        </div>
         </form>
    
    </div>

    </>
  )
}

export default page
