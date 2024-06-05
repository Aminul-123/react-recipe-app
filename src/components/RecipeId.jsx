import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import TrendingSlider from "./TrendingSlider";
import { useParams } from "react-router-dom";

function RecipeId() {
  const { idMeal } = useParams();
  //console.log(idMeal);
  const [data, setData] = useState([]);
  const [active, setActive] = useState("ingredient");

  useEffect(() => {
    const fetchData = async () => {
      const apiURL = await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
      );
      const singleData = await apiURL.json();
      setData(singleData.meals[0]);
      console.log(singleData);
    };
    fetchData();
  }, [idMeal]);
  return (
    <>
      <Navbar />
      <div className="p-8 flex flex-col justify-center items-center">
        <h1 className="text-bold text-[2rem]"> {data.strMeal} </h1>
        <div>
          <img src={data.strMealThumb} alt="img" className="w-[16rem] p-3" />
        </div>
        <div className="flex my-4">
          <button
            className="h-[2rem] w-[6rem] bg-orange-700 mx-4"
            onClick={() => setActive("ingredient")}
          >
            Ingredient
          </button>
          <button
            className="h-[2rem] w-[6rem] bg-teal-700"
            onClick={() => setActive("instruction")}
          >
            Instruction
          </button>
        </div>
        {active === "ingredient" ? (
          <div className="text-bold text-[1.3rem] text-center">
            <h2>
              {data.strIngredient1} - {data.strMeasure1}{" "}
            </h2>
            <h2>
              {data.strIngredient2} - {data.strMeasure2}{" "}
            </h2>
            <h2>
              {data.strIngredient3} - {data.strMeasure3}{" "}
            </h2>
            <h2>
              {data.strIngredient4} - {data.strMeasure4}{" "}
            </h2>
            <h2>
              {data.strIngredient5} - {data.strMeasure5}{" "}
            </h2>
            <h2>
              {data.strIngredient6} - {data.strMeasure6}{" "}
            </h2>
          </div>
        ) : (
          <div className="text-center w-[80%] ">
            <h2>{data.strInstructions}</h2>
          </div>
        )}
      </div>
      <TrendingSlider />
    </>
  );
}

export default RecipeId;
