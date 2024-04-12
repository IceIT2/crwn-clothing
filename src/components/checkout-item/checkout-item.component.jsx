import { CheckoutItemContainer, ImageContainer, Quantity, Value, Arrow, NamePrice, RemoveButton } from './checkout-item.styles.jsx';

import { useSelector, useDispatch } from 'react-redux';
import { selectCartItems } from '../../store/cart/cart.selector.js';
import { addItemToCart, clearItemFromCart, removeItemFromCart } from '../../store/cart/cart.action.js';

const CheckoutItem = ( {cartItem} ) => {
    const { name, imageUrl, price, quantity } = cartItem;
    const cartItems = useSelector(selectCartItems);
    const dispatch = useDispatch();

    const clearItemHandler = () => dispatch(clearItemFromCart(cartItems, cartItem));
    const addItemHandler = () => dispatch(addItemToCart(cartItems, cartItem));
    const removeItemHandler = () => dispatch(removeItemFromCart(cartItems, cartItem));

    return(

        <CheckoutItemContainer>
            <ImageContainer>
                <img src={imageUrl} alt={`${name}`}/>
            </ImageContainer>
            <NamePrice> {name} </NamePrice>
            <Quantity>
                <Arrow onClick={removeItemHandler}>
                 &#10094;
                </Arrow>
                <Value>
                {quantity} 
                </Value>
               <div className='arrow' onClick={addItemHandler}>
                 &#10095;
                </div>
                </Quantity>

            <NamePrice> {price} </NamePrice>
            <RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>
        </CheckoutItemContainer>
    )
}

export default CheckoutItem;