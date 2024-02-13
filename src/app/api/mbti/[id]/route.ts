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

interface IRequestMBTI{
    params: { id: string };
}


export async function GET(request: Request, { params }: IRequestMBTI) {
    console.log('params id: ', params.id);
    try {
        const products = await getDataID(params.id);
        return Response.json({data:products})
    } catch (error) {
        console.log('error : get', error);
        return Response.json({ message: 'error', data: error });
    }
}
