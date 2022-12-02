import {Typography} from "@material-tailwind/react";
import { NavLink} from "react-router-dom";

export const NavList = () => {
    const items = [
        {
            path: "/home",
            display: "Home"
        },
        {
            path: "/shop",
            display: "Shop"
        },
        {
            path: "/cart",
            display: "Cart"
        }
    ]

    return (
        <div className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6" >
            {
                items.map((item, id)=>(
                    <Typography
                        key={id}
                        as="li"
                        variant="small"
                        className="p-1 font-normal"
                    >
                        <NavLink to={item.path}
                                 className={({isActive}) => isActive ? "flex items-center text-blue-gray-900 font-bold" : "flex items-center text-blue-gray-700"}>
                            {item.display}
                        </NavLink>
                    </Typography>
                ))
            }

        </div>
    )
}
