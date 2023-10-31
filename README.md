

## Ejemplo
```
import { ProductCard, ProductImage, ProductTitle, ProductButtons } from 'mcm-product-card';
```

```
<ProductCard
    product={product}
    initialValues={{
        count: 4,
        maxCount: 10,
    }}
>
    {
        ({ count, maxCount, isMaxCountReached, reset, increaseBy }) => (
            <>
                <ProductImage img={product.img} />
                <ProductTitle />
                <ProductButtons />
            </>
        )
    }
</ProductCard>
```