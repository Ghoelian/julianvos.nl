import "server-only";
import { NextRequest, NextResponse } from "next/server";
import {
  base64URLEncode,
  generateOauthCodeChallenge,
  sha256,
} from "@/utils/utils";

export const GET = async (request: NextRequest): Promise<NextResponse> => {
  const codeChallenge = generateOauthCodeChallenge();
  const codeChallengeSha256 = await sha256(codeChallenge);
  const state = Buffer.from(
    globalThis.crypto.getRandomValues(new Int8Array(16)),
  ).toString("base64url");

  const queryParams = new URLSearchParams({
    client_id: process.env.TIDAL_CLIENT_ID!,
    redirect_uri: process.env.TIDAL_REDIRECT_URL!,
    scope: process.env.TIDAL_SCOPES!,
    code_challenge_method: "S256",
    code_challenge: base64URLEncode(codeChallengeSha256),
    response_type: "code",
    state: state,
  });

  return NextResponse.json({
    loginUrl: `https://login.tidal.com/authorize?${queryParams.toString()}`,
    oauthCodeChallenge: codeChallengeSha256,
    state: state,
  });
};
