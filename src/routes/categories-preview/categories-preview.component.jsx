import { useContext, Fragment } from 'react';
import ProductCard from '../../components/product-card/product-card.component';
import CategoryPreview from '../../components/category-preview/category-preview.component';
import { selectCategoriesMap, selectIsCategoriesisLoading } from '../../store/categories/category.selector';
import { useSelector } from 'react-redux';
import Spinner from '../../components/spinner/spinner.component';


const CategoriesPreview = () => {
 const categoriesMap = useSelector(selectCategoriesMap);
 const isLoading = useSelector(selectIsCategoriesisLoading);
  return(
    <Fragment> 
        { isLoading ? <Spinner /> :
        (Object.keys(categoriesMap).map((title) => {
         const products = categoriesMap[title];
         return ( <CategoryPreview key={title} title={title} products={products} /> )
        }))
        }
    </Fragment>
  );
};


export default CategoriesPreview;