import { NextResponse } from "next/server";

export async function middleware(req) {
    const { accessCookie } = req.cookies

    const url = req.url

    if (url.includes('/rooms')) {
        if (!accessCookie) {
            return NextResponse.redirect('http://localhost:3000/login')
        }
    } else if (url.includes('/login')) {
        if (accessCookie) {
            return NextResponse.redirect('http://localhost:3000/rooms')
        }
    }

    return NextResponse.next()

}