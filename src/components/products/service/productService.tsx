import data from "../../../assets/products.json";
import {IProduct} from "../IProduct";

export class ProductService {
    getProducts(): Promise<IProduct[]>{
        return new Promise((resolve, reject) => {
            resolve(data);
            reject("Error, problems with data");
        });
    }

    getProductById(id: number | string): Promise<IProduct> {
        return this.getProducts().then(items => {
            return items.filter(obj => obj.id === id)[0] || {};
        });
    }

    getProductsByFilter(search: string = '', category: string[] = []): Promise<IProduct[]> {
        return this.getProducts().then(items => {
            return items.filter(obj => {
                const searchTitleResult = obj.productName.toLowerCase().includes(search.toLowerCase());
                const categoriesResult = category.length > 0 ? category.includes(obj.category) : true;

                return searchTitleResult && categoriesResult;
            });
        });
    }
}
