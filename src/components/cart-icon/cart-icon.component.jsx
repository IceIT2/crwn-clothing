import { useContext, useeff } from 'react';

import { selectCartCount, selectIsCartOpen } from '../../store/cart/cart.selector.js';
import { setIsCartOpen } from '../../store/cart/cart.action.js';

import { useDispatch, useSelector } from 'react-redux';

import  { ShoppingIcon, CartIconContainer, ItemCount } from './cart-icon.styles.jsx';
import CartItem from '../cart-item/cart-item.component';

const CartIcon = () => {
const dispatch = useDispatch();

const cartCount = useSelector(selectCartCount);
const isCartOpen = useSelector(selectIsCartOpen);

  const toggleIsCartOpen = () => dispatch (setIsCartOpen(!isCartOpen));

 return(
    <CartIconContainer onClick={toggleIsCartOpen}>
        <ShoppingIcon  className='shopping-icon'/>
        <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
 )
}

export default CartIcon;