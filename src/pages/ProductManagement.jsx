import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import ProductForm from '../components/ProductForm';
import { saveProduct, updateProduct, getProductById } from '../utils/productStorage';

const ProductManagement = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [initialData, setInitialData] = useState(null);
    const [loading, setLoading] = useState(id ? true : false);

    useEffect(() => {
        // If editing, load the existing product data
        if (id) {
            const product = getProductById(id);
            if (product) {
                setInitialData(product);
            } else {
                alert("Product not found! Returning to product list.");
                navigate('/products');
            }
            setLoading(false);
        }
    }, [id, navigate]);

    const handleSubmit = (productData) => {
        if (id) {
            updateProduct(id, productData);
        } else {
            saveProduct(productData);
        }
        navigate('/products');
    };

    const handleCancel = () => {
        navigate('/products');
    };

    if (loading) {
        return (
            <div className="flex justify-center items-center h-64">
                <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-indigo-600"></div>
            </div>
        );
    }

    return (
        <div className="max-w-4xl mx-auto space-y-6 animate-fade-in-up">
            <div>
                <button
                    onClick={handleCancel}
                    className="flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-indigo-700 transition-colors mb-4 focus:outline-none w-fit"
                >
                    <ArrowLeft size={16} />
                    <span>Back to Products List</span>
                </button>
                <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
                    {id ? 'Edit Product Details' : 'Create New Product'}
                </h1>
            </div>

            <ProductForm
                initialData={initialData}
                onSubmit={handleSubmit}
                onCancel={handleCancel}
            />
        </div>
    );
};

export default ProductManagement;
