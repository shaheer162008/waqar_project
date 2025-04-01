'use client'
import { Menu } from 'lucide-react'
import React from 'react'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
  

const toggle = () => {
    console.log("toggle");
}

const SideNav = () => {
  return (
    <div className='flex lg:hidden text-white'>
    <Sheet >
  <SheetTrigger>
  <Menu/>
  </SheetTrigger>
  <SheetContent className='bg-white'>
    <SheetHeader>
      <SheetTitle>Are you absolutely sure?</SheetTitle>
      <SheetDescription>
        This action cannot be undone. This will permanently delete your account
        and remove your data from our servers.
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>
    </div>

  )
}

export default SideNav