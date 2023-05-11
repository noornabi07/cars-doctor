import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import banner from '../../assets/images/checkout/checkout.png'
import { AuthContext } from '../../Provider/AuthProvider';

const CheckOut = () => {
    const services = useLoaderData()
    const { title, _id, price } = services;
    const { user } = useContext(AuthContext)

    const handleOrderService = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = user?.email;
        const order = {
            displayName: name,
            date,
            email,
            services: _id,
            price: price,
        };
        console.log(order)
    }

    return (
        <div className='px-20 mt-3'>
            <img src={banner} alt="" className='relative' />

            <div className=' absolute top-[344px] left-[570px]'>
                <p className='bg-red-500 font-bold text-white px-4 py-4 mx-auto w-40 rounded-t-2xl'>Home/Checkout</p>
            </div>
            <h2 className='text-3xl font-bold my-3 text-center text-purple-700'>Services Title: {title}</h2>

            {/* form */}
            <div className=" w-full mx-auto shadow-2xl border my-5 rounded-lg bg-base-100">
                <form onSubmit={handleOrderService}>
                    <div className="card-body">
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' defaultValue={user?.displayName} className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Order Date</span>
                                </label>
                                <input type="date" name='date' placeholder="Last Name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Email</span>
                                </label>
                                <input type="email" name='email' defaultValue={user?.email} className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Due Amount</span>
                                </label>
                                <input type="text" name='price' defaultValue={'$' + price} className="input input-bordered" />
                            </div>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn bg-red-600 btn-block" type="submit" value="Order Confirm" />
                        </div>
                    </div>
                </form>
            </div>

        </div>
    );
};

export default CheckOut;