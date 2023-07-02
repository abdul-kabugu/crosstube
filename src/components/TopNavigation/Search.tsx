/* eslint-disable prettier/prettier */
import { SearchIcon } from '@crossbell/ui'
import {useState} from 'react'
import { CiSearch } from "react-icons/ci";
export default function Search() {
    const [searchQ, setsearchQ] = useState("")
  return (
    <div className=' px-2  rounded-lg w-1/3 h-9 flex items-center justify-between bg-gray-800'>
        <input type='text' value={searchQ} onChange={e => setsearchQ(e.target.value)}
         placeholder='Search crossTube'
         className='w-[93%] focus:outline-none bg-inherit'
        />
        <CiSearch size={17} className='text-gray-400'/>
    </div>
  )
}
