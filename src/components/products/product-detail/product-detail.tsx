import React, {useEffect, useState} from "react";
import {IProduct} from "../IProduct";
import {ProductService} from './../service/productService';
import ProductTags from "../product-tags/product-tags";
import {Tooltip} from 'primereact/tooltip';
import "./product-detail.css";
import ProductOptions from "../product-options/product-options";

const ProductDetail = (props: { productId: string | number }) => {
    const [product, setProduct] = useState<IProduct>({} as IProduct);
    const productService = new ProductService();

    useEffect(() => {
        productService.getProductById(props.productId).then((data: IProduct) => {
            setProduct(data);
        });
    });

    const description = (desc: string[] = []) => {
        return desc.map((item, index) => {
            return <p key={index}>{item}</p>
        });
    }

    return (
        <div className="product-detail">
            <div className="product-title">
                <Tooltip target=".manufacturer"/>
                <div className="mr-2">{product.productName}</div>
                <div className="manufacturer" data-pr-tooltip="Go to Manufacturer" onClick={()=>{ window.open(product.manufacturerUrl, '_blank'); }}>
                    <i className="pi pi-id-card"></i>
                </div>
            </div>
            <ProductTags tags={product.tags}></ProductTags>
            <div className="description">{description(product.description)}</div>
            <ProductOptions option1={product.option1} option2={product.option2}></ProductOptions>
        </div>
    )
}

export default ProductDetail;
