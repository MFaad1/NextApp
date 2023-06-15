// import axios from 'axios'
import { NextResponse} from "next/server";

export const GET = async () => {
  try {
    return new Response('Hello, Next.js!', {
      status: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      }
    });
    // let data = await axios.get("'https://node-ts-be.vercel.app/data");
    return new NextResponse("Hellow this is response",{status: 200})
  } catch (err:any) {
    return new NextResponse(err,{status: 200})

  }
};
