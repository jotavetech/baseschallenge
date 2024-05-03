'use client';

import Link from "next/link";

export default function NotFound() {
    return (
        <html>
            <body className="flex items-center justify-center min-h-screen ">
                <div className="items-center justify-center text-center gap-2 flex flex-col ">

                <h1 className="text-xl">404 | Page Not Found</h1>
                <Link href={"/"}>
                    <button className="rounded-xl bg-button-bg-2 text-white px-5 py-2">
                Back to home
                </button></Link>
                </div>
            </body>
        </html>
    )
}