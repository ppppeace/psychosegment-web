// <<<<<<< HEAD
// import Image from 'next/image';
// import React from 'react';
// import picBac from '@/assets/bac.png';
// import mbti from '@/assets/MBTI.jpg';
// =======
// 'use client';
// import React, { useEffect, useState } from 'react';

// import { useSearchParams } from 'next/navigation';

// type Props = {};
// interface IResponse {
//     data: MyData;
// }
// interface MyData {
//     type: string;
//     name: string;
//     style: string;
//     detail: string;
//     marketing: string;
// }

// export default function Result() {
//     const searchParams = useSearchParams();
//     const search = searchParams.get('search');
//     const [resultSearch, setResultSearch] = useState<MyData>();

//     async function fetchData() {
//         const res = await fetch('/api/mbti?text=' + search);
//         const jsonData = (await res.json()) as IResponse;
//         setResultSearch(jsonData.data);
//     }
//     useEffect(() => {
//         fetchData();
//     }, []);
// >>>>>>> 500ead83bafe0fe0e3fb253fd07b5f85c59f1c33

//     return (
//         <div>
//             <div className='ml-20 my-2 grid grid-cols-3 gap-4'>
//                 <div className='flex'>
//                     <div>
//                         <div>
//                             <h1 className='text-2xl rotate-topic ro font-semibold mt-6'>PsychoSegment Insight Hub</h1>
//                             <div className='ml-20 row-span-2 '>
// <<<<<<< HEAD
//                                 <Image src={mbti} alt='' className=' h-max w-max' layout='responsive' />
//                                 {/* <div className='resultBox mr-10 '>
// =======
//                                 <div className='resultBox mr-10 '>
// >>>>>>> 500ead83bafe0fe0e3fb253fd07b5f85c59f1c33
//                                 <div className='m-5'></div>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className='type font-semibold text-5xl text-[var(--red-primary)] m-0'>
//                             <h1>
//                                 The
//                                 <br /> Visionary
//                             </h1>
//                         </div>
//                     </div>
//                     <div className='type font-semibold text-5xl text-[var(--red-primary)]'>
//                         <h1>
//                             {resultSearch && (
//                                 <div>
//                                     <div>{resultSearch.name}</div>
//                                 </div>
//                             )}
//                         </h1>
//                     </div>
//                 </div>
//                 <div>
//                     <div className='marketing text-xl text-white'>
//                         <h5 className='m-5'>
//                             {resultSearch && (
//                                 <div>
//                                     <div>{resultSearch.detail}</div>
//                                 </div>
//                             )}
//                         </h5>
//                     </div>
//                     <div className='col-start-2 list-marketing text-xl text-white'>
//                         <ul className='m-5 list-outside'>
//                             {resultSearch && (
//                                 <div>
//                                     <div>{resultSearch.marketing}</div>
//                                 </div>
//                             )}
//                         </ul>
//                     </div>
//                 </div>
//                 <div className='type font-semibold text-7xl text-[var(--red-primary)]'>
//                     <h1 className='m-5 text-center mt-40'>
//                         {' '}
//                         {resultSearch && (
//                             <div>
//                                 <div>{resultSearch.type}</div>
//                             </div>
//                         )}
//                     </h1>
//                 </div>
//             </div>
//         </div>
//     );
// }
