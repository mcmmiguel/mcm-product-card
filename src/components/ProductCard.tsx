import React from 'react';
import { createContext, CSSProperties } from 'react';
import { useProduct } from '../hooks/useProduct';
import { InitialValuesProps, onChangeArgs, ProductCardHandlersProps, ProductContextProps, ProductProps } from '../interfaces/interfaces';
import styles from '../styles/styles.module.css';

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;


export interface ProductCardProps {
    children?: (args: ProductCardHandlersProps) => JSX.Element;
    product: ProductProps;
    className?: string;
    style?: CSSProperties;
    onChange?: (args: onChangeArgs) => void;
    value?: number;
    initialValues?: InitialValuesProps;
};

export const ProductCard = ({ children, product, className, style, onChange, value, initialValues }: ProductCardProps) => {

    const { counter, maxCount, increaseBy, isMaxCountReached, reset } = useProduct({ onChange, product, value, initialValues });

    return (
        <Provider value={{
            counter,
            increaseBy,
            product,
            maxCount,
        }}>

            <div className={`${styles.productCard} ${className}`} style={style}>
                {children ? children({
                    count: counter,
                    isMaxCountReached,
                    maxCount: initialValues?.maxCount,
                    product,

                    increaseBy,
                    reset,
                }) : null}
                {/* <ProductImage img={product.img} />
                <ProductTitle title={product.title} />
                <ProductButtons counter={counter} increaseBy={increaseBy} /> */}
            </div>
        </Provider>
    );
};