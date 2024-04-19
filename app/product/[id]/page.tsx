"use client"
import { usePathname } from "next/navigation";
import ItemPage from "@/app/components/ItemPage";
import NavbarStatic from "@/app/components/NavbarStatic";
import Footer from "@/app/components/Footer";

export default function Page() {
    var idList = usePathname().split("/");
    return (
      <main>
      <div className="flex min-h-screen flex-col items-center p-12 justify-center">
        <NavbarStatic men={false} women={false}/>
        <ItemPage itemID = {idList[idList.length-1]} /> 
        </div>
      <Footer/>
    </main>
    );
  };