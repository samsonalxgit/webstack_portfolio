/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'
import React,{FC,useState} from "react";
import Heading from "./utils/Heading";
import Header from "./components/Header";
import Hero from "./components/Route/Hero"


interface Props{
  //open: boolean;
}


const Page: FC<Props> = (props)=>{
  const [open, setOpen] = useState(false);
  const [activeItem,setActiveItem] = useState(0);
  const [route,setRoute] = useState("Login");

  return (
    <div>
      <Heading
      title="Waga Healthcare education"
      description="Waga is a platform for health education!"
      keywords="Mental health, Reproductive health, Food and nutrition"
      />
      <Header
      open = {open}
      setOpen = {setOpen}
      activeItem = {activeItem}
      setRoute={setRoute}
      route = {route}
      />
      <Hero />
    </div>
  )
};


export default Page;