import * as ProductCard from '@/components/product-card';

const Card = ({
  product,
  canAddToCart,
}: {
  product: any;
  canAddToCart: boolean;
}) => {
  return (
    <ProductCard.Root product={product} canAddToCart={canAddToCart}>
      <ProductCard.Image src={product.image.desktop} alt={product.name} />
      <ProductCard.Content>
        <ProductCard.New />
        <ProductCard.CardHeading>{product.name}</ProductCard.CardHeading>
        <ProductCard.Description>{product.description}</ProductCard.Description>
        <ProductCard.Price>{product.price}</ProductCard.Price>
        <ProductCard.Actions>
          <ProductCard.CardCounter />
          <ProductCard.CardButton>Add to cart</ProductCard.CardButton>
        </ProductCard.Actions>
      </ProductCard.Content>
    </ProductCard.Root>
  );
};

export default Card;
