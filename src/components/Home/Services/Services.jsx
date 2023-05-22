import React, { useEffect, useRef, useState } from 'react';
import ServicesCard from './ServicesCard';

const Services = () => {
    const [services, setServices] = useState([])
    const [ascending, setAscending] = useState(true);
    const searchRef = useRef(null);
    const [search, setSearch] = useState('');

    useEffect(() => {
        fetch(`https://car-doctor-server-zeta-two.vercel.app/services?search=${search}&sort=${ascending ? 'asc' : 'desc'}`)
            .then(res => res.json())
            .then(data => setServices(data))
    }, [ascending, search])

    const handleSearch = () => {
        console.log(searchRef.current.value)
        setSearch(searchRef.current.value);
    }

    return (
        <div>
            <div className='text-center mb-5'>
                <h2 className='text-2xl font-bold text-orange-600'>Service</h2>
                <h3 className='text-5xl font-bold my-2'>Our Service Area</h3>
                <p>The majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable.  </p>


                {/* searching implement in my services section */}
                <div className='flex justify-center my-4'>
                    <div className="form-control">
                        <div className="input-group">
                            <input ref={searchRef} type="text" placeholder="Search…" className="input input-bordered" />
                            <button onClick={handleSearch} className="btn btn-square">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                            </button>
                        </div>
                    </div>
                </div>


                {/* ascending descending button */}
                <button
                    onClick={() => setAscending(!ascending)}
                    className='py-2 px-4 bg-gray-600 text-white font-semibold rounded-lg mt-3'>{ascending ? "Descending Price" : "Ascending Price"}
                </button>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10 px-4 lg:px-20'>
                {
                    services.map(service => <ServicesCard
                        key={service._id}
                        service={service}
                    ></ServicesCard>)
                }
            </div>
        </div>
    );
};

export default Services;