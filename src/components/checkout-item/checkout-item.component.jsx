import { CheckoutItemContainer, ImageContainer, Quantity, Value, Arrow, NamePrice, RemoveButton } from './checkout-item.styles.jsx';

import { CartContext } from '../../contexts/cart.context';

import { useContext } from 'react';

const CheckoutItem = ( {cartItem} ) => {
    const { name, imageUrl, price, quantity } = cartItem;

    const { clearItemFromCart, addItemToCart, removeItemToCart } = useContext(CartContext);

    const clearItemHandler = () => clearItemFromCart(cartItem);
    const addItemHandler = () => addItemToCart(cartItem);
    const removeItemHandler = () => removeItemToCart(cartItem);

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