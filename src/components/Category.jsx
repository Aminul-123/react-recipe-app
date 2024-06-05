import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Navbar from './Navbar';

function Category() {
    const {name} = useParams()
    //console.log(name);
    const [data, setData ] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
    const apiURL = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${name}`)
            const singleData =  await apiURL.json()
            setData(singleData.meals)
            console.log(singleData)

        }
        fetchData()
    }, [name]);
  return (
    <>
    <Navbar/>
    <div className='flex flex-wrap p-3 ml-[4rem]'>
        
   
    {data.map((d) => {
        return (
            < div key={d.idMeal} className='m-4 '>

               <Link to={`/${d.idMeal}`} > <img src={d.strMealThumb} alt="img" className='w-[15rem] m-4 border border-red-500' />
                <h2 className='text-center text-bold my-4'> {d.strMeal} </h2>
                </Link>
            </div>
        )
    })}

</div>
    </>
  )
}

export default Category