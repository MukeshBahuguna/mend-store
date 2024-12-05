import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/SideMenu/app-sidebar"
import style from './page.module.css'
import { cookies } from "next/headers";


const geistSans = localFont({
  src: "./fonts/Mono/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/Mono/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: {
    template:'%s | MEND STORE',
    default:'MEND STORE'
  },
  description:'MEND STORE'
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies()
  const defaultOpen = cookieStore.get("sidebar:state")?.value === "true"

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {/* <SidebarProvider className="sidebarProvider relative" defaultOpen={defaultOpen}>
                <AppSidebar/>
                <div className="flex flex-col">
                  <SidebarTrigger className="h-[65px] "/>

                </div> */}
                <div className="overflow-hidden h-screen w-full relative">
                  {children}
                </div>
                
            {/* </SidebarProvider> */}
          </ThemeProvider>
      </body>
    </html>
  );
}
