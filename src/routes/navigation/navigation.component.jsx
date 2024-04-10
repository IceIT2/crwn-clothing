import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";

import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

import { ReactComponent as CrownLogo } from '../../assets/crown.svg'
import { UserContext } from "../../contexts/user.context";
import { selectIsCartOepn } from '../../store/cart/cart.selector.js';
import { signOutUser } from "../../utils/firebase/firebase.utils";

import { NavigationContainer, NavLink, NavLinks, LogoContainer } from './navigation.styles.jsx'
import { signOut } from "firebase/auth";

const Navigation = () => {
  const currentUser = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);


    return (
      <Fragment>
       <NavigationContainer>
        <LogoContainer to='/'>
        <CrownLogo className="logo" />
        </LogoContainer>
        <NavLinks>
          <NavLink className="nav-link" to='/shop'>
            SHOP
          </NavLink>
          {
            currentUser ? (
              <NavLink as='span' onClick={signOutUser}>SIGN OUT</NavLink>
            ) : (
              <NavLink to='/auth'>
            SIGN IN
          </NavLink>
            )}
         <CartIcon />
         </NavLinks>
       
        {isCartOpen && <CartDropdown />} 
       </NavigationContainer>
       <Outlet />
       </Fragment>
    )
  }

  export default Navigation;