import { OkPacket, RowDataPacket } from 'mysql2';
import { Request, Response } from 'express';
import { db } from '../config/database';
// import {getDataID, getData } from '../database/mbti';
import { getDataID, getData } from '@/database/mbti';

export const getMBTIs = async (req: Request, res: Response) => {
    try {
        let data = await getData();

        // const example = 'https://res.cloudinary.com/dvzib8cte/image/upload/v1668617479/OnlineStore/xfciiqzrfrkn1wajskt9.webp';

        // data = data.map((item) => ({
        //     ...item,
        //     picture: example
        // }));
        // data = data.map((row) => {
        //     return {
        //         ...row,
        //         created_at: dayjs(row.created_at).format('DD/MM/YYYY HH:mm:ss')
        //     };
        // });

        res.status(201).json({ message: 'success', data: data });
    } catch (error) {
        console.log(error);
    }
};

export const getMBTI_ID = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        const data = await getDataID(id);

        res.status(200).json({ message: 'success', data: data });
    } catch (error) {
        res.status(500).json({ message: 'database failed' });
    }
};