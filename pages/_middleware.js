import { NextResponse } from "next/server";

export async function middleware(req) {
    const { accessCookie } = req.cookies

    const url = req.url

    if (url.includes('/rooms')) {
        if (!accessCookie) {
            return NextResponse.redirect(`${process.env.NEXT_PUBLIC_URL}login`)
        }
    } else if (url.includes('/login')) {
        if (accessCookie) {
            return NextResponse.redirect(`${process.env.NEXT_PUBLIC_URL}rooms`)
        }
    } else if (url.includes('/account')) {
        if (!accessCookie) {
            return NextResponse.redirect(`${process.env.NEXT_PUBLIC_URL}login`)
        }
    }

    return NextResponse.next()

}