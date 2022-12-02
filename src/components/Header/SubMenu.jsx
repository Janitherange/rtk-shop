import {Typography} from "@material-tailwind/react";
import {Link} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import {authActions, logout} from "../../redux/slices/authSlice.js";
import {useAuthState} from "react-firebase-hooks/auth";
import {auth} from "../../auth/firebase.js";

export const SubMenu = ({isMobile}) => {
    const visible = useSelector(state => state.auth.visible);
    const [user, loading, error] = useAuthState(auth);
    const dispatch = useDispatch();


    const toggleAuthMenu = () => {

        if (visible){
            dispatch(authActions.toggleMenu(false));
        }else {
            dispatch(authActions.toggleMenu(true));
        }
    }

    const logoutUser = () => {
        dispatch(logout());
        dispatch(authActions.toggleMenu(false));
    }
    // className={`absolute flex-col gap-1 flex z-50 ${isMobile ? "-bottom-[4rem] -right-0" : !isMobile && !itemVisibility ? "-bottom-[5rem] -right-9" : isMobile && itemVisibility ? "-bottom-[3.2rem] -right-9" : "-bottom-[2.2rem] -right-0"

    return (
        <>
            {
                visible && (
                    <nav
                        className={`absolute flex-col gap-1 flex z-50 ${isMobile && !user ? "-bottom-[4rem] -right-0" : !isMobile && !user ? "-bottom-[5rem] -right-9" : !isMobile && user ? "-bottom-[3.2rem] -right-9" : "-bottom-[2.2rem] -right-0" } bg-[#fdefe6]`}>
                        <Link to="/login" className={ !user  ? "block" : "hidden"} onClick={toggleAuthMenu}>
                            <div
                                className="flex flex-row py-1 px-5 text-blue-gray-900 hover:bg-blue-gray-900 hover:text-white hover:cursor-pointer">
                                <Typography variant="small">Sign In</Typography>
                            </div>
                        </Link>
                        <Link to="/signup" className={ !user ? "block" : "hidden"} onClick={toggleAuthMenu}>
                            <div
                                className="flex flex-row px-5 py-1 hover:bg-blue-gray-900 hover:text-white hover:cursor-pointer">
                                <Typography variant="small">Sign Up</Typography>
                            </div>
                        </Link>
                        <Link to="/home" className={ user ? "block" : "hidden"} onClick={logoutUser} >
                            <div
                                className="flex flex-row pb-2 px-5 py-1 hover:bg-blue-gray-900 hover:text-white hover:cursor-pointer">
                                <Typography variant="small">Logout</Typography>
                            </div>
                        </Link>
                    </nav>
                )
            }
        </>
    )
}
