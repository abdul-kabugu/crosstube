/* eslint-disable prettier/prettier */
// @ts-nocheck

import { AppLogo, MenuBold } from '@/Icons'
import React from 'react'
import {AiOutlineMenu} from 'react-icons/ai'
import Search from './Search'
import Profile from './Profile'
import { useToggleSidebar} from '@/store/toggleState'
export default function TopNav() {
  const {toggleSidebar, isSidebarExpanded} = useToggleSidebar()
  return (
    <div className='h-[60px] flex justify-between items-center px-3 border-b-2 border-gray-500 sticky top-0 bg-inherit'> 
     <div className='flex gap-4 items-center'>
      <AiOutlineMenu size={23} className='cursor-pointer xs:hidden md:block' onClick={toggleSidebar} />
     
      <AppLogo className='w-7 text-blue-500 ' />
      </div>
       <Search />
       <Profile  />
      </div>
  )
}

