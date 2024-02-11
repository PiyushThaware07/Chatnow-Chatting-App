import React from 'react'

export default function Sidebar() {
    return (
        <>
            <div className='sidebar-container w-full sm:w-48 md:w-60 h-full bg-white border-e-[1.3px] overflow-auto'>
                <div className="w-full h-full pt-[3.9rem] sm:pt-[6px]">
                    <form className='w-full sticky top-1'>
                        <input type="text" placeholder='Search or start new chat' className='w-full ps-5 pe-3 py-3 bg-slate-100 focus:outline-none text-sm' />
                    </form>


                    {/* CHATS  */}
                    <div className="chats-container overflow-y-auto">
                        <ul className='my-3 h-full'>
                            <li className='flex flex-nowrap items-center justify-start gap-2 cursor-pointer ps-3 pe-2 py-2 hover:bg-slate-200'>
                                <div className="relative">
                                    <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D" alt="User-profile" className='h-10 w-10 object-cover rounded-full' />
                                    <div className="active h-3 w-3 bg-green-500 border-2 border-white rounded-full absolute bottom-0 right-0"></div>
                                </div>
                                <div className="flex-1 text-slate-700">
                                    <h1 className='text-[13px] font-semibold'>Piyush Thaware</h1>
                                    <p className='text-[11px] font-medium'>Lorem ipsum dolor sit.</p>
                                </div>
                                <div className="h-5 w-5 bg-green-300 rounded-full flex flex-nowrap items-center justify-center text-[12px] font-semibold text-white">1</div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>

    )
}
