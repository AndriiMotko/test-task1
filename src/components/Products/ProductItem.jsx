import {
	ProductItemWrapper,
	ProductImg,
	ProductName,
	ProductInfoWrapp,
	ProductShortDescription,
	ProductCount,
    ProductMoreInfoLink
} from "../ui";

export default function ProductItem(productData) {
	const product = productData.props;

	return (
		<ProductItemWrapper>
			<ProductImg alt="product_img" src={product.imageUrl} />
			<ProductInfoWrapp>
				<ProductName>{product.name}</ProductName>
				<ProductShortDescription>
					{product.shortDescription}
				</ProductShortDescription>
				<div>
					<ProductCount>{`In stock: ${product.count}`}</ProductCount>
                    <ProductMoreInfoLink href="#">More info...</ProductMoreInfoLink>
				</div>
			</ProductInfoWrapp>
		</ProductItemWrapper>
	);
}
