import React from 'react';
import { Pencil, Trash2, Image as ImageIcon } from 'lucide-react';

const ProductTable = ({ products, onEdit, onDelete }) => {
    if (!products || products.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center p-8 text-gray-500 bg-white rounded-lg shadow-sm border border-gray-100">
                <p className="text-lg font-medium">No products found</p>
                <p className="text-sm">Add some products to get started.</p>
            </div>
        );
    }

    return (
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-gray-50 border-b border-gray-200 text-gray-600 text-sm uppercase tracking-wider">
                            <th className="px-6 py-4 font-semibold">Image</th>
                            <th className="px-6 py-4 font-semibold">Product Name</th>
                            <th className="px-6 py-4 font-semibold">Category</th>
                            <th className="px-6 py-4 font-semibold text-right">Price</th>
                            <th className="px-6 py-4 font-semibold text-right">Stock</th>
                            <th className="px-6 py-4 font-semibold text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {products.map((product) => (
                            <tr key={product.id} className="hover:bg-gray-50 transition-colors group">
                                <td className="px-6 py-4">
                                    {product.imageUrl ? (
                                        <img
                                            src={product.imageUrl}
                                            alt={product.name}
                                            className="w-12 h-12 rounded bg-gray-100 object-cover"
                                        />
                                    ) : (
                                        <div className="w-12 h-12 rounded bg-gray-100 flex items-center justify-center text-gray-400">
                                            <ImageIcon size={20} />
                                        </div>
                                    )}
                                </td>
                                <td className="px-6 py-4">
                                    <div className="font-medium text-gray-800">{product.name}</div>
                                    {product.description && (
                                        <div className="text-sm text-gray-500 truncate max-w-xs">{product.description}</div>
                                    )}
                                </td>
                                <td className="px-6 py-4">
                                    <span className="px-3 py-1 bg-indigo-50 text-indigo-700 text-xs font-medium rounded-full">
                                        {product.category || 'Uncategorized'}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-right font-medium text-gray-800">
                                    ${parseFloat(product.price).toFixed(2)}
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <span className={`font-medium ${product.stockQuantity > 10 ? 'text-green-600' : product.stockQuantity > 0 ? 'text-yellow-600' : 'text-red-600'}`}>
                                        {product.stockQuantity}
                                    </span>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center justify-center gap-2">
                                        <button
                                            onClick={() => onEdit(product)}
                                            className="p-2 text-blue-600 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1"
                                            title="Edit"
                                        >
                                            <Pencil size={18} />
                                        </button>
                                        <button
                                            onClick={() => onDelete(product.id)}
                                            className="p-2 text-red-600 bg-red-50 hover:bg-red-100 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-1"
                                            title="Delete"
                                        >
                                            <Trash2 size={18} />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ProductTable;
