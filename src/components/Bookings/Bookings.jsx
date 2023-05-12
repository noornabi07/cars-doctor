import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import TableRow from './TableRow';
import Swal from 'sweetalert2';

const Bookings = () => {
    const { user } = useContext(AuthContext)
    const [bookings, setBookings] = useState([]);
    const url = `http://localhost:3000/bookings?email=${user?.email}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setBookings(data))
    }, [url])

    // deleted part

    const handleDelete = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:3000/bookings/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )

                            const remaining = bookings.filter(booking => booking._id !== id);
                            setBookings(remaining)
                        }

                    })

            }
        })
    }

    const handleBookingConfirm = id =>{
        fetch(`http://localhost:3000/bookings/${id}`, {
            method: "PATCH",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({status: 'confirm'})
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount > 0){
                // update status
                const remaining = bookings.filter(booking => booking._id !== id)
                const update = bookings.find(booking => booking._id === id)
                update.status = 'confirm'
                const newBookings = [update, ...remaining]
                setBookings(newBookings)
            }
        })
    }

    return (
        <div className='px-20 my-4'>
            <h3 className='text-4xl font-bold text-center text-red-700 my-5'>Your Bookings Services: {bookings.length}</h3>

            {/* ordered table */}
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Job Title</th>
                            <th>Services</th>
                            <th>Email</th>
                            <th>Date</th>
                            <th>Prices</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                     {
                        bookings.map(booking => <TableRow
                        key={booking._id}
                        booking={booking}
                        handleDelete={handleDelete}
                        handleBookingConfirm={handleBookingConfirm}
                        >
                        </TableRow>)
                     } 
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Bookings;