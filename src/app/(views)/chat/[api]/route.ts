import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) 
{
    const searchParams = req.nextUrl.searchParams;
    const action = searchParams.get('action') || 'error';
    const body = (await req.json()) ?? null;

    switch(action)
    {
        case "one":
            return NextResponse.json({ body});
        case 'two':
            return NextResponse.json({ body});
        default: return NextResponse.json({"error": "invalid action"});
    }
}

export async function GET(req: NextRequest) 
{
    const searchParams = req.nextUrl.searchParams;
    const action = searchParams.get('action') || 'error';
    switch(action)
    {
        case "one":
            return NextResponse.json({ action});
        case 'two':
            return NextResponse.json({ action});
        default: return NextResponse.json({"error": "invalid action"});
    }
}