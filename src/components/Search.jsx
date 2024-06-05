import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import { Link, useParams } from 'react-router-dom'

function Search() {
    const {itemName} = useParams();
    const [data, setData] = useState([]);
    console.log(itemName)

    useEffect(() => {
        const searchElement = async () => {
            const api = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${itemName}`);
            const data = await api.json()
            console.log(data.meals)
            setData(data.meals);
        }
        searchElement()
    }, [itemName])
  return (
    <>
    <Navbar />
<div className='flex flex-wrap justify-center'>
    {
        data.map((d) => {
            return (
                
                <div key={d.idMeal}>
                   <Link to={`/${d.idMeal}`} >
                   <img src={d.strMealThumb} alt="img" className='w-[15rem] m-4' />
                   </Link> 
                    <h2 className='text-center text bold my-4'> {d.strMeal} </h2>
                </div>
                
            )
        })
    }
</div>
    </>
  )
}

export default Search