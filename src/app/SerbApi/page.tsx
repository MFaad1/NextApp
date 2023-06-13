'use client';

import React, {useState} from 'react';
import axios from 'axios';


function Page() {
const [Value, setValue] = useState({
    input:''
})
const [response, setresponse] = useState()
    const handleSubmit = async(e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
    axios.post('http://localhost:3000/pages/api/about', Value)
    .then((resp:any)=>
       setresponse(resp.data.data.data)
        )
    .catch(err=>console.log(err, "Error"))
    }

    const handleChange =(e: React.ChangeEvent<HTMLInputElement>)=>{
        e.preventDefault();

        const { name, value } = e.target;

        const newValue = /^[0-9]+$/.test(value) ? parseInt(value) : value;
       
  setValue((prevState) => ({
    ...prevState,
    [name]: newValue,
  }));
    }

    const arrayResponse = response ? Object.entries(response).map(([key, value]) => ({ key, value })) : [];

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
<div>
<div>
    {arrayResponse.length > 0 ? arrayResponse.map((item:any, index) => (
      <div key={index}>
        <span>{item.key}: </span>
    {typeof(item.value)==='object' ? <span>{JSON.stringify(item.Value)}</span>: <span>{item.value}</span> }
       
      </div>
    ))
         : <h2> Value not found</h2>
}
  </div>
</div>
    </>
  )
}

export default Page
