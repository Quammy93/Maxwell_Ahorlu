import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Maxwell Ahorlu - Full Stack Web Developer & AI Enthusiast, Cloud Computing & DevOps',
  description: 'Aspiring Full Stack | Web & Mobile Dev | Building the future, one line of code at a time. View my projects and skills below.'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <style dangerouslySetInnerHTML={{
          __html: `
            @keyframes fade-in-up {
              0% {
                opacity: 0;
                transform: translateY(30px);
              }
              100% {
                opacity: 1;
                transform: translateY(0);
              }
            }
            
            @keyframes float {
              0%, 100% {
                transform: translateY(0px);
              }
              50% {
                transform: translateY(-10px);
              }
            }
            
            .animate-fade-in-up {
              animation: fade-in-up 1s ease-out;
            }
            
            .animate-float {
              animation: float 6s ease-in-out infinite;
            }
          `
        }} />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}