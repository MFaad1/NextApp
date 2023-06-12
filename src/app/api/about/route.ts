import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";
export const POST=(req:NextApiRequest, res: NextApiResponse)=>{
    console.log(req.body, 'asdfsdf')

    return new NextResponse('next api response', {status: 200})

}

