import React, { useEffect, useState } from 'react'
import Slider from 'react-slick';
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';

function PopularSlider() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const api = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s")
            const mealData = await api.json()
          //  console.log(mealData.meals);
            setData(mealData.meals)
        }
        fetchData()
    }, [])
    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true
      };
  return (
   <>
  <div className='w-[90%] mx-8'>
   
      <Slider {...settings}>
      {data.map((d) =>  {
      return (
        <Link to={`/${d.idMeal}`} key={d.idMeal}  className='p-6'>
            <img src={d.strMealThumb} alt="" className='w-[14rem] px-[8]' />
        </Link>
      ) })}

      </Slider>
    </div>
    
   </>
  )
}

export default PopularSlider