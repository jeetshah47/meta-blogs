import { URLSearchParams } from "url";
import { getAuthCallBack } from "../google";

export async function GET(req: Request) {
    const url = new URL(req.url);
    const params = new URLSearchParams(url.searchParams);
    const code  = params.get('code');
    
    if(code) {
       const data = await getAuthCallBack(code);
       if(data) {
        return Response.redirect(`http:localhost:3000/?id=${data.id}`)
       }
    }
    return Response.json({
      auth: "url",
    });
    // await getAuthCallBack()
  }