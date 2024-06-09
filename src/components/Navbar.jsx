import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Navbar() {
    const navigate = useNavigate()
    const [input, setInput] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault()
        navigate(`/searchItem/${input}`)
        

    }
  return (
   <>
   <div className='flex h-[3rem] w-full bg-orange-800 items-center '>
    <div>
        <Link to={'/'} >React Recipe App</Link>
    </div>
    <div className='px-4 text-black'>
        <form onSubmit={handleSubmit} >
        <input type="text" placeholder='..your favourite food' value={input} onChange={(e) => setInput(e.target.value)} className='p-1' />
        </form>
        
    </div>
    <div className='flex gap-4 px-4 cursor-pointer'>
        <Link to={`/category/indian`} >Indian</Link >
        <Link to={`/category/american`} >American</Link >
        <Link to={`/category/british`} >British</Link >
        <Link to={`/category/chinese`} >Chinese</Link >
        <Link to={`/category/thai`} >Thai</Link >
    </div>
   </div>
   </>
  )
}

export default Navbar
