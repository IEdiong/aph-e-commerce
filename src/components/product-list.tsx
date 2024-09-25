import * as ProductCard from './product-card';
import Data from '@/data/data.json';

const ProductList = ({ category }: { category: string }) => {
  const PRODUCTS = Data.filter((data) => data.category === category)
    .reverse()
    .map((data, idx) => {
      const direction = (
        idx % 2 === 0 ? 'left-to-right' : 'right-to-left'
      ) as ProductCard.IDirection;
      return { ...data, direction };
    });

  return PRODUCTS.map((product) => (
    <ProductCard.Root
      key={product.id}
      product={product}
      canAddToCart={false}
      direction={product.direction}
    >
      <ProductCard.Image
        src={product.categoryImage.desktop}
        alt={product.name}
      />
      <ProductCard.Content>
        <ProductCard.New />
        <ProductCard.CardHeading>{product.name}</ProductCard.CardHeading>
        <ProductCard.Description>{product.description}</ProductCard.Description>
        <ProductCard.Price>{product.price}</ProductCard.Price>
        <ProductCard.Actions>
          <ProductCard.CardCounter />
          <ProductCard.CardButton>Add to cart</ProductCard.CardButton>
          <ProductCard.CardLink to={`/headphones/${product.id}`}>
            See product
          </ProductCard.CardLink>
        </ProductCard.Actions>
      </ProductCard.Content>
    </ProductCard.Root>
  ));
};

export default ProductList;
