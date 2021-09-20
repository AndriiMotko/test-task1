import { ProductsWrapper } from "../ui";
import ProductItem from "./ProductItem";
import { Sort, SortTitle } from "../ui";
import { useState } from "react";

export default function Products() {
	function dataFromLocalStorage() {
		const data = [];
		for (let i = 0; i < localStorage.length; i++) {
			let key = localStorage.key(i);
			data.push(JSON.parse(localStorage.getItem(key)));
		}
		return data;
	}
	const data = dataFromLocalStorage();

    const [productsToShow, setProductsToShow] = useState(data);

    const sortByNameHandler = (e) => {
        const sortedProducts = [...data];   
        sortedProducts.sort((a, b) => { return a.product.name - b.product.name});
        setProductsToShow(sortedProducts);
    }

	return (
		<ProductsWrapper>
			<Sort>
				<SortTitle>Sort</SortTitle>
				<div>
					<div>
						<input type="checkbox" onChange={sortByNameHandler}/>
						<label>by name</label>
					</div>
				</div>
			</Sort>
			{productsToShow.map((item, index) => {
				return <ProductItem props={item.product} key={index} />;
			})}
		</ProductsWrapper>
	);
}
