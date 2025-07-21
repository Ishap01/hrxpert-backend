import React, { useEffect } from 'react';

const Table = () =>{
    const fetchLeaves = async () =>{
        
    }


    useEffect(()=>{

    },[]);
    return (
        <div className='p-6'>
            <div className='text-center'>
                <h3 className='text-2x1 font-bold'>Manage Leaves</h3>
            </div>
            <div className='flex justify-between items-center'>
                <input type="text" placeholder="Search by Dep Name" className="px-4 py-0.5 border" />
                <button className='px-2 py-1 bg-teal-600 text-white hover:bh-teal-700'>Pending</button>
                <button className='px-2 py-1 bg-teal-600 text-white hover:bh-teal-700'>Approved</button>
                <button className='px-2 py-1 bg-teal-600 text-white hover:bh-teal-700'>Rejected</button>
            </div>

        </div>
    )
};
export default Table;