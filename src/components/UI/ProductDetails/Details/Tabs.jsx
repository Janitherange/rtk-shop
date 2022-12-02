import {Typography} from "@material-tailwind/react";
import {useState} from "react";
import {Reviews} from "./Reviews";

export const Tabs = () => {
    const [description, setDescription] = useState(true);
    const [reviews, setReviews] = useState(false);

    const onSelectDescription = () => {
      setDescription(true);
      setReviews(false);
    }

    const onSelectReviews = () => {
        setDescription(false);
        setReviews(true);
    }

    return (
        <div className="flex flex-col">
            <nav className="w-56">
                <ul role="tab-list" className="flex relative bg-transparent rounded-lg p-1">
                    <li
                        className={`grid place-items-center text-center w-full h-full relative bg-transparent text-blue-gray-900 antialiased font-sans text-base  leading-relaxed select-none cursor-pointer ${description && !reviews ? "font-bold" : "font-normal"}`}
                         onClick={onSelectDescription}>Description
                    </li>
                    <li
                        className={`grid place-items-center text-center w-full h-full relative bg-transparent text-blue-gray-900 antialiased font-sans text-base leading-relaxed select-none cursor-pointer ${!description && reviews ? "font-bold" : "font-normal"}`}
                         onClick={onSelectReviews}>Reviews(2)
                    </li>
                </ul>
            </nav>
            <div>
                <div
                     className={`w-full h-max text-blue-gray-900 p-4 antialiased font-sans text-base font-light leading-relaxed ${description && !reviews ? "block" : "hidden"}`}
                     >Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Vivamus lacinia libero vel erat blandit, eu efficitur felis tristique.
                </div>
                <div
                     className={`w-full h-max text-gray-700 p-4 antialiased font-sans text-base font-light leading-relaxed ${!description && reviews ? "block" : "hidden"}`}
                     >
                    <Reviews/>
                </div>
            </div>
        </div>
    )
}
