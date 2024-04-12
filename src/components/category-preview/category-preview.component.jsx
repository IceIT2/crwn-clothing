import { CategoryPreviewContainer, Title, Preview } from './category-preview.styles.jsx';
import {useSelector} from 'react-redux';

import { Link } from 'react-router-dom';
import { selectCategoriesMap } from '../../store/categories/category.selector.js';

import ProductCard from '../product-card/product-card.component';
const CategoryPreview = ({ title = '', products = [] }) => {
const categoriesMap = useSelector(selectCategoriesMap);

    return (
    <CategoryPreviewContainer>
        <Title>
            <Link 
            
             className='title' to={title}>{title.toUpperCase()}
            
            </Link>
        </Title>
        <Preview>
          {
            products
            .filter((_, idx) => idx < 4) 
            .map((product) => (
            <ProductCard key={product.id} product={product}/>
            ))}
        </Preview>
    </CategoryPreviewContainer>
    )
}

export default CategoryPreview;