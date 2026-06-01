import React, { useState, useEffect } from 'react';
import { Package, Tags, CircleDollarSign, AlertCircle } from 'lucide-react';
import DashboardCard from '../components/DashboardCard';
import { getDashboardStats } from '../utils/productStorage';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    const [stats, setStats] = useState({
        totalProducts: 0,
        totalCategories: 0,
        totalValue: 0,
        recentProducts: []
    });

    useEffect(() => {
        setStats(getDashboardStats());
    }, []);

    return (
        <div className="max-w-7xl mx-auto space-y-6 md:space-y-8 animate-fade-in-up">
            <div>
                <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Dashboard Overview</h1>
                <p className="text-gray-500 mt-1">Welcome back. Here's what's happening with your store today.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <DashboardCard
                    title="Total Products"
                    value={stats.totalProducts}
                    icon={Package}
                    colorClass="bg-indigo-500"
                    subtitle="Total items in inventory"
                />
                <DashboardCard
                    title="Total Categories"
                    value={stats.totalCategories}
                    icon={Tags}
                    colorClass="bg-purple-500"
                    subtitle="Distinct product categories"
                />
                <DashboardCard
                    title="Total Inventory Value"
                    value={`$${stats.totalValue.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`}
                    icon={CircleDollarSign}
                    colorClass="bg-emerald-500"
                    subtitle="Based on current stock & price"
                />
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden mt-8">
                <div className="px-6 py-5 border-b border-gray-100 flex justify-between items-center">
                    <h2 className="text-lg font-semibold text-gray-800">Recently Added Products</h2>
                    <Link to="/products" className="text-sm font-medium text-indigo-600 hover:text-indigo-800 transition-colors">
                        View All
                    </Link>
                </div>

                {stats.recentProducts.length > 0 ? (
                    <div className="divide-y divide-gray-100">
                        {stats.recentProducts.map(product => (
                            <div key={product.id} className="p-6 flex items-center justify-between hover:bg-gray-50 transition-colors">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded bg-gray-100 flex items-center justify-center overflow-hidden flex-shrink-0">
                                        {product.imageUrl ? (
                                            <img src={product.imageUrl} alt={product.name} className="w-full h-full object-cover" />
                                        ) : (
                                            <Package size={20} className="text-gray-400" />
                                        )}
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-gray-900">{product.name}</h4>
                                        <div className="mt-1 flex items-center gap-2">
                                            <span className="bg-indigo-50 text-indigo-700 px-2 py-0.5 rounded text-xs font-medium">{product.category}</span>
                                            <span className="text-xs text-gray-500">Stock: {product.stockQuantity}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-right font-medium text-gray-900">
                                    ${parseFloat(product.price).toFixed(2)}
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="p-12 text-center text-gray-500 flex flex-col items-center justify-center">
                        <div className="bg-gray-50 p-4 rounded-full mb-4">
                            <AlertCircle className="w-8 h-8 text-gray-400" />
                        </div>
                        <p className="font-semibold text-gray-700">No products added yet</p>
                        <p className="text-sm mt-1 mb-6">Start by adding your first product to the inventory.</p>
                        <Link to="/add-product" className="px-5 py-2.5 bg-indigo-600 text-white text-sm font-medium rounded-lg hover:bg-indigo-700 transition-colors focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 shadow-sm">
                            Add First Product
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Dashboard;
