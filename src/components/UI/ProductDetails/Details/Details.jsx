import productImg from "../../../../assets/images/single-sofa-02.jpg"
import {Button,  Typography,} from "@material-tailwind/react";
import { Rating} from "@mui/material";
import {Tabs} from  "./Tabs.jsx"

export const Details = () => {
    return (
        <div className="container mx-auto  text-blue-gray-900">
            <div className="flex px-5 md:px-0 md:flex-row flex-col lg:h-full">
                <div className="flex flex-row pt-5 lg:pt-20 justify-center  md:w-1/2">
                    <img src={productImg} alt="single sofa" className="h-[30%] w-[50%] md:w-auto text-center h-full md:h-auto lg:h-[25rem]"/>
                </div>
                <div className="flex flex-row pt-5 lg:pt-20 md:w-1/2 ">
                    <div className="grid grid-rows-[20%,80%]">
                        <div className="flex py-3">
                            <div className="flex flex-col">
                                <Typography variant="h3">Faux Velvet Sofa</Typography>
                                <div className="flex justify-between py-3">
                                    <Rating name="rating" value={4.5} precision={0.5}/>
                                    <div className="flex">
                                        (<span className="text-[#faaf00] pr-2">4.5</span>Ratings)
                                    </div>
                                </div>
                                <div className="flex py-3 justify-between">
                                    <Typography variant="paragraph" className="font-bold text-xl">$168</Typography>
                                    <Typography variant="small" className="flex text-xl">Category:sofa</Typography>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col lg:py-20 pt-20">
                            <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia libero
                                vel erat blandit, eu efficitur felis tristique.</Typography>
                            <div>
                                <Button
                                    className="my-3 md:mb-6 py-2 bg-blue-gray-900 text-white px-5 font-thin rounded-md shadow-none hover:shadow-none">Add
                                    TO Cart</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" flex flex-row">
                <div className="flex lg:py-10 pb-5  flex-row">
                    <Tabs/>
                </div>
            </div>
        </div>
    )
}
