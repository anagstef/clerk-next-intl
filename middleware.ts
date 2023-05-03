import { authMiddleware } from "@clerk/nextjs";
import createMiddleware from 'next-intl/middleware';
import { NextRequest } from "next/server";

const locales = ['en', 'el'];
const publicRoutes = ['/', '/el', '/about', '/sign-in', '/sign-up', '/en/about', '/en/sign-in', '/en/sign-up', '/el/about', '/el/sign-in', '/el/sign-up'];

const intlMiddleware = createMiddleware({
    locales,
    defaultLocale: 'en'
});

// const clerkMiddleware = authMiddleware({
//     // beforeAuth: intlMiddleware,
//     publicRoutes,
//     afterAuth: intlMiddleware as any,
// });

// export default function middleware(req: NextRequest) {
//     const publicPathnameRegex = RegExp(
//         `^(/(${locales.join('|')}))?(${publicRoutes.join('|')})?/?$`,
//         'i'
//     );
//     const isPublicPage = publicPathnameRegex.test(req.nextUrl.pathname);

//     if (isPublicPage) {
//         return intlMiddleware(req);
//     } else {
//         return (clerkMiddleware as any)(req);
//     }
// }

export default authMiddleware({
    beforeAuth: (req) => {
        const res = intlMiddleware(req);
        console.log(res);
        return res;
    },
    publicRoutes
});

export const config = {
    // Skip all paths that should not be internationalized
    matcher: ['/((?!api|_next|.*\\..*).*)']
};