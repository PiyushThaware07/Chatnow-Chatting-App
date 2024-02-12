import React from 'react';

export default function Sidebar() {
    return (
        <>
            <div className='sidebar-container w-full h-full border-e-[1.3px] bg-yellow-100 overflow-auto'>
                <div className="w-full h-full pt-[3.7rem] sm:pt-[4px]">
                    {/* <div className="button-groups flex flex-nowrap items-center">
                        <button className='bg-yellow-400 text-white w-full p-2 text-sm font-semibold'>Invite User</button>
                        <button className='bg-slate-900 text-white w-full p-2 text-sm font-semibold'>Create Group</button>
                    </div> */}
                    {/* <div className="">
                        <form action="">
                            <input className='w-full bg-yellow-50 text-sm font-semibold p-3 focus:outline-none' type="text" placeholder='Connect with new people' />
                        </form>
                    </div> */}
                </div>
            </div>
        </>

    )
}
