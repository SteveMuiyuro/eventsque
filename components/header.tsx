"use client"

import Link from 'next/link'
import React from 'react'
import Logo from './logo'
import { usePathname } from 'next/navigation'

import { motion } from 'framer-motion'
import cn from '@/lib/utils'

const routes = [
{
    name:"Home",
    path:"/"
},

{
  name:"All Events",
  path:"/events/all"
}
]

export default function Header() {

  const activePathName = usePathname()
  return (
    <header className='flex items-center h-14 justify-between border-b border-white/10 px-3 sm:px-9'>
        <Logo/>
        <nav className="h-full">
          <ul className='flex gap-x-6 text-sm h-full'>
            {routes.map(route => (<li className={cn("hover:text-white flex items-center transition relative", {
              "text-white" : activePathName === route.path,
              "text-white/50":activePathName !== route.path
            })}key={route.path}>
            <Link href={route.path}>{route.name}</Link>
            {activePathName === route.path &&
            <motion.div layoutId="active-header-link" className="bg-accent h-1 w-full absolute bottom-0"></motion.div>
            }
            </li>))}
          </ul>
        </nav>
    </header>
  )
}
