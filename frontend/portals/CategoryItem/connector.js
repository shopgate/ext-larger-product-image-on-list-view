import { connect } from 'react-redux';
import { getProductDataById } from '../../selectors/getProductDataById';

/**
 * Maps the contents of the state to the component props.
 * @param {Object} state The current application state.
 * @param {string} productId Given product.
 * @return {Object} The extended component props.
 */
const mapStateToProps = (state, { productId }) => (
  {
    productData: getProductDataById(state, productId),
    viewMode: (state.ui && state.ui.categoryPage) ? state.ui.categoryPage.viewMode : '',
  }
);

export default connect(mapStateToProps);
