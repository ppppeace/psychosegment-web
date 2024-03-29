import { RowDataPacket } from 'mysql2';
import { getDataID } from '@/database/mbti';
// import { Request, Response } from 'express';


interface MyData extends RowDataPacket{
    type: string,
    name: string,
    style:string,
    detail: string,
    marketing:string
}

export async function GET(request: Request) {
    const url = new URL(request.url);
    const text = url.searchParams.get("text");
    console.log("I'm here",text)
    try {
        const products = await getDataID(text|| "");
        console.log("I'm product",products)
        return Response.json({data:products})
    } catch (error) {
        console.log('error : get', error);
        return Response.json({ message: 'error', data: error });
    }
}
