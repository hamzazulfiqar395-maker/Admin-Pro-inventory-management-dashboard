import React from 'react';
import { Menu, Bell, UserCircle } from 'lucide-react';

const Navbar = ({ toggleSidebar }) => {
    return (
        <header className="bg-white shadow-sm h-16 flex items-center justify-between px-4 lg:px-8 z-10 relative">
            <div className="flex items-center">
                <button
                    onClick={toggleSidebar}
                    className="p-2 mr-4 rounded-md text-gray-500 hover:bg-gray-100 hover:text-gray-700 lg:hidden focus:outline-none"
                >
                    <Menu size={24} />
                </button>
                <h2 className="text-xl font-semibold text-gray-800 hidden sm:block">Dashboard Overview</h2>
            </div>

            <div className="flex items-center gap-4">
                <button className="p-2 text-gray-400 hover:text-gray-600 focus:outline-none relative">
                    <Bell size={20} />
                    <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-red-500"></span>
                </button>
                <div className="flex items-center gap-2 cursor-pointer p-1 rounded-full hover:bg-gray-100 transition-colors">
                    <UserCircle size={32} className="text-gray-600" />
                    <div className="hidden md:block text-sm text-right leading-tight">
                        <p className="font-medium text-gray-700">Admin User</p>
                        <p className="text-gray-500 text-xs text-left">Manager</p>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
