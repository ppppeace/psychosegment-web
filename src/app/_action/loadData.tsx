import { OkPacket, RowDataPacket } from 'mysql2';
import { db } from '@/config/database';

export const loadData = async (type:string) => {
  
    interface MyData extends RowDataPacket{
        type: string,
        name: string,
        style:string,
        detail: string,
        marketing:string
    }
    const inputData = type
        return new Promise<MyData[]>((resolve, reject) => {
            db.query<MyData[]>('SELECT * FROM data_mbti where type =?',[inputData], (err:any, result:any) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                    
                }
            });
        });
    }; 