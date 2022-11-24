import {
  NextFetchEvent,
  NextRequest,
  NextResponse,
  URLPattern,
} from "next/server";
import { getToken } from "next-auth/jwt";
export { default } from "next-auth/middleware";
const PUBLIC_FILE = /\.(.*)$/;
export async function middleware(req: NextRequest | any, ev: NextFetchEvent) {
  /*************************************************language************ */

  if (
    req.nextUrl.pathname.startsWith("/_next") ||
    req.nextUrl.pathname.includes("/api/") ||
    PUBLIC_FILE.test(req.nextUrl.pathname)
  ) {
    return;
  }
  console.log(req.nextUrl.locale);
  if (req.nextUrl.locale === "default") {
    const locale = req.cookies.get("NEXT_LOCALE") || "es";

    return NextResponse.redirect(
      new URL(`/${locale}${req.nextUrl.pathname}${req.nextUrl.search}`, req.url)
    );
  }

  /****************************************************************** */
  const session: any = await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRET,
  });
  const url = req.nextUrl.clone();

  if (!session) {
    const requestedPage = req.nextUrl.pathname;

    url.pathname = `/auth/login`;
    url.search = `p=${requestedPage}`;
    return NextResponse.redirect(url);
  }

  /*************************************************by rol************ */
  const validRoles = ["admin", "client"];

  if (!validRoles.includes(session.user.role)) {
    return NextResponse.redirect("http://localhost:3000/404");
  }
  /******************************************************************* */

  return NextResponse.next();
}

export const config = {
  matcher: ["/app/:path*"],
};
