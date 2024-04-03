import { CartItemContainer, ItemDetails, Name } from './cart-items.styles.jsx';

const CartItem = ({cartItem}) => {
    const { name, imageUrl, price , quantity } = cartItem;
 return(
    <CartItemContainer>
        <img  src={imageUrl} alt={`${name}`}/>
        <ItemDetails>
          <Name>{name}</Name>
        </ItemDetails>
        <span className='price'>{quantity} x ${price}</span>
    </CartItemContainer>
 )

}

export default CartItem;