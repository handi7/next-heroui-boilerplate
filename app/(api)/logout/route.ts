import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const origin = req.nextUrl.origin;

  const cookieStore = await cookies();

  cookieStore.delete("access_token");
  cookieStore.delete("refresh_token");
  cookieStore.delete("user");

  return NextResponse.redirect(`${origin}/login`);
}
