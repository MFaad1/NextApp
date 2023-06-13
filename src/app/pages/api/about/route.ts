import { NextResponse, NextRequest } from "next/server";
import axios from "axios";

export const POST= async(req: Request,)=>{
    const values = await req.json()
    console.log(values, 'front Input')
   let {data} =await axios.post('http://localhost:3200/data', values)
console.log(data, 'asdfasdkf')


   return NextResponse.json({mesage: "Data has been found", data});

//     .then(response=>{
       
//     })
//     .catch(err=>{
//         return NextResponse.json({mesage: "Data not found",error: err}, {status: 404})  
//     })
}


