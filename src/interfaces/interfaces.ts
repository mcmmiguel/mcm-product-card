import { ProductButtonsProps } from '../components/ProductButtons';
import { ProductCardProps } from '../components/ProductCard';
import { ProductImageProps } from '../components/ProductImage';
import { ProductTitleProps } from '../components/ProductTitle';
export interface ProductProps {
    id: string;
    title: string;
    img?: string;
}

export interface ProductContextProps {
    counter: number;
    maxCount?: number;
    product: ProductProps;
    increaseBy: (value: number) => void;
};

export interface ProductCardHOCProps {
    ({ children, product }: ProductCardProps): JSX.Element;
    Image: (Props: ProductImageProps) => JSX.Element;
    Title: (Props: ProductTitleProps) => JSX.Element; //Este y el de abajo son dos técnicas para hacer lo mismo
    Buttons: ({ className }: ProductButtonsProps) => JSX.Element;
}

export interface onChangeArgs {
    product: ProductProps,
    count: number;
}

export interface ProductInCartProps extends ProductProps {
    count: number;
}

export interface InitialValuesProps {
    count?: number;
    maxCount?: number;
}

export interface ProductCardHandlersProps {
    count: number;
    isMaxCountReached: boolean;
    maxCount?: number;
    product: ProductProps;

    increaseBy: (value: number) => void;
    reset: () => void;
}