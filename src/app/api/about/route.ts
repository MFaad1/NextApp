import { NextResponse } from 'next/server'
import { headers } from 'next/headers'

import axios from 'axios'


export const POST = async (req: Request) => {

    const values = await req.json();
    let { data } = await axios.post('https://node-ts-be.vercel.app/data', values)

    return new Response(JSON.stringify(data), {
        status: 200,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        },
    })
}
