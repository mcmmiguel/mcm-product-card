import { useState, useEffect, useRef } from 'react';
import { InitialValuesProps, ProductProps, onChangeArgs } from '../interfaces/interfaces';

interface useProductProps {
    product: ProductProps;
    onChange?: (args: onChangeArgs) => void;
    value?: number;
    initialValues?: InitialValuesProps;
}

export const useProduct = ({ onChange, product, value = 0, initialValues }: useProductProps) => {

    const [counter, setCounter] = useState<number>(initialValues?.count || value);

    const isMounted = useRef(false);
    console.log(initialValues?.count);

    const increaseBy = (value: number) => {

        let newValue = Math.max(counter + value, 0);

        if (initialValues?.maxCount) {
            newValue = Math.min(newValue, initialValues.maxCount);
        }

        setCounter(newValue);

        onChange && onChange({ count: newValue, product });

    };

    const reset = () => {
        setCounter(initialValues?.count || value);
    };

    useEffect(() => {
        if (!isMounted.current) return;
        setCounter(value);
    }, [value]);

    useEffect(() => {
        isMounted.current = true;

        return () => {
            isMounted.current = false;
        }
    }, []);


    return {
        counter,
        maxCount: initialValues?.maxCount,
        isMaxCountReached: !!initialValues?.maxCount && initialValues.maxCount === counter,

        increaseBy,
        reset,
    };
};
