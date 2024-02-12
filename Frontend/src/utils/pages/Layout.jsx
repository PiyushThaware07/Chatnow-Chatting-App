import React from 'react';
// ^ UTILS IMPORT =========================================================
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
// & RRD ==================================================================
import { Outlet } from "react-router-dom";



export default function Layout() {
    return (
        <>
            <div className="main relative">
                <section className='main-navbar' ><Navbar /></section>
                <div className="flex flex-nowrap flex-col sm:flex-row absolute top-0 left-0 h-screen w-screen overflow-hidden sm:pt-16">
                    <aside className="main-sidebar w-full sm:w-96 md:w-96 h-full"><Sidebar /></aside>
                    <main className='main-container hidden sm:inline w-full h-full overflow-auto bg-yellow-50' ><Outlet /></main>
                </div>
            </div>
        </>
    )
}
