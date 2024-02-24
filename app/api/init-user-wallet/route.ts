import { NextRequest, NextResponse } from "next/server";
import { initiateUserControlledWalletsClient } from "@circle-fin/user-controlled-wallets";

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

    console.log(challengeId);

    return NextResponse.json(
        challengeId,
    );
}