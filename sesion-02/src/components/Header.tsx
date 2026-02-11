import React from 'react'

const Header = () => {
  return (
    <header 
    className='bg-slate-900 p-6 text-white shadow-2xl'>
        <div className='max-w-6xl mx-auto flex justify-between'>
            <h1 className='text-sm font-black uppercase italic'>
                Sesion 02 UseEffect
            </h1>
            <span className='bg-amber-500 text-slate-800 py-2 rounded-full font-black uppercase'>FJavier Fdez</span>
        </div>

    </header>
  )
}

export default Header