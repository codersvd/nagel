import React from "react";
import "./product-tags.css";

const ProductTags = (props: { tags: string[] }) => {
    let listTags = <div></div>;
    const listItems = (items: string[] = []) => {
        return items.map((item, index) =>
            <li key={index}>{item}</li>
        );
    }

    if(props.tags && props.tags.length > 0){
        listTags = <ul className="product-tags">{listItems(props.tags)}</ul>;
    }

    return listTags;
}

export default ProductTags;
