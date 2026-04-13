import Link from 'next/link';
import Image from 'next/image';
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: '404 - Page Not Found',
    description: 'The page you are looking for does not exist.',
}

export default function GlobalNotFound() {
    return (
        <html lang="en" className={inter.className}>
            <body>
                <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4 text-center">
                    {/* 404 Header Text */}
                    <h1 className="text-9xl font-extrabold text-[#244D3F] tracking-widest">
                        404
                    </h1>

                    {/* GIF/Image Container */}
                    <div className="relative w-full max-w-lg h-64 md:h-80 my-4">
                        <Image
                            src="/assets/not-found.gif" // Apnar GIF file er path ekhane diben
                            alt="Page Not Found Animation"
                            className="object-contain"
                            fill
                            priority
                        />
                    </div>

                    {/* Message Section */}
                    <div className="space-y-4">
                        <h2 className="text-3xl md:text-5xl font-bold text-[#244D3F]">
                            Look Like you're lost
                        </h2>
                        <p className="text-gray-500 text-lg md:text-xl">
                            the page you are looking for not available
                        </p>
                    </div>

                    {/* Go To Home Button */}
                    <div className="mt-10">
                        <a
                            href="/"
                            className="btn bg-[#244D3F]  hover:bg-lime-900 text-white border-none px-10 py-3 rounded-md text-lg transition-all duration-300"
                        >
                            Go To Home
                        </a>
                    </div>
                </div>
            </body>
        </html>
    );
}