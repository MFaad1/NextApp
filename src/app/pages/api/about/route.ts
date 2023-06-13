import { NextResponse} from "next/server";

import axios from 'axios'

export const POST= async(req: Request,)=>{
    const values = await req.json()
   let {data} =await axios.post('http://localhost:3200/data', values)

   return NextResponse.json({mesage: "Data has been found", data});
}


