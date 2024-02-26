import { NextRequest, NextResponse } from "next/server";
import { initiateUserControlledWalletsClient } from "@circle-fin/user-controlled-wallets";
import { W3SSdk } from '@circle-fin/w3s-pw-web-sdk'

export async function POST(request: NextRequest) {
    const body = await request.json();
    const { userToken } = body;

    const circleUserSdk = initiateUserControlledWalletsClient({
        apiKey: process.env.CIRCLE_API_KEY!
    });

    const response = await circleUserSdk.createUserPinWithWallets({
        userToken: userToken,
        accountType: 'SCA',
        blockchains: ['ETH-SEPOLIA']
    });

    let challengeId;

    if (response.data && response.data.challengeId) {
        challengeId = response.data.challengeId;
    }

    let sdk = new W3SSdk()

    //sdk.setAppSettings()


    console.log(challengeId);

    return NextResponse.json(
        challengeId,
    );
}