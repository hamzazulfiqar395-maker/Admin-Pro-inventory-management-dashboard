import React from 'react';

const DashboardCard = ({ title, value, icon: Icon, colorClass, subtitle }) => {
    return (
        <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="p-6">
                <div className="flex items-center justify-between">
                    <div>
                        <p className="text-sm font-medium text-gray-500 mb-1">{title}</p>
                        <h3 className="text-3xl font-bold text-gray-800">{value}</h3>
                    </div>
                    <div className={`p-4 rounded-full ${colorClass}`}>
                        <Icon size={28} className="text-white" />
                    </div>
                </div>
                {subtitle && (
                    <div className="mt-4 text-sm text-gray-600">
                        {subtitle}
                    </div>
                )}
            </div>
        </div>
    );
};

export default DashboardCard;
