import {Header} from "../Header/Header";
import {Routers} from "../../routes/routers.jsx";
import {Footer} from "../Footer/Footer";
import {ToastContainer} from "react-toastify";
import {useDispatch, useSelector} from "react-redux";
import {cartActions} from "../../redux/slices/cartSlice.js";
import {ThreeCircles} from "react-loader-spinner";
import {authActions} from "../../redux/slices/authSlice.js";
import {useAuthState} from "react-firebase-hooks/auth";
import {auth} from "../../auth/firebase.js";

export const Layout = () => {
    const cartVisible = useSelector(state => state.cart.visible);
    const authMenuVisible = useSelector(state => state.auth.visible);
    const [user, loading, error] = useAuthState(auth);
    const dispatch = useDispatch();

    const toggleAuthMenu = () => {
        dispatch(authActions.toggleMenu(false));
    }

    const toggleCartMenu = () => {
        dispatch(cartActions.toggleCart());
    }

    return (
        <div className="relative">
            <Header/>
            <ToastContainer autoClose={500}/>
            <div>
                {
                    authMenuVisible && <div className="h-full absolute bg-blue-gray-900 opacity-50 z-10 w-full cursor-pointer" onClick={toggleAuthMenu}/>
                }
                {
                    cartVisible && <div className="h-full absolute bg-blue-gray-900 opacity-50 z-10 w-full cursor-pointer" onClick={toggleCartMenu}/>
                }
                {
                    loading && (
                        <div className="h-full absolute z-10 w-full  ">
                            <div className="container mx-auto text-center flex">
                                <ThreeCircles
                                    height="100"
                                    width="100"
                                    color="white"
                                    wrapperStyle
                                    wrapperClass="mx-auto mt-40 bg-blue-gray-900 rounded-full"
                                    visible={true}
                                    ariaLabel="three-circles-rotating"
                                    outerCircleColor=""
                                    innerCircleColor=""
                                    middleCircleColor=""
                                    className=""
                                />
                            </div>
                        </div>
                    )
                }
                <Routers/>
            </div>
            <Footer/>
        </div>
    )
}
