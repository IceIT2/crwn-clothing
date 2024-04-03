import { ProductsContainer } from './shop.styles.jsx';

import { Route, Routes } from 'react-router-dom';
import CategoriesPreview from '../categories-preview/categories-preview.component'
import CategoryPreview from '../../components/category-preview/category-preview.component';
import { useContext } from 'react';
import { CategoriesContext } from '../../contexts/categories.context';
import Category from '../category/category.component';


const Shop = () => {
    return (
  <Routes>
     <Route index element={<CategoriesPreview />} />
     <Route path=":category" element={<Category />} />
  </Routes>
 );
};



export default Shop;