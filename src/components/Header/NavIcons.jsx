import {IconButton} from "@material-tailwind/react";
import {motion} from "framer-motion";
import {useDispatch, useSelector} from "react-redux";
import {cartActions} from "../../redux/slices/cartSlice.js";
import {authActions} from "../../redux/slices/authSlice.js";

export const NavIcons = () => {
    const dispatch = useDispatch();
    const cartTotalQty = useSelector(state => state.cart.totalQuantity);
    const visible = useSelector(state => state.auth.visible);

    const toggleMenu = () => {
        if (visible) {
            dispatch(authActions.toggleMenu(false));
        } else {

            dispatch(authActions.toggleMenu(true));
        }

        dispatch(cartActions.toggleCart({
            visible: false
        }));
    }

    const toggleCart = () => {

        dispatch(authActions.toggleMenu(false))
        dispatch(cartActions.toggleCart());
    }

    return (
        <>
            <motion.div className="relative" whileHover={{scale: 1.1}}>
                <span
                    className=" lg:inline-block absolute z-10 text-center right-0 top-0.5 rounded-full bg-blue-gray-900 h-4 w-4 text-white text-xs">2</span>
                <IconButton variant="text" size="sm"
                            className=" lg:inline-block hover:bg-transparent active:bg-transparent rounded-full"
                            ripple={true}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                         stroke="currentColor" className="w-6 h-6 text-blue-gray-700">
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"/>
                    </svg>
                </IconButton>
            </motion.div>
            <motion.div className="relative" whileHover={{scale: 1.1}} onClick={toggleCart}>
                <span
                    className="absolute  lg:inline-block z-10 text-center right-0 top-0.5 rounded-full bg-blue-gray-900 h-4 w-4 text-white text-xs">{cartTotalQty}</span>
                <IconButton variant="text" size="sm"
                            className=" lg:inline-block hover:bg-transparent active:bg-transparent rounded-full"
                            ripple={true}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                         stroke="currentColor" className="w-6 h-6 text-blue-gray-700">
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"/>
                    </svg>
                </IconButton>
            </motion.div>

            <motion.div whileHover={{scale: 1.3}}>
                <IconButton variant="text" size="sm"
                            onClick={toggleMenu}
                            className=" lg:inline-block hover:bg-transparent active:bg-transparent rounded-full"
                            ripple={true}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                         stroke="currentColor" className="w-6 h-6 text-blue-gray-700">
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"/>
                    </svg>
                </IconButton>
            </motion.div>
        </>
    )
}
