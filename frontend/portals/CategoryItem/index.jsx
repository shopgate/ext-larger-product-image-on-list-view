import React from 'react';
import PropTypes from 'prop-types';
import connect from './connector';
import GridItem from '../../components/GridItem/';
import ListItem from '../../components/ListItem';

const GRID_VIEW = 'grid';
const LIST_VIEW = 'list';
/**
 * The CategoryItem component.
 * @param {Object} props The component props.
 * @return {JSX}
 */
const CategoryItem = ({ productData, viewMode }) => {
  if (viewMode === LIST_VIEW) {
    return <ListItem product={productData} />;
  }
  return <GridItem product={productData} />;
};

CategoryItem.propTypes = {
  productData: PropTypes.shape(),
  viewMode: PropTypes.string,
};

CategoryItem.defaultProps = {
  productData: {},
  viewMode: GRID_VIEW,
};

export default connect(CategoryItem);
