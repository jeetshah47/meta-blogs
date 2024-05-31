import { getAuthCallBack, getAuthUrl } from "./google";

export async function GET(req: Request) {
  const url = await getAuthUrl();
  return Response.json({
    auth: url,
  });
  // await getAuthCallBack()
}
