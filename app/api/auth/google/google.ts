import { OAuth2Client } from "google-auth-library";
import { NextApiRequest } from "next";
import { NextRequest } from "next/server";

const CLIENT_ID = process.env.NEXT_PUBLIC_GOOGLE_CLIENT;
const CLIENT_SECRET = process.env.NEXT_PUBLIC_GOOGLE_SECRET;
const REDIRECT_URL = "http://localhost:3000/api/auth/google/callback";

export const oauth2Client = new OAuth2Client({
  clientId: CLIENT_ID,
  clientSecret: CLIENT_SECRET,
  redirectUri: REDIRECT_URL,
});

const scopes = [
  "https://www.googleapis.com/auth/userinfo.profile",
  "https://www.googleapis.com/auth/userinfo.email",
];

export const authUrl = oauth2Client.generateAuthUrl({
  scope: scopes,
});

const dummyUsers = [
  {
    name: "Jeet Shah",
    email: "jeetshahajwa@gmail.com",
  },
];

interface GoogleReponse {
  id: string;
  email: string;
  verified_email: boolean;
  name: string;
  given_name: string;
  family_name: string;
  picture: string;
  locale: string;
}

export const getAuthCallBack = async (code: string) => {
  try {
    const { tokens } = await oauth2Client.getToken(code);
    oauth2Client.setCredentials(tokens);
    const userInfo = await oauth2Client.request<GoogleReponse>({
      url: "https://www.googleapis.com/oauth2/v1/userinfo",
    });
    console.log(userInfo?.data);

    //   let userEmail = userInfo?.data?.data.email;

    //   let user = dummyUsers.find((user) => user.email === userEmail);

    //   if (!user) {
    //     // res.redirect("http://localhost:3000/login?error='user not found'");
    //   }
    // res.status(200).json({ data: userInfo.data });
    //   res.redirect("http://localhost:3000/?data=" + JSON.stringify(userInfo.data));
    return userInfo.data;
  } catch (error) {
    console.log("Eror");

    //   res.status(500).json({ error: "Something went wrong" });
  }
};

export const getAuthUrl = async () => {
  return { url: authUrl };
};
