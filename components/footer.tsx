import Link from 'next/link'
import React from 'react'

export default function Footer() {

  const routes =[
    {
      path:"/terms-conditions",
      name:"Terms and Conditions"
    },

    {
      path:"/privacy-policy",
      name:"Privacy Policy"
    }
  ]
  return (
    <footer className='mt-auto flex items-center justify-between h-16 border-t border-white/10 px-3px sm:px-9 text-xs text-white/25 '>
      <small className="text-xs">&copy; 2050steve. All rights reserved.</small>

      <ul className='flex gap-x-3 sm:gap-x-8'>

        {
          routes.map(route => (
            <li key={route.path}>
              <Link href={route.path}>{route.name}</Link>
            </li>
          ))
        }
      </ul>

      </footer>
  )
}
