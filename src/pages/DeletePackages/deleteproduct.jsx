import React, { useState } from "react";

function DeleteProduct() {
    const [products, setProducts] = useState([]);
    // state,functions handling pro delete

    const handleDeleteProduct = (productId) => {
        
    };
    const headerStyle = {
        fontSize: '24px',
        color: 'blue',
    };

    return (
        <div>
            <h1 style={headerStyle}>Delete Product</h1>
            {/*list of product to delete*/}
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        {product.name}
                        <button onClick={() => handleDeleteProduct(product.id)}>
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default DeleteProduct;
