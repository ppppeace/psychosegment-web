import { OkPacket, RowDataPacket } from 'mysql2';
import { db } from '../config/database';

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

export const getData = () => {
    return new Promise<MyData[]>((resolve, reject) => {
        db.query<MyData[]>('SELECT * FROM data_mbti', (err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve(result);
                
            }
        });
    });
};

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
// export const getProductList = () => {
//     return new Promise<IProductList[]>((resolve, reject) => {
//         db.query<IProductList[]>('SELECT * FROM products', (err, result) => {
//             if (err) {
//                 reject(err);
//             } else {
//                 resolve(result);
//             }
//         });
//     });
// };

// export const getProductID = (id: string) => {
//     return new Promise<IProductList>((resolve, reject) => {
//         db.query<IProductList[]>('SELECT * FROM products WHERE id = ?', [id], (err, result) => {
//             if (err) {
//                 reject(err);
//             } else {
//                 resolve(result[0]);
//             }
//         });
//     });
// };

// export async function GET(request: Request, { params }: IRequestMBTI) {
//     console.log('params id: ', params.id);
//     try {
//         const products:any = await getDataID(params.id);
//         console.log('check get : ', products.type)
//         return Response.json({ message: 'success', data: products.type });  
    
//     } catch (error) {
//         console.log('error : get', error);
//         return Response.json({ message: 'error', data: error });
//     }
// }

// export async function GET(req: Request, res: Response) {
//     try {
//         const products = await getData();
//         return Response.json({ message: 'success', data: products });
//     } catch (error) {
//         console.log('error', error);
//         return Response.json({ message: 'error', data: error });
//     }
// }
