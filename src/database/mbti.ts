import { RowDataPacket } from 'mysql2';
import { db } from '@/config/database';
interface MyData extends RowDataPacket{
    type: string,
    name: string,
    style:string,
    detail: string,
    marketing:string
}

export const getDataID = (id: string) => {
    console.log("check :",id)
    return new Promise<MyData>((resolve, reject) => {
        db.query<MyData[]>('SELECT * FROM data_mbti WHERE type = ?', [id], (err, result) => {
            if (err) {
                reject(err);
            } else {
                return resolve(result[0]);
            }
        })
    });
};
