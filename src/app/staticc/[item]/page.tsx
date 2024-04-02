// 'use client';
'use server';
import React, { useEffect, useState } from 'react';
// import { useSearchParams } from 'next/navigation';

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
    // const searchParams = useSearchParams();
    // const search = searchParams.get('search');

    const data = await getData();

    return (
        <>
            <div>hi</div>
            {/* <div>{resultSearch?.name + "i'm here"}</div> */}
            <div>{data + "i'm here 123"}</div>
            <div>{JSON.stringify(data, null, 2)}</div>
            <pre>{JSON.stringify(data, null, 2)}</pre>

            <div>bye</div>
        </>
    );
}
