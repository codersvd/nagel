import React, {useEffect, useRef, useState} from 'react';
import {DataScroller} from 'primereact/datascroller';
import {Button} from 'primereact/button';
import {ProductService} from './service/productService';
import {IProduct} from "./IProduct";
import "./products.css";
import Product from "./product/product";
import {InputText} from "primereact/inputtext";
import {MultiSelect} from 'primereact/multiselect';

const Products = () => {
    const [products, setProducts] = useState<IProduct[]>([]);
    const [search, setSearch] = useState<string>('');
    const [selectedCategory, setSelectedCategory] = useState<string[]>([]);

    const ds = useRef(null);
    const productService = new ProductService();
    const categories = [
        {name: 'Software Development', code: 'Software Development'},
        {name: 'Daily Business', code: 'Daily Business'},
        {name: 'Developer', code: 'Developer'},
        {name: 'Data Analytics', code: 'Data Analytics'},
        {name: 'Graphic Editors', code: 'Graphic Editors'},
        {name: 'Text Editors', code: 'Text Editors'},
        {name: 'Management Tools', code: 'Management Tools'}
    ];

    useEffect(() => {
        productService.getProducts().then((data: IProduct[]) => {
            setProducts(data);
        }).catch((error) => {
            console.error(error);
        });
    }, []);

    const itemTemplate = (data: IProduct) => {
        return (
            <Product items={data}/>
        );
    }

    // @ts-ignore
    const footer = <Button icon="pi pi-plus" label="Load" onClick={() => ds.current.load()}/>;

    const searchFunc = (searchString: string, searchCategories: string[]) => {
        setSearch(searchString);
        setSelectedCategory(searchCategories);

        productService.getProductsByFilter(searchString, searchCategories).then((data: IProduct[]) => {
            setProducts(data);
        });
    }

    return (
        <div className="datascroller-demo">
            <div className="card">
                <div className="product-search">
                    <h2>I'm looking for...</h2>
                    <div className="search-filter flex justify-content-between">
                        <span className="p-input-icon-left search-input">
                            <i className="pi pi-search"/>
                            <InputText value={search} onChange={(e) => {
                                searchFunc(e.target.value, selectedCategory);
                            }} placeholder="Search"/>
                        </span>
                        <MultiSelect value={selectedCategory} options={categories}
                                     className="filter-categories"
                                     onChange={(e) => {
                                         searchFunc(search, e.value);
                                     }} optionLabel="name" optionValue="code"
                                     placeholder="Select a Category" maxSelectedLabels={2}/>

                    </div>
                </div>
                <DataScroller ref={ds} value={products} itemTemplate={itemTemplate} rows={5}
                              loader footer={footer}
                              emptyMessage={<div className="shadow-1 no-data">No data</div>}
                />
            </div>
        </div>
    );
}

export default Products;
