export type LoginDetails = {
  loginUrl: URL;
  oauthCodeChallenge: string;
  oauthCodeChallengeVerifier: string;
  state: string;
};
