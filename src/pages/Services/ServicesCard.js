import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";
const ServicesCard = ({product}) => {
    const {strMealThumb,strMeal,strInstructions,_id}= product;
    return (

            <div className="">
                <div className="card bg-white border w-96 p-3">
                    <img src={strMealThumb} className="rounded-lg w-96" alt="" />
                    <h3 className='text-[#2E2E2E] text-xl font-semibold block mt-2'>{strMeal}</h3>
                    <p className="text-[#676767] mt-4">{strInstructions.length <100 ?strInstructions : strInstructions.slice(0,100)+'...'}</p>
                    <div className='flex justify-end p-2 text-2xl text-[#F86061]'>
                        <Link to={`/service/${_id}`}><FaArrowRight /></Link>
                    </div>
            </div>
        </div>
    );
};

export default ServicesCard;