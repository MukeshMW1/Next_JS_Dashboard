// import { React } from 'react'
import { Sidebar } from "@/components/Sidebar";
import { ComplexNavbar, Navbars, NavListMenu } from "@/components/Navbar";
import { Menubar } from '@/components/Menubar'
import { Security } from "@/components/Security";
import { Basics } from "@/components/Basics";
import { Verification } from '@/components/Verification'
import { Browser } from "@/components/Broswer";


export default function Home() {
  return (
    <div className='flex'>
      <Sidebar />
      <div className="w-[100vw]">
        <ComplexNavbar />
        <Menubar />
        <Security />
        <Basics />
        <Verification />
        <Browser />
      </div>
    </div>

  );
}
