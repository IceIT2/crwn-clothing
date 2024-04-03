import { useContext, useeff } from 'react';



import { CartContext } from '../../contexts/cart.context';


import  { ShoppingIcon, CartIconContainer, ItemCount } from './cart-icon.styles.jsx';
import CartItem from '../cart-item/cart-item.component';

const CartIcon = () => {
  const { cartItems, isCartOpen, setIsCartOpen } = useContext(CartContext);


  const itemCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
 

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

 return(
    <CartIconContainer onClick={toggleIsCartOpen}>
        <ShoppingIcon  className='shopping-icon'/>
        <ItemCount>{itemCount}</ItemCount>
    </CartIconContainer>
 )
}

export default CartIcon;