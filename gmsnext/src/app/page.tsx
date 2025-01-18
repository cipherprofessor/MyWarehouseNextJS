"use client"
import { SidebarDemo } from "@/components/ui/Aceternity/SideMenu/SidebarDemo";
import Image from "next/image";
import {Button} from '@heroui/button'; 
import HeroUICalendar from "@/components/ui/HeroUI/Calendar/Calendar";
import DateInputToFrom from "@/components/ui/HeroUI/DateInput/DateInputToFrom";
import HeroUIDatePickerFromTo from "@/components/ui/HeroUI/DatePicker/DatePicker";

export default function Home() {
  return (
    // <div >
    //   Welcome To Next JS Repo with MongoDB
     
      
    // </div>
    <>
    {/* <SidebarDemo /> */}

    {/* <Button>Click me</Button> */}
    {/* <HeroUICalendar />
    <DateInputToFrom /> */}
    <HeroUIDatePickerFromTo />
    </>
    
  );
}
