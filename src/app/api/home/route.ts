import axios from 'axios'
import { NextResponse} from "next/server";

export const GET = async () => {
  try {
    let data = await axios.get("http://localhost:3200/Api");
    return new NextResponse(data.data,{status: 200})
  } catch (err:any) {
    return new NextResponse(err,{status: 200})

  }
};
