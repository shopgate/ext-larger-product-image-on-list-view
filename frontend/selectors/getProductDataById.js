import { createSelector } from 'reselect';
import { getProductById } from '@shopgate/pwa-common-commerce/product/selectors/product';

export const getProductDataById = createSelector(
    getProductById,
    product => product.productData,
);
