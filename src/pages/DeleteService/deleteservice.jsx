import React from "react";
import ProductCard from "../../components/products/productcard";
import PackageCard from "../../components/packages/packagecard";

function DeletePage() {
    const handleDeletedata={
    };
    return (
        <div className="delete-data">
            <div>
            <ProductCard/>
            <PackageCard/>
            </div>
        </div>
    );
};
export default DeletePage;