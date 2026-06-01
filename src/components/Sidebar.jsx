import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, ShoppingBag, Package, Settings } from 'lucide-react';

const Sidebar = ({ isOpen, setIsOpen }) => {
    const menuItems = [
        { path: '/', name: 'Dashboard', icon: <LayoutDashboard size={20} /> },
        { path: '/products', name: 'Products', icon: <ShoppingBag size={20} /> },
    ];

    return (
        <>
            {/* Mobile Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
                    onClick={() => setIsOpen(false)}
                ></div>
            )}

            {/* Sidebar Content */}
            <aside
                className={`fixed inset-y-0 left-0 bg-white shadow-xl w-64 transform transition-transform duration-300 ease-in-out z-30 flex flex-col
        ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 lg:static lg:h-screen`}
            >
                <div className="flex items-center justify-center h-20 border-b border-gray-200">
                    <div className="flex items-center gap-2 text-indigo-600">
                        <Package size={32} />
                        <span className="text-2xl font-bold">AdminPro</span>
                    </div>
                </div>

                <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
                    {menuItems.map((item) => (
                        <NavLink
                            key={item.path}
                            to={item.path}
                            className={({ isActive }) =>
                                `flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${isActive
                                    ? 'bg-indigo-50 text-indigo-700 font-semibold shadow-sm'
                                    : 'text-gray-600 hover:bg-gray-100'
                                }`
                            }
                        >
                            {item.icon}
                            {item.name}
                        </NavLink>
                    ))}
                </nav>

                <div className="p-4 border-t border-gray-200 hidden lg:block">
                    <div className="flex items-center gap-3 px-4 py-2 text-gray-600 cursor-not-allowed">
                        <Settings size={20} />
                        <span>Settings (Demo)</span>
                    </div>
                </div>
            </aside>
        </>
    );
};

export default Sidebar;
