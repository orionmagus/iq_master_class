import { NextRequest } from "next/server";
import  { WebPubSubServiceClient } from '@azure/web-pubsub';

export async function GET(req: NextRequest) 
{
    const userId = req.nextUrl.searchParams.get('userId') ?? 'anonymous';
    const connectionString = process.env.PUBSUB_CONNECTION_STRING!;
    const hubname = process.env.PUBSUB_HUB_NAME!;
    const service = new WebPubSubServiceClient(connectionString, hubname);

    const token = await service.getClientAccessToken({
        userId:userId,
        roles: [
        "webpubsub.sendToGroup",
        "webpubsub.joinLeaveGroup"
    ]});

    return new Response(JSON.stringify({token:token.url}), { headers: { 'Content-Type': 'application/json' }, })
}