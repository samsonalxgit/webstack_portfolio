/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'
import React, { FC, useState } from 'react'
import Protected from '../hooks/useProtected'
import Heading from '../utils/Heading'
import Hero from '../components/Route/Hero'
import Header from '../components/Header'
import Profile from "../components/Profile/Profile"
import { useSelector } from 'react-redux'
type Props = {}

const page:FC<Props> = (props) => {

  const [open, setOpen] = useState(false);
  const [activeItem,setActiveItem] = useState(0);
  const [route,setRoute] = useState("Login");
  const { user } = useSelector((state:any) => state.auth);

  return (
    <div>
        <Protected>
        <Heading
          title={`${user?.name} profile`}
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
        <Profile user={user} />
        </Protected>

    </div>
  )
}

export default page;