import React from 'react';
import { FaArrowCircleRight, FaArrowRight, FaBeer } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ServicesCard = ({ service }) => {
    const {_id, title, img, price } = service;
    return (
        <div>
            <div className="card w-96 bg-base-100 border">
                <figure className="px-10 pt-10">
                    <img src={img} alt="Shoes" className="rounded-xl h-56" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title text-slate-600 font-bold text-3xl">{title}</h2>
                    <div className='flex items-center mt-4'>
                        <p className='text-red-500 font-bold text-2xl'>Prices: ${price}</p>
                        <Link to={`/checkout/${_id}`}>
                            <FaArrowRight className='text-red-500'></FaArrowRight>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicesCard;