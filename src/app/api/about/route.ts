import { NextResponse} from "next/server";
import axios from 'axios'


export const POST= async(req: Request,)=>{

    const values = await req.json()
   let {data} = await axios.post('https://node-ts-be.vercel.app/data', values,{
    headers: {
      'Access-Control-Allow-Origin': 'https://next-app-trail-proj.vercel.app',
      'Access-Control-Allow-Methods': 'POST',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  })
   return NextResponse.json({mesage: "Data has been found", data});
}


