import { ProductsContainer } from './shop.styles.jsx';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { Route, Routes } from 'react-router-dom';
import CategoriesPreview from '../categories-preview/categories-preview.component'
import CategoryPreview from '../../components/category-preview/category-preview.component';
import { useContext } from 'react';
import Category from '../category/category.component';
import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils.js';

import { fetchCateogoriesAsync } from '../../store/categories/category.action.js';

const Shop = () => {
const dispatch = useDispatch();

   useEffect(() => {
      dispatch(fetchCateogoriesAsync());
  }, []);

    return (
      <Routes>
         <Route index element={<CategoriesPreview />} />
         <Route path=":category" element={<Category />} />
      </Routes>
  
   );
};



export default Shop;