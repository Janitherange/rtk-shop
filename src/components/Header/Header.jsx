import {useState, useEffect} from "react";
import {
    Navbar,
    MobileNav,
    Typography,
    Button,
    IconButton,
} from "@material-tailwind/react";
import {NavList} from "./NavList.jsx";
import {Link} from "react-router-dom";
import {NavIcons} from "./NavIcons";
import {SubMenu} from "./SubMenu";
import {CartMenu} from "./CartMenu";
import {useDispatch} from "react-redux";
import {cartActions} from "../../redux/slices/cartSlice.js";
import {authActions} from "../../redux/slices/authSlice";

export const Header = () => {
    const [openNav, setOpenNav] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false)
        );
    }, []);

    const toggleMenu = () => {
        setOpenNav(!openNav);
        dispatch(authActions.toggleMenu({
            visible: false
        }));
        dispatch(cartActions.toggleCart({
            visible: false
        }));
    }

    return (
        <Navbar
            className="mx-auto min-w-[280px] max-w-full py-2 px-4 lg:px-8 lg:py-4 bg-transparent border-transparent shadow-lg sticky top-0 z-50 rounded-none ">
            <ul className="container mx-auto flex items-center justify-between text-blue-gray-700">
                <Typography
                    as="div"
                    variant="small"
                    className="mr-4 cursor-pointer py-1.5 font-normal"
                >
                    <Link to="/home" className="flex font-bold text-blue-gray-900 items-center gap-2">
                        <img src="https://firebasestorage.googleapis.com/v0/b/rtk-shop.appspot.com/o/logo%2Feco-logo.png?alt=media&token=98bc57ba-c6d2-4a60-8116-6af114d7a764" className="h-6 w-6" alt="RTK Shop"/>
                        <span className="hidden sm:block">RTK Shop</span>
                    </Link>
                </Typography>
                <div className="hidden lg:block ">
                    <NavList/>
                </div>
                <div className="hidden lg:flex flex gap-3 relative">
                    <NavIcons/>
                    <CartMenu isMobile={false}/>
                    <SubMenu isMobile={false}/>
                </div>
                <div className="lg:hidden flex gap-3">
                    <NavIcons/>
                    <CartMenu isMobile={true}/>
                    <SubMenu isMobile={true}/>
                    <IconButton
                        variant="text"
                        className="ml-auto h-6 w-6 m-1 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent "
                        ripple={false}
                        onClick={toggleMenu}
                    >
                        {openNav ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                className="h-6 w-6"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        )}
                    </IconButton>
                </div>
            </ul>
            <MobileNav open={openNav}>
                <NavList/>
            </MobileNav>
        </Navbar>
    )
}
