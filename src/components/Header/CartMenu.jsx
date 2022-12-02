import {Button, IconButton, Typography} from "@material-tailwind/react";
import product1 from "../../assets/images/watch-01.jpg"
import {Link} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import {cartActions} from "../../redux/slices/cartSlice.js";

export const CartMenu = ({isMobile}) => {
    const visible = useSelector(state => state.cart.visible);

    const dispatch = useDispatch();
    const cartTotalQty = useSelector(state => state.cart.totalQuantity);
    const cartItems = useSelector(state => state.cart.cartItems);
    const totalAmount = useSelector(state => state.cart.totalAmount);

    const toggleCart = () => {
        dispatch(cartActions.toggleCart());
    }

    const increaseCount = (item) => {
        dispatch(cartActions.addItems(item))
    }

    const decreaseCount = (item) => {
      dispatch(cartActions.removeItems(item))
    }

  return(
      visible && (
          <div className={` absolute overflow-y-auto flex p-2 flex-col z-30 sm:w-[25rem] w-full max-h-[25rem] ${isMobile ? "top-[3.4rem] right-0" : "top-[3.25rem] right-9"} bg-white`}>
              <div className="flex flex-row pt-2 text-start pb-1 px-5 ">
                  <div className="flex flex-row text-blue-gray-900">
                      <Typography variant="small" className="font-bold">My Cart</Typography>,
                      <Typography variant="small" className="pl-2">{cartTotalQty}</Typography>
                  </div>
              </div>
              {
                  cartItems && cartItems.map((item, id) =>(
                      <div className="px-5 py-3" key={id}>
                          <div className="grid grid-cols-2  text-blue-gray-900">
                              <div className="flex flex-col justify-between gap-3 pr-2">
                                  <div>
                                      <Typography variant="small" className="text-xl">{item.productName}</Typography>
                                      <Typography variant="small">{item.category}</Typography>
                                  </div>
                                  <Typography variant="small" className="font-bold text-xl">${item.price}</Typography>
                              </div>
                              <div className="flex flex-row">
                                  <div className="flex flex-col justify-between mr-4">
                                      <IconButton
                                          variant="outlined"
                                          size="sm"
                                          onClick={() => increaseCount(item)}
                                          className="border-blue-gray-900 focus:ring-0 text-blue-gray-900 lg:inline-block hover:bg-transparent active:bg-transparent rounded-sm">
                                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                               stroke="currentColor" className="w-6 h-6">
                                              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6"/>
                                          </svg>
                                      </IconButton>
                                      <Typography variant="small" className="font-bold text-center">{item.quantity}</Typography>
                                      <IconButton
                                          variant="outlined"
                                          size="sm"
                                          onClick={() => decreaseCount(item)}
                                          className="border-blue-gray-900 focus:ring-0 text-blue-gray-900 lg:inline-block hover:bg-transparent active:bg-transparent rounded-sm">
                                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                               stroke="currentColor" className="w-6 h-6">
                                              <path strokeLinecap="round" strokeLinejoin="round" d="M18 12H6"/>
                                          </svg>
                                      </IconButton>
                                  </div>
                                  <div className="flex flex-col justify-center">
                                      <img src={item.image} alt="product"/>
                                  </div>
                              </div>
                          </div>
                      </div>
                  ))
              }
              <div className="px-5 pt-5 grid grid-cols-2 gap-5 text-blue-gray-900">
                <Typography variant="small" className="text-xl font-bold">Total Amount</Typography>
                <Typography variant="small" className="text-xl font-bold text-end">${totalAmount}</Typography>
              </div>
              <div className="grid grid-cols-2 gap-5 mt-5 mx-5">
                  <Link to="/cart" className="flex flex-col" onClick={toggleCart}>
                      <Button variant="outlined" className="my-3 py-2 bg-white text-blue-gray-900 border-blue-gray-900 px-5 font-thin rounded-md shadow-none hover:shadow-none">View Cart</Button>
                  </Link>
                  <Link to="/checkout" className="flex flex-col" onClick={toggleCart}>
                      <Button className="my-3 py-2 bg-blue-gray-900 text-white px-5 font-thin rounded-md shadow-none hover:shadow-none">Checkout</Button>
                  </Link>
              </div>
          </div>
      )
  )
}
