import { NextRequest, NextResponse } from "next/server";
import { initiateUserControlledWalletsClient } from "@circle-fin/user-controlled-wallets";

export async function POST(request: NextRequest) {
    const body = await request.json();
    const { userId } = body;

    const circleUserSdk = initiateUserControlledWalletsClient({
        apiKey: process.env.CIRCLE_API_KEY!
    });

    const response = await circleUserSdk.createUserToken({
        userId: userId
    });

    let userToken;
    let encryptionKey;

    if (response && response.data && response.data.userToken && response.data.encryptionKey) {
        userToken = response.data.userToken;
        encryptionKey = response.data.encryptionKey;
    }

    const data = {
        userToken: userToken,
        encryptionKey: encryptionKey
    }

    return NextResponse.json(
        data
    );
}