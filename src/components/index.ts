import { ProductCardHOCProps } from '../interfaces/interfaces';

// export { ProductCard } from './ProductCard';
import { ProductCard as ProductCardHOC } from './ProductCard';
import { ProductButtons } from './ProductButtons';
import { ProductImage } from './ProductImage';
import { ProductTitle } from './ProductTitle';

export { ProductImage } from './ProductImage';
export { ProductTitle } from './ProductTitle';
export { ProductButtons } from './ProductButtons';

export const ProductCard: ProductCardHOCProps = Object.assign(ProductCardHOC, {
    Image: ProductImage,
    Title: ProductTitle,
    Buttons: ProductButtons,
})