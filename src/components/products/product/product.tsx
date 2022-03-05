import React, {useState} from 'react';
import {IProduct} from "../IProduct";
import {Dialog} from "primereact/dialog";
import "./product.css";
import ProductDetail from "../product-detail/product-detail";
import ProductTags from "../product-tags/product-tags";

const Product = (props: { items: IProduct; }) => {
    const data = props.items;
    const [displayBasic, setDisplayBasic] = useState(false);

    const onClick = () => {
        setDisplayBasic(true);
    }

    const onHide = () => {
        setDisplayBasic(false);
    }

    return (
        <div>
            <div className="product-item shadow-1" onClick={() => onClick()}>
                <div className="product-name-tags">
                    <div className="product-title">{data.productName}</div>
                    <ProductTags tags={data.tags}></ProductTags>
                </div>
                <div className="product-category">
                    {data.category}
                </div>
            </div>

            <Dialog header="Product Detail" visible={displayBasic} style={{width: '80vw'}} footer={<div></div>}
                    onHide={() => onHide()}>
                <ProductDetail productId={data.id}></ProductDetail>
            </Dialog>
        </div>
    );
}

export default Product
