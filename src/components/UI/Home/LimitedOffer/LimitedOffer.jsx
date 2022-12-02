import {Button, Typography} from "@material-tailwind/react";
import {Timer} from "./Timer.jsx";
import {useNavigate} from "react-router-dom";

export const LimitedOffer = () => {
    const navigate = useNavigate();

    const onClickButton = () => {
        navigate("/shop");
    }
    return (
        <>
            <div className="container flex flex-row mx-auto justify-between lg:px-0 px-5">
                <div className="flex flex-col text-white ">
                    <Typography variant="paragraph" className="text-xs font-thin py-3" >
                        Limited Offers
                    </Typography>
                    <Typography variant="h3" className="text-xl" >
                        Quality Armchair
                    </Typography>
                    <div className="text-2xl flex text-center">
                        <Timer/>
                    </div>
                    <div>
                        <Button onClick={onClickButton} className="my-3 md:mb-6 py-2 bg-white text-blue-gray-900 px-5 font-thin rounded-md shadow-none hover:shadow-none">Shop Now</Button>
                    </div>
                </div>
                <div className="flex flex-col text-left justify-end">
                    <img src="https://firebasestorage.googleapis.com/v0/b/rtk-shop.appspot.com/o/background-images%2Fcounter-timer-img.png?alt=media&token=7715ea4d-8f6c-421a-8061-b386600a7e7f" alt="offer-img" className="lg:h-56 lg:w-60 w-52 h-40"/>
                </div>
            </div>
        </>
    )
}
