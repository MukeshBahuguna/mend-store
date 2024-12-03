"use client"

import { Button } from "@/components/ui/button"
import DashboardPage from './dashboard/DashboardPage';
import SideMenu from '@/components/SideMenu/SideMenu';
import Header from '@/components/Header/Header';
import Link from "next/link";
import { useTheme } from "next-themes";
import { eThemeType } from "@/components/theme/ModeToggle";

export default function Home() {
  const {theme}  = useTheme();
  const opacity = theme === eThemeType.LIGHT  ? 'opacity-[0.4]' : 'opacity-[0.3]';
  return (
      <>
        <div className={"relative"}>
          <div className={`bg-white bg-home bg-cover bg-center absolute h-full w-full -z-[1] ${opacity}`} />
          <main className="flex flex-col text-center mx-auto h-dvh">
            {/* <div>
                <h1 className="text-4xl font-bold"> MENDSTORE </h1>
            </div> */}
            <Header />
            {/* <SideMenu /> */}
            <DashboardPage />
          </main>
            

        </div>
      </>
  );
}
