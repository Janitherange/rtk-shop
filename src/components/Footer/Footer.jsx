import {Typography} from "@material-tailwind/react";
import {EnvelopeIcon, MapPinIcon, PhoneIcon} from "@heroicons/react/24/outline/index.js";
import {Link} from "react-router-dom";

export const Footer = () => {
    return (
        <footer className=" bg-blue-gray-900 pt-10 text-white ">
            <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 sm:gap-0 mx-0 mx-0 justify-between lg:mx-auto">
                <div className="flex flex-col text-center sm:text-start sm:ml-5 ml-0 lg:ml-0">
                    <Typography variant="h3" className="lg:text-xl text-sm font-bold pb-5">RTK Shop</Typography>
                    <Typography variant="paragraph" className="lg:text-sm text-xs pr-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                        lacinia libero vel erat
                        blandit, eu efficitur felis tristique.</Typography>
                </div>
                <div className="flex flex-col text-center sm:text-start sm:mb-5 mb-0 ">
                    <Typography variant="h3" className="lg:text-xl text-sm font-bold pb-5">Top Categories</Typography>
                    <div className="justify-between flex flex-col ">
                        <Link to="/category/mobile" className="py-2 font-thin lg:text-sm text-xs" variant="paragraph">Mobile Phones</Link>
                        <Link to="/category/sofa" className="py-2 font-thin lg:text-sm text-xs" variant="paragraph">Modern Sofa</Link>
                        <Link to="/category/chair" className="py-2 font-thin lg:text-sm text-xs" variant="paragraph">Arm Chair</Link>
                        <Link to="/category/watch" className="py-2 font-thin lg:text-sm text-xs" variant="paragraph">Smart Watches</Link>
                    </div>
                </div>
                <div className="flex flex-col text-center sm:text-start sm:ml-5 ml-0 lg:ml-0">
                    <Typography variant="h3" className="lg:text-xl text-sm font-bold pb-5">Useful Links</Typography>
                    <div className="justify-between flex flex-col ">
                        <Link to="/shop" className="py-2 font-thin lg:text-sm text-xs cursor-pointer" >Shop</Link>
                        <Link to="/cart" className="py-2 font-thin lg:text-sm text-xs cursor-pointer" >Cart</Link>
                        <Link to="login" className="py-2 font-thin lg:text-sm text-xs cursor-pointer" >Login</Link>
                        <Link to="/home" className="py-2 font-thin lg:text-sm text-xs cursor-pointer" >Privacy Policy</Link>
                    </div>
                </div>
                <div className="flex flex-col text-center sm:text-start">
                    <Typography variant="h3" className="lg:text-xl text-sm font-bold pb-5">Contact</Typography>
                    <div className="justify-between flex text-center flex-col mx-auto sm:mx-0">
                        <div className="flex flex-row my-2">
                            <MapPinIcon className="lg:h-7 lg:w-7 w-5 h-5 mr-1" />
                            <Typography variant='paragraph' className=" flex font-thin lg:text-sm text-xs flex-col place-content-center">1756 Hylan Blvd</Typography>
                        </div>
                        <div className="flex flex-row my-2">
                            <EnvelopeIcon className="lg:h-6 lg:w-6 w-4 h-4 mr-2" />
                            <Typography variant='paragraph' className=" flex font-thin lg:text-sm text-xs flex-col place-content-center ">Donal@gmail.com</Typography>
                        </div>
                        <div className="flex flex-row my-2">
                            <PhoneIcon className="lg:h-6 lg:w-6 w-4 h-4 mr-2" />
                            <Typography variant='paragraph' className=" flex font-thin lg:text-sm text-xs flex-col place-content-center"> (718) 667-8075</Typography>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex mx-auto justify-center text-center pb-5 pt-10">
                <Typography variant="paragraph" className="font-extralight text-xs">Copyright 2022 Developed By Janith Eranga. All Rights Reserved.</Typography>
            </div>
        </footer>
    )
}
