import React, { useEffect, useState } from 'react'
import Slider from 'react-slick';
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';

function TrendingSlider() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const api = await fetch("https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian")
            const mealData = await api.json()
           // console.log(mealData.meals);
            setData(mealData.meals)
        }
        fetchData()
    }, [])
    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        cssEase: 'linear'
      };
  return (
   <>

  <div className='w-[90%] mx-8'>
   <h2 className='text-bold text-[1.4rem]'>Trending</h2>
      <Slider {...settings}>
      {data.map((d) =>  {
      return (
        <Link to={`/${d.idMeal}`} key={d.idMeal}  className='p-6'>
            <img src={d.strMealThumb} alt="" className='w-[8rem] px-[8]' />
        </Link>
      ) })}

      </Slider>
    </div>
    
   </>
  )
}

export default TrendingSlider