import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    

<footer className="p-4 bg-white md:p-8 lg:p-10">
  <div className="mx-auto max-w-screen-xl text-center">
  <Link href={'/'} className="self-center text-xl lg:text-2xl font-bold whitespace-nowrap">Toytopia</Link>
      <p className="my-6 text-gray-500 dark:text-gray-400">Explore our collection and enjoy seamless payments designed to spark joy with every purchase!</p>
      <ul className="flex flex-wrap justify-center items-center mb-6 text-gray-900">
              <li>
                <Link href={'/'} className="mr-4 hover:underline md:mr-6 ">Home</Link>
              </li>
              <li>
                <Link href={'/'} className="mr-4 hover:underline md:mr-6 ">Features</Link>
              </li>
              <li>
                <Link href={'/'} className="mr-4 hover:underline md:mr-6 ">Marketplace</Link>
              </li>
              <li>
                <Link href={'/'} className="mr-4 hover:underline md:mr-6 ">Team</Link>
              </li>
              <li>
                <Link href={'/'} className="mr-4 hover:underline md:mr-6 ">Contact</Link>
              </li>
            </ul>
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024-2025 <a href="#" className="hover:underline">Toytopia</a>. All Rights Reserved.</span>
  </div>
</footer>
  )
}

export default Footer