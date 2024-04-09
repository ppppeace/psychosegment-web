'use server';
import React from 'react';
import { RowDataPacket } from 'mysql2';
import { db } from '@/config/database';

interface MyData extends RowDataPacket{
    type: string,
    name: string,
    style:string,
    detail: string,
    marketing:string
}


export default async function Fastapi({
    params
}: {
    params: {
        item: string;
    };
}) {
    async function getData() {
        const res = await fetch('http://127.0.0.1:3000/json/' + params.item);
        return res.json();
    }

    async function LoadData(type:string) {
        return new Promise<MyData>((resolve, reject) => {
            const type = evaluateGrade(data["data is"]);
            db.query<MyData[]>('SELECT * FROM data_mbti WHERE type = ?', [type], (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result[0]);
                }
            });
        });
    }


    const data = await getData();
    const loadData = await LoadData(evaluateGrade(data["data is"]))
    
    // return (
    //     <>
    //         <pre>{evaluateGrade(data["data is"])}</pre>
    //         {loadData && (
    //             <div>
    //                 <pre>{JSON.stringify(loadData, null, 2)}</pre>
    //             </div>
    //         )}
    //     </>
    // );
    return (
        <>
        <div>
            <div className='ml-20 my-2 grid grid-cols-3 gap-8'>
                <div>
                    <h1 className='text-2xl rotate-topic ro font-semibold mt-6'>PsychoSegment Insight Hub</h1>
                    <div className='ml-24 mr-10 resultBox row-span-2'>
                        <div className='m-5'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Repellat aliquam deserunt harum rem earum assumenda perspiciatis expedita. Aliquid distinctio tenetur fugiat qui
                            recusandae obcaecati voluptates.
                        </div>
                    </div>
                    <div className='type font-semibold text-5xl text-[var(--red-primary)]'>
                        <h1>
                            {loadData && (
                                <div>
                                    <div>{loadData.name}</div>
                                </div>
                            )}
                        </h1>
                    </div>
                </div>
                <div>
                    <div className='marketing text-xl text-white'>
                        <h5 className='m-5'>
                            {loadData && (
                                <div>
                                    <div>{loadData.detail}</div>
                                </div>
                            )}
                        </h5>
                    </div>
                    <div className='col-start-2 list-marketing text-xl text-white'>
                        <ul className='m-5 list-outside'>
                            {loadData && (
                                <div>
                                    <div>{loadData.marketing}</div>
                                </div>
                            )}
                        </ul>
                    </div>
                </div>
                <div className='type font-semibold text-7xl text-[var(--red-primary)]'>
                    <h1 className='m-5 text-center mt-40'>
                        {' '}
                        {loadData && (
                            <div>
                                <div>{loadData.type}</div>
                            </div>
                        )}
                    </h1>
                </div>
            </div>
        </div>
        </>
    )
}

function evaluateGrade(data: string): string {
    let text: string;
    
    switch (true) {
        case data == "0":
            text = "INTJ";
            break;
        case data == "1":
            text = "INTP";
            break;
        case data == "2":
            text = "ENTJ";
            break;
        case data == "3":
            text = "ENTP";
            break;
        case data == "4":
            text = "INFJ";
            break;
        case data == "5":
            text = "INFP";
            break;
        case data == "6":
            text = "ENFJ";
            break;
        case data == "7":
            text = "ENFP";
            break;
        case data == "8":
            text = "ISTJ";
            break;
        case data == "9":
            text = "ISFJ";
            break;
        case data == "10":
            text = "ESTJ";
            break;
        case data == "11":
            text = "ESFJ";
            break;
        case data == "12":
            text = "ISTP";
            break;
        case data == "13":
            text = "ISFP";
            break;
        case data == "14":
            text = "ESTP";
            break;
        case data == "15":
            text = "ESFP";
            break;
        default:
            text = data;
            break;
    }
    return text;
}