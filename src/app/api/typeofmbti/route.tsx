import { NextRequest,NextResponse } from "next/server";

type MBTI = {
    message: string;
};

let mbtiType: MBTI[] = [];

export async function GET(request: NextRequest): Promise<any> {
    const url = new URL(request.url);
    const action = url.searchParams.get("action");
    // http://localhost:3000/api/todo?action=reset
    if (action == 'reset'){
        mbtiType = [];
    }
    return NextResponse.json(mbtiType);
}

export async function POST(request: NextRequest): Promise<any> {
    const {message}: MBTI = await request.json()
    mbtiType = [{message}];
    return NextResponse.json({result:"ok"});
}