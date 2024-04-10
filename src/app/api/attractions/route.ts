import { OkPacket, RowDataPacket } from 'mysql2';
import { db } from '../../../config/database';


interface MyData extends RowDataPacket{
    type: string,
    name: string,
    style:string,
    detail: string,
    marketing:string
}

export const getData = () => {
    const test:String = "INFJ"
    return new Promise<MyData[]>((resolve, reject) => {
        db.query<MyData[]>('SELECT * FROM data_mbti where type =?',[test], (err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve(result);
                
            }
        });
    });
};


export async function GET(req: Request, res: Response) {
    try {
        const products = await getData();
        return Response.json({ message: 'success', data: products });
    } catch (error) {
        console.log('error', error);
        return Response.json({ message: 'error', data: error });
    }
}