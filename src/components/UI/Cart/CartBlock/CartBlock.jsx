import {Button, IconButton, Typography} from "@material-tailwind/react";
import {cartActions} from "../../../../redux/slices/cartSlice.js";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";

export const CartBlock = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart.cartItems);
    const totalQty = useSelector(state => state.cart.totalQuantity);
    const totalAmount = useSelector(state => state.cart.totalAmount);

    const increaseCount = (item) => {
        dispatch(cartActions.addItems(item))
    }

    const decreaseCount = (item) => {
        dispatch(cartActions.removeItems(item))
    }

    return (
        <div className="container flex flex-col mx-auto py-10">
            <Typography variant="h2" className="font-bold text-2xl uppercase my-10 mx-5 ">Cart</Typography>
            <div className="grid lg:grid-cols-[78%,20%] gap-[2%] grid-cols-1 md:grid-cols-[68%,30%] mx-5 ">
                <div className="flex flex-col">
                    {
                        cartItems && cartItems.map((item, id)=>(
                            <div key={id} className="grid lg:grid-cols-[70%,30%] grid-cols-2 text-blue-gray-900 border-t border-t-blue-gray-900 ">
                                <div className="flex flex-col py-6">
                                    <Typography variant="h3" className="font-bold md:text-xl text-sm">{item.productName}</Typography>
                                    <Typography variant="small" className="font-extralight text-sm py-3">{item.category}</Typography>
                                    <Typography variant="small" className="font-bold text-sm py-3">${item.price}</Typography>
                                </div>
                                <div className="flex flex-row py-6">
                                    <div className="flex flex-col justify-between">
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
                                    <div className="flex h-36 lg:h-44 justify-center mx-auto">
                                        <img src={item.image} alt={`product-${id}`} className="bg-cover w-auto"/>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className="flex flex-col py-6">
                    <div className="flex flex-row justify-between mb-2 text-blue-gray-900 my-10 md:my-0">
                        <Typography variant="paragraph" className="text-xl">Subtotal</Typography>
                        <Typography variant="paragraph" className="font-bold text-xl">${totalAmount}</Typography>
                    </div>
                    <Typography variant="paragraph" className=" font-extralight text-sm text-blue-gray-500 my-3">Taxes
                        and Shipping will calculate at checkout</Typography>
                    <div className="flex flex-row justify-between  font-extralight text-blue-gray-700 my-3">
                        <Typography variant="small" className="text-sm">Total Items Quantity</Typography>
                        <Typography variant="small" className="font-bold text-sm">{totalQty}</Typography>
                    </div>
                    <Link to="/checkout" className="flex flex-col">
                        <Button
                            className=" my-3 py-2 bg-blue-gray-900 text-white px-5 font-thin rounded-md shadow-none hover:shadow-none">Checkout</Button>
                    </Link>
                    <Link to="/shop" className="flex flex-col">
                        <Button
                            className="py-2 bg-blue-gray-900 text-white px-5 font-thin rounded-md shadow-none hover:shadow-none">Continue
                            Shopping</Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
