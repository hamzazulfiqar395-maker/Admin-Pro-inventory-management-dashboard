const STORAGE_KEY = 'admin_dashboard_products';

export const getProducts = () => {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
};

export const getProductById = (id) => {
    const products = getProducts();
    return products.find(p => p.id === id);
};

export const saveProduct = (product) => {
    const products = getProducts();
    const newProduct = { ...product, id: Date.now().toString() };
    products.push(newProduct);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(products));
    return newProduct;
};

export const updateProduct = (id, updatedProduct) => {
    const products = getProducts();
    const index = products.findIndex(p => p.id === id);
    if (index !== -1) {
        products[index] = { ...updatedProduct, id };
        localStorage.setItem(STORAGE_KEY, JSON.stringify(products));
        return products[index];
    }
    return null;
};

export const deleteProduct = (id) => {
    const products = getProducts();
    const filteredProducts = products.filter(p => p.id !== id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(filteredProducts));
};

export const getDashboardStats = () => {
    const products = getProducts();
    const totalProducts = products.length;

    // Calculate unique categories count
    const categories = new Set(products.map(p => p.category).filter(Boolean));
    const totalCategories = categories.size;

    // Calculate total inventory value (price * stock)
    const totalValue = products.reduce((sum, p) => {
        const price = parseFloat(p.price) || 0;
        const stock = parseInt(p.stockQuantity, 10) || 0;
        return sum + (price * stock);
    }, 0);

    // Get recently added products (last 5, assuming ID is timestamp based)
    const recentProducts = [...products].sort((a, b) => parseInt(b.id) - parseInt(a.id)).slice(0, 5);

    return {
        totalProducts,
        totalCategories,
        totalValue,
        recentProducts
    };
};
