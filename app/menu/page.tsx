import Link from 'next/link'
import React from 'react'
import { menu } from '../data'

const MenuPage = () => {
  return (
    <div className='p-4 lg:px-20 xl:px-40 h-[calc(100vh-6rem)] flex flex-col md:flex-row items-center'>
      {menu.map((category) => (
        <Link 
          href={`/menu/${category.slug}`} 
          key={category.id} 
          className='w-full h-1/3 bg-cover p-8 md:h-1/2' 
          style={{ backgroundImage: `url(${category.img})` }}
        >
          {/* Use safe inline styles or mapping for dynamic colors */}
          <div 
            className='w-1/2' 
            style={{ color: category.color }}
          >
            <h1 className='uppercase font-bold text-3xl'>{category.title}</h1>
            <p className='text-sm my-8'>{category.desc}</p>
            <button 
              className='hidden 2xl:block py-2 px-4 rounded-md'
              style={{
                backgroundColor: category.color,
                color: category.color === 'black' ? 'white' : '#ef4444' // #ef4444 is Tailwind's red-500
              }}
            >
              Explore
            </button>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default MenuPage

