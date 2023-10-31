import React from "react";
import renderer from 'react-test-renderer'
import { ProductCard, ProductImage } from "../../src/components";
import { product2 } from "../data/products";


describe('Pruebas en <ProductImage />', () => {

    test('Debe de mostrar correctamente el componente', () => {

        const wrapper = renderer.create(
            <ProductImage img="http://imgdeprueba.jpg" />
        );

        expect(wrapper.toJSON()).toMatchSnapshot();

    });

    test('Debe de mostrar correctamente el componente con la imagen del producto', () => {

        const wrapper = renderer.create(
            <ProductCard product={product2}>
                {
                    () => (
                        <ProductImage />
                    )
                }
            </ProductCard>
        );

        expect(wrapper.toJSON()).toMatchSnapshot();

    });

});