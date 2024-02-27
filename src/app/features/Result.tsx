"use client";
import React from 'react';
// import { OkPacket, RowDataPacket } from 'mysql2';
// import { db } from '@/config/database';

type Props = {}
// interface MyData extends RowDataPacket{
//     type: string,
//     name: string,
//     style:string,
//     detail: string,
//     marketing:string
// }

// export const getData = (type : String) => {
//     // const test:String = "INFJ"
//     const test = type;
//     return new Promise<MyData[]>((resolve, reject) => {
//         db.query<MyData[]>('SELECT * FROM data_mbti where type =?',[test], (err:any, result:any) => {
//             if (err) {
//                 reject(err);
//             } else {
//                 resolve(result);
                
//             }
//         });
//     });
// };

export default async function Result({}:Props) {
   
    const result = await fetch("http://localhost:3000/api/typeofmbti");
    const mbtiType: {id: string; message: string}[] = await result.json();
    return (
        <>
        <div>hi</div>
        <ul>
        {mbtiType.map((todo)=>(
          <li key={todo.id}>
            Job {todo.id}: {todo.message}
          </li>
        ))}
      </ul>
      <div>hello</div>
      </>
    )
    // return (
    //     <div>
    //         <div className='ml-20 my-2 grid grid-cols-3 gap-8'>
    //             <div>
    //                 <h1 className='text-2xl rotate-topic ro font-semibold mt-6'>PsychoSegment Insight Hub</h1>
    //                 <div className='ml-24 mr-10 resultBox row-span-2'>
    //                     <div className='m-5'>
    //                         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    //                         Repellat aliquam deserunt harum rem earum assumenda perspiciatis expedita. Aliquid distinctio tenetur fugiat qui
    //                         recusandae obcaecati voluptates.
    //                     </div>
    //                 </div>
    //                 <div className='type font-semibold text-5xl text-[var(--red-primary)]'>
    //                     <h1>
    //                         {products[0].name}
    //                     </h1>
    //                 </div>
    //             </div>
    //             <div>
    //                 <div className='marketing text-xl text-white'>
    //                     <h5 className='m-5'>
    //                         {products[0].detail}
    //                     </h5>
    //                 </div>
    //                 <div className='col-start-2 list-marketing text-xl text-white'>
    //                     <ul className='m-5 list-outside'>
    //                        {products[0].marketing}
    //                     </ul>
    //                 </div>
    //             </div>
    //             <div className='type font-semibold text-7xl text-[var(--red-primary)]'>
    //                 <h1 className='m-5 text-center mt-40'>{products[0].type}</h1>
    //             </div>
    //         </div>
    //     </div>
    // );
}