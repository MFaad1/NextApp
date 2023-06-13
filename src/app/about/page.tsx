'use client';
import axios from 'axios'

function About() {

  const handleClick = () => {
    axios.get('http://localhost:3000/api/home')
    .then((res:any)=>{
        alert(res.data)
        console.log(res.data)
    })
    .catch((err:any)=>{console.log("Error has been resulved", err.messag )})
  }; 
  return (
    <>
       <div className="flex justify-center mt-20">
        <button className="bg-blue-500 p-2 cursor-pointer hover:bg-blue-600 text-bold" onClick={handleClick}>
          Button
        </button>
      </div>
    </>
  )
}

export default About
